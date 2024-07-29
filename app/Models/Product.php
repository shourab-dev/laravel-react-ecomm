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

    function categories()
    {
        return $this->belongsToMany(Category::class);
    }
    function galleries()
    {
        return $this->hasMany(Gallery::class);
    }

    function gallery()
    {
        return $this->hasOne(Gallery::class)->select('id', 'product_id', 'title')->latest();
    }

    function reviews()
    {
        return $this->hasMany(Rating::class)->where('approve', true);
    }
    function inventory()
    {
        return $this->hasOne(Stock::class,'product_id');
    }
}
