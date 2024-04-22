<?php

namespace App\Http\Controllers;

use App\Models\ad;
use App\Models\User;
use App\Models\categorie;
use Illuminate\Http\Request;

class AdmindashboardController extends Controller
{
    public function dashboardAdmin()
{
    $users = User::where('id', '!=', Auth()->id())->count();
    $ads = ad::count();
    $ads_sold = ad::where('status', 'sold')->count();
    $categories = categorie::count();

    $data = [
        'users' => $users,
        'ads' => $ads,
        'ads_sold' => $ads_sold,
        'categories' => $categories,
    ];

    return response()->json([
        'success' => true,
        'data' => $data,
    ]);
}

}
