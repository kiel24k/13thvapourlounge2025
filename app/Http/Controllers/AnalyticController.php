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
        $order = Order::orderBy('product_id', 'desc') // highest product_id first
            ->take(4)
            ->get();

        // Get all product_ids from these orders
        $productIds = $order->pluck('product_id'); // returns a collection of ids

        // Get products with these ids
        $products = Product::whereIn('id', $productIds)->get();
        return response()->json($products);
    }

    public function bestSellers() {}
}
