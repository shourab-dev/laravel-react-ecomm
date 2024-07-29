<?php

namespace App\Http\Controllers\Frontend;

use App\Models\Gallery;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Traits\Trait\MediaUploader;
use App\Http\Controllers\Controller;
use App\Models\Rating;

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


    function singleProduct($slug)
    {
        $product = Product::where([['slug', $slug], ['status', true]])->withCount('reviews as totalReviews')->with(['galleries'])
        ->with('inventory')
        ->with(['reviews' => function ($q) {
            $q->with('customer')->take(3);
        }])->first();
        if (!$product) {
            return abort(404);
        }
        // dd($product);
        return inertia('Frontend/SingleProduct', [
            'product' => $product
        ]);
    }

    function getFeaturedProducts(Request $request)
    {
        $request->validate(
            [
                'length' => 'numeric',
                'avg_rating' => 'boolean',
                'rating' => 'boolean',
                'gallery' => 'boolean'
            ]
        );

        $query = Product::query()->select('id', 'title', 'price', 'sell_price', 'slug', 'status', 'featured', 'featured_img');


        if ($request->avg_rating) {
            $query->withCount(['reviews as avgRating' => function ($query) {
                $query->select(DB::raw('avg(stars)'));
            }]);
        }
        if ($request->rating) {
            $query->withCount('reviews as totalReviews');
        }
        if ($request->gallery) {
            $query->with('gallery');
        }



        $products  = $query->where([['status', true], ['featured', true]])->latest()->take($request->length ?? 5)->get();
        return response()->json($products);
    }

    function removeGalleryImage($id)
    {
        $gallery = Gallery::findOrFail($id);
        $this->deleteMedia($gallery->title);
        $gallery->delete();
        return response('Gallery image has been removed', 200);
    }


    function addReview(Request $request, $id)
    {
        

        $rating = new Rating();
        $rating->stars = $request->rating;
        $rating->customer_id = auth('customer')->id();
        $rating->product_id = $id;
        $rating->review = $request->review;
        $rating->save();
    }



    function getRelatedProducts($ids = null) {
        
        $relatedProducts = Product::select('id', 'title', 'price', 'sell_price', 'slug', 'status', 'featured', 'featured_img')->whereIn('id', collect(json_decode($ids))->pluck('value'))->get();
        return response()->json($relatedProducts);

    }
}
