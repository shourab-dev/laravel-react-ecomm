<?php

namespace App\Http\Controllers\Frontend\User;

use App\Models\Customer;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class RegisterController extends Controller
{
    function showRegister()
    {
        return inertia('Frontend/SignUp');
    }
    function attemptRegister(Request $request)
    {
        $request->validate([
            'email' => "required|email|unique:customers,email",
            'password' => "required|confirmed",
            'name' => 'required|min:3'
        ]);

        $customer = Customer::create($request->only('email', 'name', 'password'));
        auth('customer')->login($customer);
        return to_route('profile.show');



        
    }
}
