<?php

namespace App\Http\Middleware;

use App\Models\Cart;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Middleware;
use Session;
use Tightenco\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        $cart = Cart::where('session_id', Session::getId())->with('products')->first();
        $cartCount = $cart->products->reduce(function (int $carry, Product $product) {
            return $carry + $product->pivot->quantity;
        }, 0);

        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
            ],
            'ziggy' => fn () => [
                ...(new Ziggy)->toArray(),
                'location' => $request->url(),
            ],
            'cartCount' => $cartCount
        ];
    }
}
