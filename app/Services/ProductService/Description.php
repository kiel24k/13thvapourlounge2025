<?php

namespace App\Services\ProductService;

use App\Models\ProductDescription;

class Description
{
    public function deleteDescription($id) :bool
    {
        return ProductDescription::findOrFail($id)->delete();
    }
}
