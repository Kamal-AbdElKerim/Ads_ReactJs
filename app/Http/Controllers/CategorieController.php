<?php

namespace App\Http\Controllers;

use App\Repositories\CategoryRepository;
use Illuminate\Http\Request;

class CategorieController extends Controller
{
    protected $categoryRepository;

    public function __construct(CategoryRepository $categoryRepository)
    {
        $this->categoryRepository = $categoryRepository;
    }

    public function categories()
    {
        return $this->categoryRepository->getCategories();
    }

    public function AddCategories(Request $request)
    {
        return $this->categoryRepository->addCategory($request);
    }

    public function EditCategories($id)
    {
        return $this->categoryRepository->getCategoryById($id);
    }

    public function UpdateCategories(Request $request, $id)
    {
        return $this->categoryRepository->updateCategory($request, $id);
    }

    public function DeleteCategories($id)
    {
        return $this->categoryRepository->deleteCategory($id);
    }
}
