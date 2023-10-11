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
        $perPage = 12;

        return Inertia::render('Shop/Index', [
            'products' => Product::filter(
                request(['category', 'manufacturer', 'minPrice', 'maxPrice', 'search'])
            )->latest()->paginate($perPage)->all(),
            'pageCount' => ceil(count(Product::all()) / $perPage),
            'manufacturers' => Manufacturer::all(),
            'categories' => Category::all(),
        ]);
    }

    public function show(Product $product)
    {
        return Inertia::render('Shop/Show', [
            'product' => $product
        ]);
    }
}
