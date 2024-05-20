<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            [
                "title" => 'Furniture',
                "slug" => 'furniture',
            ],
            [
                "title" => 'Electronics',
                "slug" => 'electronics',
            ],
            [
                "title" => 'Fashion',
                "slug" => 'fashion',
            ],
            [
                "title" => 'Home Appliances',
                "slug" => 'home-appliances',
            ],
            [
                "title" => 'Gadgets',
                "slug" => 'gadgets',
            ],
        ];

        foreach($categories as $category){
            Category::create($category);
        }


    }
}
