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

    public function store()
    {
        $attributes = $this->validateProduct();
        Product::create($attributes);

        return to_route('admin.index');
    }

    public function edit(Product $product)
    {
        return Inertia::render('Admin/Edit', [
            'product' => $product
        ]);
    }

    public function update(Product $product)
    {
        $attributes = $this->validateProduct($product);
        $product->update($attributes);

        return to_route('admin.index');
    }

    public function validateProduct(?Product $product = null)
    {
        $product ??= new Product();

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

        return $attributes;
    }
}
