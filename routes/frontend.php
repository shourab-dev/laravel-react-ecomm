<?php

use App\Http\Controllers\Frontend\CategoryController;
use App\Http\Controllers\Frontend\HomeController;
use Illuminate\Support\Facades\Route;


Route::get('/', [HomeController::class, 'showHomePage'])->name('home');
Route::get('/shop', [HomeController::class, 'shopPage'])->name('shop');
Route::get('/about', [HomeController::class, 'aboutPage'])->name('about');
Route::get('/blog', [HomeController::class, 'blogPage'])->name('blog');
Route::get('/contact-us', [HomeController::class, 'contactPage'])->name('contact');



Route::get('/get-categories', [CategoryController::class,'getCategoriesData'])->name('categories.data.all');