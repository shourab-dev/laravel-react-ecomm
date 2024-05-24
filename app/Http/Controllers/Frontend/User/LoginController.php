<?php

namespace App\Http\Controllers\Frontend\User;

use App\Http\Controllers\Controller;
use App\Models\Customer;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    function showLogin()
    {
        return inertia('Frontend/SignIn');
    }
    function attemptLogin(Request $request)
    {
        $request->validate([
            'email' => 'email|required',
            'password' => 'required'
        ]);

        $credentials = $request->only('email', 'password');
        if (auth('customer')->attempt($credentials, $request->remember)) {
            $request->session()->regenerate();
            return to_route('profile.show');
        } else{
            return back()->withErrors([
                'email' => 'The provided credentials do not match our records.',
            ])->onlyInput('email');
        }
    }
}
