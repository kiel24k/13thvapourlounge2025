<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    protected $table = 'addresses';
    protected $fillable = [
        'user_id',
        'first_name',
        'last_name',
        'company_name',
        'street_name',
        'apartment',
        'town',
        'zip_code',
        'contact_number',
        'email',
    ];

    
    public $timestamps = true;
}
