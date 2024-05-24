<?php

namespace Database\Seeders;

use App\Models\Customer;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Support\Facades\Hash;

class CustomerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $customers = [
            [
                'name' => "Shourab",
                'phone' => '01997492233',
                'email' => 'shourab@gmail.com',
                'address' => 'enayet bazer chittagong',
                'password' => Hash::make('password')
            ]
        ];
        foreach ($customers as $customer) {

            Customer::create($customer);
        }
    }
}
