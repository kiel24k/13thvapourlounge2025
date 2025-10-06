<?php

namespace App\Http\Controllers;

use App\Http\Requests\Product\StoreCategoryRequest;
use App\Http\Requests\Product\StoreDescriptionRequest;
use App\Http\Requests\Product\UpdateCategoryRequest;
use App\Http\Requests\Product\UpdateDescriptionRequest;

use App\Models\Category;
use App\Models\ProductDescription;
use App\Services\ProductService\Description;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class ProductController extends Controller
{
    protected $description;
    public function __construct(Description $description)
    {
        $this->description = $description;
    }
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

    public function getDescriptions(Request $request)
    {
       return $this->description->getAllDescriptions($request);
    }

    public function storeDescription(StoreDescriptionRequest $request)
    {

        $validated = $request->validated();
        $items = collect($validated['description_content'])
            ->map(function ($item) use ($validated) {
                return [
                    'description_body' => $validated['description_body'],
                    'description_content' => $item['value'],
                ];
            })
            ->toArray();
        ProductDescription::insert($items);

        return $items;
    }

    public function viewDescription($title)
    {
        $description = ProductDescription::select('id','description_content')->where('description_body', $title)->get();
        return response()->json($description);
    }

    public function destroyDescription($id): JsonResponse
    {
        return response()->json($this->description->deleteDescription($id));
    }

    public function updateDescription(UpdateDescriptionRequest $request)
    {
        
        return $this->description->updateDescription($request);
    }
}
