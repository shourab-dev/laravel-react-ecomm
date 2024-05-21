<?php

namespace App\Http\Controllers\Frontend;

use App\Models\Product;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ProductController extends Controller
{
    function searchProducts($title)
    {

        $query = Product::query();

        if ($title) {
            $query->where('title', 'LIKE', '%' . $title . '%');
        }

        $products = $query->select('id', 'title', 'slug')->get();

        return response()->json($products);
    }


    function singleProduct() {
        return inertia('Frontend/SingleProduct');
    }
}
