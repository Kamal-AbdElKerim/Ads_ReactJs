<?php

namespace App\Http\Controllers;

use App\Repositories\FavoriteRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class FavoriteController extends Controller
{
    protected $favoriteRepository;

    public function __construct(FavoriteRepository $favoriteRepository)
    {
        $this->favoriteRepository = $favoriteRepository;
    }

    public function favorite($id_ads)
    {
        $userId = Auth::id();
        $this->favoriteRepository->favorite($userId, $id_ads);
        return response()->json('Ad added to favorites', 200);
    }

    public function remove_favorite($id)
    {
        $userId = Auth::id();
        $this->favoriteRepository->remove_favorite($userId, $id);
        return response()->json('Ad removed from favorites', 200);
    }

    public function list_favorite()
    {
        $userId = Auth::id();
        $favorites = $this->favoriteRepository->list_favorite($userId);
        return response()->json($favorites, 200);
    }
}
