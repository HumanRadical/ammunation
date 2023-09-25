<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index()
    {
        return Inertia::render('Shop/Index', [
            'products' => Product::filter(
                request(['category', 'minPrice', 'maxPrice', 'search'])
            )->latest()->get(),
            'categories' => Category::all(),
            'query' => request()->query()
        ]);
    }

    public function show(Product $product)
    {
        $this->calcStars([$product]);
        return Inertia::render('Shop/Show', [
            'product' => $product
        ]);
    }

    public function calcStars(Array $products)
    {
        foreach ($products as $product) {
            $avgStars = 0;
            foreach ($product->reviews->pluck('stars') as $stars) {
                $avgStars += $stars;
            }
            $avgStars /= count($product->reviews);
        }

        $product->update(['stars' => $avgStars]);
    }
}
