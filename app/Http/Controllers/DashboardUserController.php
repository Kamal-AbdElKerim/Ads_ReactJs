<?php

namespace App\Http\Controllers;

use App\Repositories\DashboardUserRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DashboardUserController extends Controller
{
    protected $dashboardUserRepository;

    public function __construct(DashboardUserRepository $dashboardUserRepository)
    {
        $this->dashboardUserRepository = $dashboardUserRepository;
    }

    public function Dashboard_user()
    {
        $userId = Auth::id();
        $data = $this->dashboardUserRepository->Dashboard_user($userId);
        return response()->json($data);
    }

    public function remove_notification($id)
    {
        $userId = Auth::id();
        $result = $this->dashboardUserRepository->remove_notification($id, $userId);
        if ($result === true) {
            return response()->json();
        } else {
            return response()->json($result);
        }
    }
}
