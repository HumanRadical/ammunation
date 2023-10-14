<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Session extends Model
{
    use HasFactory;

    public $incrementing = false;

    public function cart()
    {
        return $this->hasOne(Cart::class);
    }
}
