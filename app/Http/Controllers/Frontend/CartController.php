<?php

namespace App\Http\Controllers\Frontend;

use App\Models\Cart;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CartController extends Controller
{
    function addToCart(Request $request, $id)
    {

        $isExists = Cart::where([['customer_id', auth('customer')->id()], ['product_id', $id]])->exists();
        if ($isExists) {
            $cart = Cart::where([['customer_id', auth('customer')->id()], ['product_id', $id]])->increment('qty', $request->qty);
        } else {

            $cart = new Cart();
            $cart->product_id = $id;
            $cart->customer_id = auth('customer')->id();
            $cart->qty = $request->qty;
            $cart->save();
        }

        
    }
}
