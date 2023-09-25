<?php

namespace App\Http\Controllers;

use App\Models\Product;

class ReviewController extends Controller
{
    public function store(Product $product)
    {
        request()->validate([
            'stars' => ['required', 'numeric', 'min:0.5', 'max:5'],
            'body' => 'required'
        ]);

        $product->reviews()->create([
            'user_id' => request()->user()->id,
            'stars' => request('stars'),
            'body' => request('body')
        ]);

        return back();
    }
}
