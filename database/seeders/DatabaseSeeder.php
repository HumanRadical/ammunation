<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Manufacturer;
use App\Models\Category;
use App\Models\Product;
use App\Models\Review;
use App\Models\User;
use App\Models\Cart;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        Manufacturer::query()->delete();
        Category::query()->delete();
        Product::query()->delete();
        Review::query()->delete();
        User::query()->delete();
        Cart::query()->delete();

        Manufacturer::factory(5)->create();
        Category::factory(8)->create();
        Product::factory(20)->create();
        Review::factory(100)->create();
    }
}
