<?php

namespace App\Http\Controllers;

use App\Repositories\DashboardRepository;
use Illuminate\Http\Request;

class AdmindashboardController extends Controller
{
    protected $dashboardRepository;

    public function __construct(DashboardRepository $dashboardRepository)
    {
        $this->dashboardRepository = $dashboardRepository;
    }

    public function dashboardAdmin()
    {
        $data = $this->dashboardRepository->getDashboardData();

        return response()->json([
            'success' => true,
            'data' => $data,
        ]);
    }
}
