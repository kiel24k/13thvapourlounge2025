<?php

namespace App\Http\Controllers;

use App\Http\Requests\Order\OrderRequest;
use App\Services\OrderService\Order;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    protected $order;
    public function __construct(Order $order)
    {
        $this->order = $order;
    }
    public function storeOrder(OrderRequest $request)
    {
        return $this->order->createOrder($request);
    }
}
