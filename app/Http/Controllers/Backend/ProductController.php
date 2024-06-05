<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\Gallery;
use App\Models\Product;
use App\Traits\SlugGenerator;
use App\Traits\Trait\MediaUploader;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    use SlugGenerator, MediaUploader;

    function viewAllProducts()
    {
        $products = Product::paginate(20);
        return inertia('Backend/Products', [
            'products' => $products
        ]);
    }

    function storeProduct(Request $request, $id = null)
    {

        //* VALIDATION
        $request->validate([
            'title' => 'required|min:3',
            'price' => 'required',
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

        $product->save();

        //* SET IF REQUEST HAS GALLERIES 
        if ($request->galleries) {
            $oldGalleries = Gallery::where('product_id', $product->id)->get();
            foreach ($oldGalleries as $oldGallery) {
                $this->deleteMedia($oldGallery->title);
                $oldGallery->delete();
            }
            $uploadGalleries = $this->uploadMultiMedia($request->galleries, [], 'galleries');
            foreach ($uploadGalleries as $gallery) {
                $productGallery = new Gallery();
                $productGallery->title = $gallery;
                $productGallery->product_id  = $product->id;
                $productGallery->save();
            }
        }
    }
}
