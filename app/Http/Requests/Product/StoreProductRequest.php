<?php

namespace App\Http\Requests\Product;

use Illuminate\Foundation\Http\FormRequest;

class StoreProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'product_category' => 'required',
            'product_name' => 'required|unique:products,product_name',
            'product_price' => 'required',
            'product_quantity' => 'required',
            'product_description' => 'required',
            'product_option' => 'required',
            'image' => 'nullable',
            'product_details' =>  'nullable|string',
            
        ];
    }
}
