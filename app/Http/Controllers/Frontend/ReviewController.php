<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Rating;
use Illuminate\Http\Request;

class ReviewController extends Controller
{
    function getAllReviews()
    {
        $reviews = Rating::select('id','review','customer_id','stars')->with('customer')->where('approve', true)->orderBy('stars','desc')->take(9)->get();
        return response()->json($reviews);
    }
}
