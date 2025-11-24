<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Services\CartService\Cart as CartServiceCart;
use Illuminate\Http\Request;

class CartController extends Controller
{
    protected $cart;
    public function __construct(CartServiceCart $cart)
    {
        $this->cart = $cart;
    }
    public function storeCart(Request $request)
    {
        $this->cart->createCart($request);
    }

    public function showCart($id)
    {
        return $this->cart->showCartById($id);
    }

    public function updateCart(Request $request)
    {
        return $this->cart->updateCart($request);
    }

    public function deleteCart(Request $request)
    {
        return $this->cart->deleteCart($request);
    }
}
