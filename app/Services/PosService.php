<?php

namespace App\Services;

use App\Models\PosOrder;
use Illuminate\Support\Facades\DB;
use Symfony\Component\HttpFoundation\JsonResponse;

class PosService
{

    public function createOrder($request): JsonResponse
    {
        $request->validate([
            'customer_name' => 'required|unique:pos_orders,customer_name'
        ]);

        $order = collect($request->selectedProducts)->map(function ($item) use ($request) {
            return PosOrder::create([
                'product_id' => $item['id'],
                'customer_name' => $request->customer_name,
                'quantity' => $item['quantity'],
                'price' => (int)$item['product_price'],
                'total' => (float)$item['product_price'] * $item['quantity'],
                'status' => $request->status
            ]);
        });

        return response()->json($order);
    }

    public function getCustomerByStatus($status)
    {
        $customer = PosOrder::where('status', $status)
            ->select('customer_name', 'created_at')
            ->distinct()
            ->get();
        return response()->json($customer);
    }
}
