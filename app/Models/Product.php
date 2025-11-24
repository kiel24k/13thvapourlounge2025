<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $table = 'products';
    protected $fillable = [
        'product_category',
        'product_name',
        'product_price',
        'product_quantity',
        'image',
        'product_details'
    ];
    
}
