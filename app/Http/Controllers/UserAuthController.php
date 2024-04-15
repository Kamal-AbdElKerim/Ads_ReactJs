<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserAuthController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'email' => 'required|string|email|unique:users',
            'password' => 'required|min:8',
            'phone' => 'required|string|max:255|unique:users',
        ]);
    
        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors()->all()
            ], 422); 
        }

     
    
        $registerUserData = $validator->validated();

        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imageName = time().'.'.$image->getClientOriginalExtension();
            $image->move(public_path('images'), $imageName);
        } else {
            $imageName = 'profile-icon.jpg'; 
        }
    
        $user = User::create([
            'name' => $registerUserData['name'],
            'email' => $registerUserData['email'],
            'password' => Hash::make($registerUserData['password']),
            'phone' => $registerUserData['phone'],
            'image' => $imageName,
            'role' => 'user',
        ]);
    
        if (!$user) {
            return response()->json([
                'errors' => ['Failed to create user']
            ], 500); 
        }
    
        $token = $user->createToken($user->name . '-AuthToken')->plainTextToken;
    
        return response()->json([
            'access_token' => $token,
            'user' => $user,
        ]);
    }
    
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email',
        ]);
    
        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors()->all()
            ], 422); 
        }
    
        $user = User::where('email', $request->email)->first();
    
        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json([
                'errors' => ['email or password is incorrect']
            ], 401);
        }
    
        $token = $user->createToken($user->name . '-AuthToken')->plainTextToken;
    
        return response()->json([
            'access_token' => $token,
            'user' => $user,
        ]);
    }
    


    
    public function user(Request $request)
    {
        return $request->user();
    }



    public function logout()
    {
       
        $user = auth()->user();
       
        $user->tokens()->delete();

        return response()->json([
            "message" => "logged out"
        ]);
    }
}
