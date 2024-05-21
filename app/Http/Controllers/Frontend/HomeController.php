<?php

namespace App\Http\Controllers\Frontend;

use App\Models\Product;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class HomeController extends Controller
{
    function showHomePage()
    {
        return inertia('Frontend/Home');
    }
    function shopPage(Request $request)
    {

        $query = Product::query();
        if ($request->title) {
            $query->where('title', 'LIKE', '%' . $request->title . '%');
        }

        $products = $query->get();

        return inertia('Frontend/Shop', [
            'query' => $request->query(),
            'products' => $products
        ]);
    }

    function aboutPage()
    {

        return inertia('Frontend/About');
    }
    function blogPage()
    {

        return inertia('Frontend/Blog');
    }
    function contactPage()
    {

        return inertia('Frontend/Contact');
    }
}
