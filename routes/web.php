<?php

use App\Http\Controllers\Backend\CategoryController;
use App\Http\Controllers\Backend\ProductController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/admin-profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/admin-profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/admin-profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware('auth')->prefix('/admin')->name('admin.')->group(function () {
    Route::prefix('/category')->name('category.')->controller(CategoryController::class)->group(function () {
        Route::get('/', 'index')->name('index');
        Route::post('/store-or-update/{id?}', 'storeOrUpdate')->name('storeOrUpdate');
        Route::post('/update-status/{id}', 'toggleStatus')->name('updateStatus');
        Route::post('/delete/{id}', 'deleteCategory')->name('delete');
    });


    Route::prefix('/products')->name('products.')->controller(ProductController::class)->group(function () {
        Route::get('/', 'viewAllProducts')->name('all');
        Route::get('/add/{id?}', 'addProducts')->name('add');
        Route::get('/update-featured/{id}', 'updateFeaturedProducts')->name('featured');
        Route::get('/update-status/{id}', 'updateStatusProducts')->name('status');
        Route::post('/store-update/{id?}', 'storeProduct')->name('store');
        Route::get('/get-cross-products/{search?}', 'getCrossProducts')->name('crossProducts');
        Route::get('/delete/{id}', 'deleteProduct')->name('delete');
    });
});


require __DIR__ . '/auth.php';
