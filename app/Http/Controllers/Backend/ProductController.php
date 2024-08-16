<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Gallery;
use App\Models\Product;
use App\Models\Stock;
use App\Traits\SlugGenerator;
use App\Traits\Trait\MediaUploader;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    use SlugGenerator, MediaUploader;

    function viewAllProducts()
    {
        $products = Product::latest()->paginate(20);
        return inertia('Backend/Products/Products', [
            'products' => $products
        ]);
    }

    function addProducts($id = null)
    {
        $categories = Category::where('status', true)->select('title as label', 'id as value')->get();
        $editedProduct = null;
        if ($id) {
            $editedProduct  = Product::with('galleries','inventory', 'categories:id as value,title as label')->findOrFail($id);
        }
        return inertia('Backend/Products/AddProducts', [
            'categories' => $categories,
            'product' => $editedProduct,
        ]);
    }

    function storeProduct(Request $request, $id = null)
    {

        //* VALIDATION
        $request->validate([
            'title' => 'required|min:3',
            'price' => 'required',
            "cost" => 'nullable|numeric',
            'sellPrice' =>
            function ($attribute, $value, $fail) use ($request) {
                if ($request->has('price') && $value >= $request->input('price')) {
                    $fail('Sell price must be lower than price.');
                }
            },
            'featuredImage' => 'nullable|mimes:jpg,png,webp,jpeg',
            'galleries.*' => 'nullable|mimes:jpg,png,webp,jpeg',
        ]);

        
        //* STORE OR UPDATE
        $slug = $this->generateSlug($request->title, Product::class);


        $product =  Product::findOrNew($id);
        $product->title =  $request->title;
        $product->slug = $slug;
        $product->sku = $request->sku;
        $product->short_detail = $request->shortDetail;
        $product->price = $request->price;
        $product->sell_price = $request->sellPrice;
        $product->stock = $request->stock;
        $product->long_detail = $request->detail;
        if ($request->file('featuredImage')) {
            $feature_image = $this->uploadSingleMedia($request->featuredImage, $slug, $product->featured_img, 'products');
            $product->featured_img = $feature_image;
        }
        $product->status = $request->status;
        $product->featured = $request->featured;
        $product->cross_sell = $request->crossProducts ? json_encode($request->crossProducts) : $product->cross_sell;
        $product->save();

        $stock = Stock::updateOrCreate([
            'product_id' => $product->id,
        ], [
            'stock'     => $request->initialStock,
            'cost' => $request->cost ?? 0,
        ]);
        // $stock->product_id = $product->id;
        // $stock->stock = $request->initialStock;
        // $stock->cost = $request->cost ?? 0;

        //* SET IF REQUEST HAS GALLERIES 
        if ($request->galleries) {
            // $oldGalleries = Gallery::where('product_id', $product->id)->get();
            // foreach ($oldGalleries as $oldGallery) {
            //     $this->deleteMedia($oldGallery->title);
            //     $oldGallery->delete();
            // }
            $uploadGalleries = $this->uploadMultiMedia($request->galleries, [], 'galleries');
            foreach ($uploadGalleries as $gallery) {
                $productGallery = new Gallery();
                $productGallery->title = $gallery;
                $productGallery->product_id  = $product->id;
                $productGallery->save();
            }
        }


        //* STORE OR SYNC CATEGORIES

        $categories = collect($request->categories)->pluck('value');
        $product->categories()->sync($categories);



        return  to_route('admin.products.all');
    }


    function updateFeaturedProducts($id)
    {
        $product = Product::findOrFail($id);
        $product->featured = !$product->featured;
        $product->save();
    }
    function updateStatusProducts($id)
    {
        $product = Product::findOrFail($id);
        $product->status = !$product->status;
        $product->save();
    }

    function deleteProduct($id)
    {
        $product = Product::findOrFail($id)->delete();
    }




    function getCrossProducts($search = null)
    {
        if ($search) {
            $query = Product::query();
            $query->where('title', 'LIKE', '%' . $search . '%');
            $products = $query->select('id as value', 'title as label')->get();
        } else {

            $products = [];
        }
        return $products;
    }
}
