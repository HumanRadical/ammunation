<?php

namespace Database\Seeders;

use App\Models\Cart;
use App\Models\Category;
use App\Models\Manufacturer;
use App\Models\Product;
use App\Models\Review;
use App\Models\Session;
use App\Models\User;
use Illuminate\Database\Seeder;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        Manufacturer::query()->delete();
        Category::query()->delete();
        Session::query()->delete();
        Product::query()->delete();
        Review::query()->delete();
        User::query()->delete();
        Cart::query()->delete();

        Manufacturer::factory(5)->create();
        Category::factory(8)->create();
        Product::factory(100)->create();
        Review::factory(500)->create();
    }
}
