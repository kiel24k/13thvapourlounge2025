<?php

namespace App\Http\Controllers;

use App\Http\Requests\Product\StoreCategoryRequest;
use App\Http\Requests\Product\UpdateCategoryRequest;
use App\Models\Category;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

use function Pest\Laravel\json;

class ProductController extends Controller
{
    public function getCategories(): JsonResponse
    {
        $category = DB::table('product_categories')
            ->select('id', 'category_name', 'category_description')
            ->orderBy('category_name', 'DESC')
            ->paginate(5);
        return response()->json($category);
    }

    public function storeCategory(StoreCategoryRequest $request): JsonResponse
    {
        $validated = $request->validated();
        Category::create([
            'category_name' => $validated['category_name'],
            'category_description' => $validated['category_description']
        ]);
        return response()->json([
            'message' => 'Category added successfully'
        ], 200);
    }

    public function updateCategory(UpdateCategoryRequest $request): JsonResponse
    {
        $validated = $request->validated();
        Category::findOrFail($request->id)->update([
            'category_name' => $validated['category_name'],
            'category_description' => $validated['category_description']
        ]);

        return response()->json(['message' => 'Category update successfully'], 200);
    }

    public function destroyCategory($id): JsonResponse
    {
        Category::destroy($id);
        return response()->json(['message' => 'Category deleted successfully'], 200);
    }
}
