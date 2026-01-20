<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Product;
use Illuminate\Http\Request;

class AnalyticController extends Controller
{
    public function ProductTrending()
    {
        $product = Product::where('product_quantity', '<=', '50')->get();
        return response()->json($product);
    }
    public function ProductBestSeller()
    {
        $order = Order::orderBy('product_id', 'desc') // highest first
            ->take(4) 
            ->get();
         

        $product = Product::where('id', $order->product_id)->get();
        return response()->json($product);
    }

    public function bestSellers() {}
}
