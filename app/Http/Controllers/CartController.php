<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Product;
use App\Models\Session;
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
        $selectedProduct = $cart->products->where('id', $product->id)->first();
        if ($selectedProduct) {
            $selectedProduct->pivot->increment('quantity', request()->quantity);
        } else {
            $cart->products()->attach($product->id, ['quantity' => request()->quantity]);
        }

        return back();
    }

    public function update(Product $product)
    {
        $cart = $this->validateCart();
        if (request()->quantity > 0) {
            $selectedProduct = $cart->products->where('id', $product->id)->first();
            if ($selectedProduct) {
                $selectedProduct->pivot->update(['quantity' => request()->quantity]);
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
        $session = Session::where('id', request()->session()->getId())->first(); 
        $cart = Cart::where('session_id', $session->id)->first();

        if (auth()->user()) {
            $previousSession = Session::whereNot('id', $session->id)
                ->where('user_id', auth()->user()->id)->first();
            if ($previousSession) {
                $previousCart = Cart::where('session_id', $previousSession->id)->first();
                if ($previousCart) {
                    $previousCart->update(['session_id' => $session->id]);
                    $cart = $previousCart;
                }
            }
        }
        
        if (!$cart) {
            $cart = Cart::create(['session_id' => $session->id]);
        }

        return $cart;
    }
}
