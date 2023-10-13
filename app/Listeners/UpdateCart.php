<?php

namespace App\Listeners;

use App\Models\Cart;
use App\Models\Session;
use Illuminate\Auth\Events\Authenticated;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class UpdateCart
{
    /**
     * Handle the event.
     */
    public function handle(Authenticated $event): void
    {
        $session = Session::where('id', request()->session()->getId())->first(); 
        
        $previousSession = Session::whereNot('id', $session?->id)
        ->where('user_id', $event->user->id)->first();
        $previousCart = Cart::where('session_id', $previousSession?->id)->first();

        if ($previousCart) {
            $previousCart->update(['session_id' => $session->id]);
        }
    }
}
