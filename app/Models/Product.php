<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        "title",
        "featured_img",
        "short_detail",
        "long_detail",
        "status",
        "sku",
        "cross_sell",
    ];
}
