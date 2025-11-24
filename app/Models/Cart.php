<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
     protected $fillable = [
        'product_id',
        'user_id',
        'quantity',
        'option_type',
        'total',
    ];

    // 🔗 Each cart belongs to one product
    public function products()
    {
        return $this->belongsTo(Product::class, 'product_id', 'id');
    }

    // 🔗 Each cart belongs to one user
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }
}
