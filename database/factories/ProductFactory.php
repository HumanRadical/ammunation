<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

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
        return [
            'name' => ucfirst(fake()->word()) . '-' . fake()->randomNumber(2, false),
            'slug' => fake()->slug(),
            'category' => ucfirst(fake()->word()),
            'price' => fake()->randomFloat(2, 100, 5000),
            'description' => fake()->paragraph(5),
        ];
    }
}
