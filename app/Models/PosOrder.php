<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PosOrder extends Model
{
    protected $table = 'pos_orders';
    protected $fillable = [
        'product_id',
        'customer_name',
        'quantity',
        'price',
        'total',
        'status'
    ];
}
