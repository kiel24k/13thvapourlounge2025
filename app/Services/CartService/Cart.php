<?php

namespace App\Services\CartService;

use App\Models\Cart as ModelsCart;

class Cart
{

    public function createCart($request)
    {
        ModelsCart::create([
            'user_id' => $request->user_id,
            'product_id' => $request->product_id,
            'quantity' => $request->quantity,
            'option_type' => $request->option_type,
            'total' => $request->total
        ]);
        return response()->json(['message' => 'Add to cart success']);
    }

    public function showCartById($id)
    {
        $carts = ModelsCart::with('products')->where('user_id', $id)->get();
        return response()->json($carts);
    }

    public function updateCart($request)
    {
        $collection = collect($request)->map(function ($data) {
            ModelsCart::where('id', $data['id'])->update([
                'quantity' => $data['quantity'],
                'total' => $data['quantity'] * $data['products']['product_price']
            ]);
        });

        return response()->json($collection);
    }

    public function deleteCart($request)
    {
        $collection = collect($request)->map(function ($data) {
            ModelsCart::findOrFail($data)->delete();
        });

        return response()->json($collection);
    }
}
