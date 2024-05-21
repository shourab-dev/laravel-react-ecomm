<?php

use App\Http\Controllers\Frontend\CategoryController;
use App\Http\Controllers\Frontend\HomeController;
use App\Http\Controllers\Frontend\ProductController;
use Illuminate\Support\Facades\Route;


Route::get('/', [HomeController::class, 'showHomePage'])->name('home');
//* SINGLE PRODUCT ROUTE
Route::get('/shop', [HomeController::class, 'shopPage'])->name('shop');
Route::get('/about', [HomeController::class, 'aboutPage'])->name('about');
Route::get('/blog', [HomeController::class, 'blogPage'])->name('blog');
Route::get('/contact-us', [HomeController::class, 'contactPage'])->name('contact');



//* GET ALL CATEGORY BASED PRODUCTS (ARCHEIVED PAGE)
Route::get('/category/{slug}', [CategoryController::class, 'archeivePage'])->name('category.archeive');
Route::get('/product/{slug}', [ProductController::class, 'singleProduct'])->name('product.view');


//* SEARCH PRODUCTS
Route::get('/search/{title}', [ProductController::class, 'searchProducts'])->name('products.search');





//* GET ALL CATEGORIES FOR FRONTEND
Route::get('/get-categories', [CategoryController::class, 'getCategoriesData'])->name('categories.data.all');
