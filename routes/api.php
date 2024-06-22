<?php

use App\Http\Controllers\Frontend\ProductController;
use App\Http\Controllers\Frontend\ReviewController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');



//* FRONTEND API ROUTES

//* GET ALL FEATURED PRODUCTS
Route::get('/get-banners', [ProductController::class, 'getFeaturedProducts'])->name('getFeaturedProducts');

//* REMOVE PRODUCTS FROM GALLERY
Route::get('/remove-gallery-image/{id}', [ProductController::class, 'removeGalleryImage'])->name('removeGalleryImage');



//* GET REVIEWS FOR HOME PAGE
Route::get('/get-reviews', [ReviewController::class, 'getAllReviews'])->name('getProductsReviews');
