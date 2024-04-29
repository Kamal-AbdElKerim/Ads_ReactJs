<?php

namespace App\Repositories;

use App\Models\Ad;
use App\Models\Categorie;
use App\Models\User;

class DashboardRepository
{
    public function getDashboardData()
    {
        $usersCount = User::where('id', '!=', auth()->id())->count();
        $adsCount = Ad::count();
        $adsSoldCount = Ad::where('status', 'sold')->count();
        $categoriesCount = Categorie::count();

        $data = [
            'users' => $usersCount,
            'ads' => $adsCount,
            'ads_sold' => $adsSoldCount,
            'categories' => $categoriesCount,
        ];

        return $data;
    }
}
