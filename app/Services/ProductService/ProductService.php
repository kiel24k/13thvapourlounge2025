<?php

namespace App\Services\ProductService;

use App\Models\Category;
use App\Models\Product;
use App\Models\ProductDescription;
use App\Services\ProductService\Description;
use Illuminate\Support\Facades\DB;

class ProductService

{
    protected $category;
    protected $description;
    protected $option;

    public function __construct(Description $description)
    {
        $this->description = $description;
    }

    public function getProducts()
    {
        $product = DB::table('products')
            ->select("id", "product_category", "product_name", "product_price", "product_quantity", "product_details", "image", "created_at")
            ->orderBy('id', "DESC")
            ->paginate(5);
        return response()->json($product);
    }

    public function getProduct($id)
    {
        $product = Product::findOrFail($id);
        return response()->json($product);
    }

    public function createProduct($data)
    {


        $request = $data->validated();
        $uploadedImages = [];
        if ($data->hasFile('image')) {
            $uploadedImages = collect($data->file('image'))->map(function ($file) {
                $fileName = time() . '_' . $file->getClientOriginalName();
                $file->move(public_path('images'), $fileName);
                return $fileName;
            })->toArray();
        }
        $product = Product::create([
            'product_category' => $request['product_category'],
            'product_name' => $request['product_name'],
            'product_price' => $request['product_price'],
            'product_quantity' => $request['product_quantity'],
            'image' => json_encode($uploadedImages),
            'product_details' => $request['product_details'], //category, description, option
        ]);


        return response()->json($product);
    }
}
