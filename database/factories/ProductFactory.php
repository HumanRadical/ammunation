<?php

namespace Database\Factories;

use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $name = ucfirst(fake()->word()) . '-' . fake()->randomNumber(2, false);
        return [
            'name' => $name,
            'manufacturer' => ucwords(join(' ', fake()->words())),
            'slug' => Str::slug($name, '-'),
            'category_id' => Category::all()->random(),
            'price' => fake()->randomFloat(2, 100, 5000),
            'description' => fake()->paragraph(5),
        ];
    }
}
