<?php

namespace App\Http\Controllers;

use Session;
use App\Models\Cart;
use App\Models\User;
use Inertia\Inertia;

class CartController extends Controller
{
    public function show()
    {
        $session_id = Session::getId();
        $cart = Cart::where('session_id', $session_id)->first();
        if (!$cart) {
            $cart = Cart::create(['session_id' => $session_id]);
        }
        return Inertia::render('Cart', [
            'products' => $cart->products
        ]);
    }

    public function add(User $user)
    {
        if ($user->cart) {

        }
    }
}
