<?php

namespace App\Services\OrderService;

use App\Models\Cart;
use App\Models\Order as ModelsOrder;
use Illuminate\Support\Facades\DB;
use Symfony\Component\HttpFoundation\JsonResponse;

class Order
{
    public function createOrder($request): JsonResponse
    {
        // $order = collect($request->product_id)->map(fn($item) => [
        //     'user_id' => $request->user_id,
        //     'product_id' => $item,
        //     'total' => $request->total,
        //     'status' => 'pending',
        //     'delivery_type' => $request->delivery_type,
        //     'note' => $request->note,
        // ])->toArray();
        // Cart::whereIn('product_id', $request->product_id)->delete();
        // ModelsOrder::insert($order);

        $order = collect($request->cart)->map(
            function ($item) use ($request) {
                Cart::where('product_id', $item['product_id'])->delete();
                ModelsOrder::create([
                    'user_id' => $request->user_id,
                    'address_id' => $request->address_id,
                    'total' => $request->total,
                    'status' => 'pending',
                    'product_id' => $item['product_id'],
                    'price' => $item['products']['product_price'],
                    'quantity' => $item['quantity']
                ]);
            }

        );
        return response()->json($order);


        return response()->json($request);
    }
    public function getOrders(): JsonResponse
    {
        $orders =  ModelsOrder::with(['user', 'product', 'address'])->paginate(8);

        return response()->json($orders);
    }
    public function updateStatusById($request)
    {
        $order = ModelsOrder::findOrFail($request->id)->update([
            'status' => $request->status
        ]);
        return response()->json($order);
    }
    public function getOrderById(): void {}
}
