<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Review;
use App\Rules\HalfIncrement;

class ReviewController extends Controller
{
    public function store(Product $product)
    {
        request()->validate([
            'stars' => ['required', 'numeric', 'min:0.5', 'max:5', new HalfIncrement],
            'body' => 'required'
        ]);

        $prevReview = Review::find($product->id)->where('user_id', auth()->user()->id);
        if ($prevReview) {
            $prevReview->delete();
        }

        $product->reviews()->create([
            'user_id' => request()->user()->id,
            'stars' => request('stars'),
            'body' => request('body')
        ]);

        return back();
    }
}
