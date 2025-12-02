<?php

namespace App\Http\Controllers;

use App\Http\Requests\Order\OrderRequest;
use App\Services\AddressService;
use Illuminate\Http\Request;

class AddressController extends Controller
{
    protected $address;
    public function __construct(AddressService $address)
    {
        $this->address = $address;
    }

    public function showAddressById ($id) {
        return $this->address->getAddressById($id);
        
    }
    public function storeAddress(OrderRequest $request)
    {
        return $this->address->createAddress($request);
    }
}
