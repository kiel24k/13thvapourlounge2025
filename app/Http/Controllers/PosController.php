<?php

namespace App\Http\Controllers;

use App\Services\PosService;
use Illuminate\Http\Request;

class PosController extends Controller
{
    protected $pos;
    public function __construct(PosService $pos)
    {
        $this->pos = $pos;
    }

    public function storeOrder (Request $request) {
        return $this->pos->createOrder($request);
    }

    public function showCustomerByStatus ($status){
        return $this->pos->getCustomerByStatus($status);
    }
}
