<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Frontend\HomeController;
use App\Http\Controllers\Frontend\ProductController;
use App\Http\Controllers\Frontend\CategoryController;
use App\Http\Controllers\Frontend\User\LoginController;
use App\Http\Controllers\Frontend\User\ProfileController;
use App\Http\Controllers\Frontend\User\RegisterController;


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


//* USER LOGIN PANEL
Route::get('/sign-in', [LoginController::class, 'showLogin'])->name('signin.show');
Route::post('/sign-in', [LoginController::class, 'attemptLogin'])->name('signin.attempt');
Route::get('/sign-up', [RegisterController::class, 'showRegister'])->name('signup.show');
Route::post('/sign-up', [RegisterController::class, 'attemptRegister'])->name('signup.attempt');
Route::get('/sign-out', [LoginController::class, 'signOut'])->name('signout.attempt');

//* USER PROFILE
Route::prefix('/profile')->name('profile.')->controller(ProfileController::class)->middleware('customer')->group(function () {
    Route::get('/', "showProfile")->name('show');
});




//* GET AUTH CUSTOMER
Route::get('/get-auth-customer', [ProfileController::class, 'getAuthCustomer'])->name('auth.customer.get');


