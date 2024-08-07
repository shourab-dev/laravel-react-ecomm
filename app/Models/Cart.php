<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    use HasFactory;

    protected $fillable = [
        "product_id",
        "customer_id",
        "qty",
        "total_price",
    ];


    function product()
    {
        return $this->belongsTo(Product::class, "product_id");
    }
}
