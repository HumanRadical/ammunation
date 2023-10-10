<?php

namespace App\Http\Controllers;

use App\Models\Manufacturer;
use App\Models\Category;
use App\Models\Product;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index()
    {
        return Inertia::render('Shop/Index', [
            'products' => Product::filter(
                request(['category', 'manufacturer', 'minPrice', 'maxPrice', 'search'])
            )->latest()->paginate(12)->all(),
            'manufacturers' => Manufacturer::all(),
            'categories' => Category::all(),
            'query' => request()->query()
        ]);
    }

    public function show(Product $product)
    {
        return Inertia::render('Shop/Show', [
            'product' => $product
        ]);
    }
}
