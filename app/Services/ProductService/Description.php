<?php

namespace App\Services\ProductService;

use App\Models\ProductDescription;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class Description
{

    public function getAllDescriptions($data) :JsonResponse
    {
        if (empty($data['search'])) {
            $descriptions = DB::table('product_descriptions')
                ->select('id', 'description_body', 'description_content')
                ->paginate(10);
            return response()->json($descriptions);
        } else {
            $descriptions = DB::table('product_descriptions')
                ->select('id', 'description_body', 'description_content')
                  ->where('description_body', 'LIKE', '%' . $data['search'] . '%')
                ->paginate(10);
            return response()->json($descriptions);
        }
     
    }

    public function deleteDescription($id): bool
    {
        return ProductDescription::findOrFail($id)->delete();
    }

    public function updateDescription($data)
    {
        ProductDescription::where("description_body", $data['description_body'])
            ->update(['description_body' => $data["description_body_input"]]);

        foreach ($data["description_content_input"] as $description) {
            $descriptionTb = ProductDescription::find($description['id']);
            $descriptionTb->description_content = $description["description_content"];
            $descriptionTb->update();
        }

        return response()->json($data);
    }
}
