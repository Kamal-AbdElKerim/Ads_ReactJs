<?php

namespace App\Http\Controllers;

use App\Models\categorie;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CategorieController extends Controller
{
    public function categories()  {
        $categories = categorie::latest()->paginate(10) ;
        return $categories;
    }

    public function AddCategories(Request $request){
        $validator = Validator::make($request->all(), [
            'CategoryName' => 'required|string|unique:categories,Name',
            'Icon' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048', 

        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $categorie = new categorie();
        $categorie->Name = $request->CategoryName;
          if ($request->hasFile('Icon')) {
        $icon = $request->file('Icon');
        $iconPath = $icon->store('public/photos'); 
        $categorie->icon = $iconPath;
    }
        $categorie->save();

        return response()->json($categorie, 201);

    }

    public function EditCategories($id){
        $categorie = categorie::findOrFail($id);
        return $categorie;

    }

    public function UpdateCategories(Request $request, $id)
{
    $validator = Validator::make($request->all(), [
        'CategoryName' => 'required',
    ]);

    if ($validator->fails()) {
        return response()->json($validator->errors(), 400);
    }

    try {
        $categorie = Categorie::findOrFail($id);

        $categorie->Name = $request->CategoryName;

        if ($request->hasFile('Icon')) {
            $icon = $request->file('Icon');
            $iconPath = $icon->store('public/photos'); 

            $categorie->icon = $iconPath;
        }

        $categorie->save();

        return response()->json(['message' => 'Category updated successfully'], 200);
    } catch (\Exception $e) {
        return response()->json(['message' => 'Failed to update category', 'error' => $e->getMessage()], 500);
    }
}

    public function DeleteCategories($id){
        $categorie = categorie::findOrFail($id);
        $categorie->delete();

        return response()->json(['message' => 'Category deleted successfully'], 200);
    }
}
