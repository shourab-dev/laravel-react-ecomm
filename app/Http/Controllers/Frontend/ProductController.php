<?php

namespace App\Http\Controllers\Frontend;

use App\Models\Product;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Gallery;
use App\Traits\Trait\MediaUploader;

class ProductController extends Controller
{
    use MediaUploader;
    function searchProducts($title)
    {

        $query = Product::query();

        if ($title) {
            $query->where('title', 'LIKE', '%' . $title . '%');
        }

        $products = $query->select('id', 'title', 'slug')->get();

        return response()->json($products);
    }


    function singleProduct()
    {
        return inertia('Frontend/SingleProduct');
    }

    function getFeaturedProducts(Request $request)
    {
        $request->validate(
            [
                'length' => 'numeric'
            ]
        );

        $products  = Product::select('id', 'title', 'price', 'sell_price', 'slug', 'status', 'featured', 'featured_img')->where([['status', true], ['featured', true]])->latest()->take($request->length ?? 5)->get();
        return response()->json($products);
    }

    function removeGalleryImage($id)
    {
        $gallery = Gallery::findOrFail($id);
        $this->deleteMedia($gallery->title);
        $gallery->delete();
        return response('Gallery image has been removed', 200);
    }
}
