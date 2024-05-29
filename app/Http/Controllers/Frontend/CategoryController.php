<?php

namespace App\Http\Controllers\Frontend;

use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CategoryController extends Controller
{
    function getCategoriesData()
    {
        $categories = Category::withCount('products as productCount')->where('category_id', null)->where('status', true)->get();
        return response()->json($categories);
    }


    function archeivePage()
    {
        return inertia('Frontend/ArcheivePage');
    }
}
