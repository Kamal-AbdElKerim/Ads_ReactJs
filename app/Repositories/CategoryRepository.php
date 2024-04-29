<?php

namespace App\Repositories;

use App\Models\Categorie;
use Illuminate\Support\Facades\Validator;

class CategoryRepository
{
    public function getCategories()
    {
        return Categorie::latest()->paginate(10);
    }

    public function addCategory($request)
    {
        $validator = Validator::make($request->all(), [
            'CategoryName' => 'required|string|unique:categories,Name',
            'Icon' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048', 
        ]);

        if ($validator->fails()) {
            return $validator->errors();
        }

        $category = new Categorie();
        $category->Name = $request->CategoryName;
        
        if ($request->hasFile('Icon')) {
            $icon = $request->file('Icon');
            $iconPath = $icon->store('public/photos'); 
            $category->icon = $iconPath;
        }
        
        $category->save();

        return $category;
    }

    public function getCategoryById($id)
    {
        return Categorie::findOrFail($id);
    }

    public function updateCategory($request, $id)
    {
        $validator = Validator::make($request->all(), [
            'CategoryName' => 'required',
        ]);

        if ($validator->fails()) {
            return $validator->errors();
        }

        try {
            $category = Categorie::findOrFail($id);

            $category->Name = $request->CategoryName;

            if ($request->hasFile('Icon')) {
                $icon = $request->file('Icon');
                $iconPath = $icon->store('public/photos'); 
                $category->icon = $iconPath;
            }

            $category->save();

            return 'Category updated successfully';
        } catch (\Exception $e) {
            return 'Failed to update category: ' . $e->getMessage();
        }
    }

    public function deleteCategory($id)
    {
        $category = Categorie::findOrFail($id);
        $category->delete();

        return 'Category deleted successfully';
    }
}
