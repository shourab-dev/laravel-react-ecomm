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
            "title" => fake()->word(),
            "slug" => str()->slug(fake()->word() . fake()->name ()),
            "short_detail" => fake()->sentence(),
            "long_detail" => fake()->sentence(),
            "status" => fake()->numberBetween(0, 1),
            "sku" => fake()->randomNumber(5),

        ];
    }
}
