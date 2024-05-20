<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    function showHomePage()
    {
        return inertia('Frontend/Home');
    }
    function shopPage()
    {

        return inertia('Frontend/Shop');
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
