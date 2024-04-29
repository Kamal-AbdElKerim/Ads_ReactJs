<?php

namespace App\Repositories;

use App\Models\User;

class UserRepository
{
    public function getUsers($role = 'user', $paginate = 4)
    {
        return User::withTrashed()->latest()->where('role', $role)->paginate($paginate);
    }

    public function blockUser($id)
    {
        $user = User::withTrashed()->findOrFail($id);

        if ($user->deleted_at == null) {
            $user->delete();
            $message = 'User deleted successfully.';
        } else {
            $user->restore();
            $message = 'User restored successfully.';
        }

        return $user;
    }
}
