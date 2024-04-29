<?php

namespace App\Repositories;

use App\Models\Favorite;

class FavoriteRepository
{
    public function favorite($userId, $adId)
    {
        $favorite = new Favorite();
        $favorite->UserID = $userId;
        $favorite->AdID = $adId;
        $favorite->save();
    }

    public function remove_favorite($userId, $adId)
    {
        $favorite = Favorite::where('AdID', $adId)
            ->where('UserID', $userId)
            ->first();

        if ($favorite) {
            $favorite->delete();
        }
    }

    public function list_favorite($userId, $paginate = 4)
    {
        return Favorite::where('UserID', $userId)
            ->with(['ads.categories', 'ads.images'])
            ->paginate($paginate);
    }
}
