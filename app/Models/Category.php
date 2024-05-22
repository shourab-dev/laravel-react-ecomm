<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $fillable = [
        "category_id",
        "title",
        "slug",
        "icon",
        "status",
    ];


    function products()
    {
        return $this->belongsToMany(Product::class);
    }
}
