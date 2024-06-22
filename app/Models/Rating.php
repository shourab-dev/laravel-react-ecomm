<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rating extends Model
{
    use HasFactory;



    function customer() {
        return $this->belongsTo(Customer::class)->select('id', 'name', 'profile_img');
    }
}
