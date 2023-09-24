<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Category;
use App\Models\Product;
use App\Models\Review;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        Category::query()->delete();
        Product::query()->delete();
        Review::query()->delete();
        User::query()->delete();

        Category::factory(6)->create();
        Product::factory(20)->create();
        Review::factory(100)->create();
    }
}
