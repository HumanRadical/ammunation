<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Validation\Rule;
use Inertia\Inertia;
use Illuminate\Support\Str;

class AdminProductController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Index', [
            'products' => Product::latest()->get()
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Create');
    }

    public function store(Product $product)
    {
        $attributes = request()->validate([
            'name' => ['required', Rule::unique('products', 'name')->ignore($product)],
            'price' => ['required', 'numeric'],
            'image' => 'image',
            'description' => 'required',
        ]);
        $attributes['slug'] = Str::slug($attributes['name'], '-');
        if (isset($attributes['image'])) {
            request()->file('image')->store('images');
        }

        $category = Category::where('name', request()->category)->first();
        if ($category) {
            $attributes['category_id'] = $category->id;
        } else {
            $newCategory = Category::create([
                'name' => request()->category,
                'slug' => Str::slug(request()->category, '-')
            ]);
            $attributes['category_id'] = $newCategory->id;
        }

        Product::create($attributes);

        return Inertia::render('Admin/Index', [
            'products' => Product::latest()->get()
        ]);
    }
}
