<?php

use App\Http\Controllers\AdminProductController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ReviewController;
use App\Models\Category;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home', [
        'categories' => Category::all()
    ]);
})->name('home');

Route::get('/shop', [ProductController::class, 'index'])->name('shop.index');
Route::get('/shop/{product:slug}', [ProductController::class, 'show'])->name('shop.show');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::post('/shop/{product:slug}/reviews', [ReviewController::class, 'store'])->name('review.store');
});

Route::middleware('can:admin')->group(function () {
    Route::get('/admin/products', [AdminProductController::class, 'index'])->name('admin.index');
    Route::get('/admin/products/create', [AdminProductController::class, 'create'])->name('admin.create');
    Route::get('/admin/products/{product:slug}', [AdminProductController::class, 'edit'])->name('admin.edit');
    Route::post('/admin/products', [AdminProductController::class, 'store'])->name('admin.store');
    Route::patch('/admin/products/{product:slug}', [AdminProductController::class, 'update'])->name('admin.update');
    Route::delete('/admin/products/{product:slug}', [AdminProductController::class, 'destroy'])->name('admin.destroy');
    Route::post('/admin/manufacturers', [AdminProductController::class, 'storeManufacturer'])->name('admin.storeManufacturer');
    Route::post('/admin/categories', [AdminProductController::class, 'storeCategory'])->name('admin.storeCategory');
});

require __DIR__.'/auth.php';
