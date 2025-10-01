<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProductDescription extends Model
{
    protected $table = 'product_descriptions';
    protected $fillable = [
        'id',
        'description_body',
        'description_content'
    ];

    protected $primaryKey = 'id';
}
