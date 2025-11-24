<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class AnalyticController extends Controller
{
    public function ProductTrending()
    {
        $product = Product::where('product_quantity', '<=', '50')->get();
        return response()->json($product);
    }

    public function bestSellers() {}
}
