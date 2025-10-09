<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProductOption extends Model
{
    protected $table = 'product_options';
    protected $fillable = [
        'option_title',
        'option_label'
    ];
    protected $primaryKey = 'id';
}
