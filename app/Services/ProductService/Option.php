<?php

namespace App\Services\ProductService;

use App\Models\ProductOption;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;

class Option
{
    public function getAllOptions(): JsonResponse
    {
        $options = DB::table('product_options')
        ->select('option_title')
        ->orderBy('id', 'DESC')
        ->distinct()
        ->get();
        return response()->json($options);
    }

    public function getOption($title): JsonResponse
    {
        $option = ProductOption::where('option_title', $title)->get();
        return response()->json($option);
    }

    public function createOption($data): JsonResponse
    {
        $validated = $data->validated();
        $items = collect($validated['option_label'])
            ->map(function ($item) use ($validated) {
                return [
                    'option_title' => $validated['option_title'],
                    'option_label' => $item['value'],
                ];
            })
            ->toArray();
        ProductOption::insert($items);


        return response()->json($items);
    }
}
