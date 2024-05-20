<?php

namespace App\Http\Controllers\Frontend;

use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CategoryController extends Controller
{
    function getCategoriesData()
    {
        $categories = Category::where('category_id', null)->get();
        return response()->json($categories);
    }
}
