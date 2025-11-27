<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $table = 'orders';
    protected $fillable = [
        'user_id',
        'product_id',
        'first_name',
        'last_name',
        'company_name',
        'street_name',
        'apartment',
        'town',
        'zip_code',
        'contact_number',
        'email',
        'note',
        'total',
    ];
}
