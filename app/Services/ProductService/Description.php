<?php

namespace App\Services\ProductService;

use App\Models\ProductDescription;
use Illuminate\Http\JsonResponse;

class Description
{
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
