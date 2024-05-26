<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    function index() {
        $categories = Category::select('id','title','slug','status')->paginate(20);

        return inertia('Backend/Category', [
            'categories' => $categories
        ]);
    }
}
