<?php

namespace App\Services\OrderService;

use App\Models\Cart;
use App\Models\Order as ModelsOrder;

class Order
{
    public function createOrder($request)
    {
        $order = collect($request->product_id)->map(fn($item) => [
            'user_id' => $request->user_id,
            'product_id' => $item,
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'company_name' => $request->company_name,
            'street_name' => $request->street_name,
            'apartment' => $request->apartment,
            'town' => $request->town,
            'zip_code' => $request->zip_code,
            'contact_number' => $request->contact_number,
            'email' => $request->email,
            'note' => $request->note,
            'total' => $request->total,
            'status' => 'pending',
            'delivery_type' => $request->delivery_type,
            'note' => $request->note,
        ])->toArray();
        Cart::whereIn('product_id', $request->product_id)->delete();
        ModelsOrder::insert($order);



        return response()->json($request);
    }
    public function cancelOrder(): void {}
}
