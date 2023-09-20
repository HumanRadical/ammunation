<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Inertia\Inertia;

class AdminProductController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Index', [
            'products' => Product::all()
        ]);
    }
}
