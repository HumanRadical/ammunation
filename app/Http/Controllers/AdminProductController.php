<?php

namespace App\Http\Controllers;

use App\Models\Manufacturer;
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
        return Inertia::render('Admin/Create', [
            'manufacturers' => Manufacturer::all(),
            'categories' => Category::all()
        ]);
    }

    public function store()
    {
        $attributes = $this->validateProduct();
        Product::create($attributes);

        return to_route('admin.index');
    }

    public function storeManufacturer()
    {
        $attributes = $this->validateOther('manufacturers');
        Manufacturer::create($attributes);

        return back()->withErrors($attributes, 'manufacturers');
    }

    public function storeCategory()
    {
        $attributes = $this->validateOther('categories');
        Category::create($attributes);

        return back()->withErrors($attributes, 'categories');
    }

    public function edit(Product $product)
    {
        return Inertia::render('Admin/Edit', [
            'product' => $product,
            'manufacturers' => Manufacturer::all(),
            'categories' => Category::all()
        ]);
    }

    public function update(Product $product)
    {
        $attributes = $this->validateProduct($product);
        $product->update($attributes);

        return to_route('admin.index');
    }

    public function destroy(Product $product)
    {
        $product->delete();

        return to_route('admin.index');
    }

    public function validateProduct(?Product $product = null)
    {
        $product ??= new Product();

        $attributes = request();
        $attributes['slug'] = Str::slug($attributes['name'], '-');
        $validatedAttributes = $attributes->validate([
            'name' => ['required', Rule::unique('products', 'name')->ignore($product)],
            'slug' => ['required', Rule::unique('products', 'slug')->ignore($product)],
            'manufacturer_id' => ['required', Rule::exists('manufacturers', 'id')],
            'category_id' => ['required', Rule::exists('categories', 'id')],
            'price' => ['required', 'numeric'],
            'image' => 'image',
            'description' => 'required',
        ]);
        if (isset($validatedAttributes['image'])) {
            request()->file('image')->store('images');
        }

        return $validatedAttributes;
    }

    public function validateOther(String $type)
    {
        $attributes = request();
        $attributes['slug'] = Str::slug($attributes['name'], '-');

        return $attributes->validateWithBag($type, [
            'name' => ['required', Rule::unique($type, 'name')],
            'slug' => ['required', Rule::unique($type, 'slug')],
        ]);
    }
}
