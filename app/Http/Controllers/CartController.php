<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use Inertia\Inertia;

class CartController extends Controller
{
    public function show(User $user)
    {
        return Inertia::render('Cart', [
            'products' => $user->cart->products
        ]);
    }

    public function add(User $user)
    {
        //
    }
}
