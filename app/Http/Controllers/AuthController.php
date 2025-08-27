<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function UserSignup(Request $request)
    {
        $request->validate([
            'first_name' => 'required|string',
            'last_name' => 'required|string',
            'phone_number' => 'required|string|max:11|min:10',
            'date_of_birth' => ['required', 'date', function ($attribute, $value, $fail) {
                $birthday = Carbon::parse($value);
                $age = $birthday->age;
                if ($age < 18) {
                    $fail('you must be at least 18 years old');
                }
            }],
            'email' => 'required|email|unique:users,email',
            'password' => 'required|min:8|confirmed'
        ]);

        User::create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'phone_number' => $request->phone_number,
            'date_of_birth' => $request->date_of_birth,
            'role' => $request->role,
            'email' => $request->email,
            'password' => Hash::make($request->password)
        ]);
    }

    public function UserLogin(Request $request)
    {
      $request->validate([
        'email' => ['required','email'],
        'password' => ['required']
      ]);

        $user = User::where('email', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json([
                'message' => 'Email or password is incorrect!'
            ], 401);
        }

        $token = $user->createToken('auth_token')->plainTextToken;

        $cookie = cookie('token', $token, 60 * 24); // 1 day

        return response()->json([
            'role' => $user->role,
        ])->withCookie($cookie);
    }
}
