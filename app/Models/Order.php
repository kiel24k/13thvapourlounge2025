<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $table = 'orders';
    protected $fillable = [
        'user_id',
        'product_id',
        'address_id',
        'quantity',
        'price',
        'total',
        'status',
    ];

    public $timestamps = true;
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
    public function product()
    {
        return $this->belongsTo(Product::class, 'product_id');
    }

    public function address () {
        return $this->belongsTo(Address::class, 'address_id');
    }
}
