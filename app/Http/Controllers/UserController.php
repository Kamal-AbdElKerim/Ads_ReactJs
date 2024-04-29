<?php

namespace App\Http\Controllers;

use App\Repositories\UserRepository;
use Illuminate\Http\Request;

class UserController extends Controller
{
    protected $userRepository;

    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    public function users()
    {
        $users = $this->userRepository->getUsers();
        return $users;
    }

    public function block_user($id)
    {
        try {
            $user = $this->userRepository->blockUser($id);

            return response()->json([
                'success' => true,
                'user' => $user 
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage(), 
            ], 500); 
        }
    }
}
