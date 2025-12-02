<?php

namespace App\Services;

use App\Models\Address;
use Symfony\Component\HttpFoundation\JsonResponse;

class AddressService
{

    public function getAddressById($id) :JsonResponse
    {
        $address = Address::where('user_id', $id)->get();
        return response()->json($address);
    }
    public function createAddress($request): JsonResponse
    {
        $address = Address::create([
            'user_id' => $request->user_id,
            'first_name' => $request->first_name,
            'last_name'  => $request->last_name,
            'company_name'  => $request->company_name,
            'street_name'  => $request->street_name,
            'apartment'  => $request->apartment,
            'town'  => $request->town,
            'zip_code'  => $request->zip_code,
            'contact_number'  => $request->contact_number,
            'email'  => $request->email,
        ]);

        return response()->json($address);
    }
}
