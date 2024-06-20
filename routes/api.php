<?php

use App\Http\Controllers\Frontend\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');



//* FRONTEND API ROUTES

//* GET ALL FEATURED PRODUCTS
Route::get('/get-banners', [ProductController::class, 'getFeaturedProducts'])->name('getFeaturedProducts');
