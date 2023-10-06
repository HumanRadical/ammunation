<?php

namespace App\Http\Controllers;

use Session;
use App\Models\Cart;
use App\Models\Product;
use Inertia\Inertia;

class CartController extends Controller
{
    public function show()
    {
        $cart = $this->validateCart();

        return Inertia::render('Cart', [
            'products' => $cart->products
        ]);
    }

    public function add(Product $product)
    {
        $cart = $this->validateCart();
        $cart->products()->attach($product->id);

        return back();
    }

    public function update(Product $product)
    {
        $cart = $this->validateCart();
        foreach ($cart->products as $cartProduct) {
            if ($cartProduct->id === $product->id) {
                $cartProduct->pivot->update(['quantity' => request()->quantity]);
            }
        }

        return back();
    }

    public function remove(Product $product)
    {
        $cart = $this->validateCart();
        $cart->products()->detach($product->id);

        return back();
    }

    private function validateCart() 
    {
        $session_id = Session::getId();
        $cart = Cart::where('session_id', $session_id)->first();
        if (!$cart) {
            $cart = Cart::create(['session_id' => $session_id]);
        }

        return $cart;
    }
}
