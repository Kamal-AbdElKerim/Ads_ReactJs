<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function Users(){
        
        $users = User::withTrashed()->latest()->where('role','user')->paginate(4);

        return $users;

    }

    public function block_user($id){

        try {
            $user = User::withTrashed()->findOrFail($id);
    
            if ($user->deleted_at == null) {
                $user->delete();
                $message = 'User deleted successfully.';
            } else {
                $user->restore();
                $message = 'User restored successfully.';
            }
    
            return response()->json([
                'success' => true,
                'message' => $message,
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
