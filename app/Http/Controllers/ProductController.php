<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index()
    {
        return Inertia::render('Home', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'products' => Product::all()
        ]);
    }

    public function show(Product $product)
    {
        return Inertia::render('ProductPage', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'product' => $product
        ]);
    }
}
