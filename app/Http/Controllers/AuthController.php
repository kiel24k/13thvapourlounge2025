<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function UserSignup(Request $request)
    {

        $request->validate([
            'first_name' => 'required|string',
            'last_name' => 'required|string',
            'contact_number' => 'required|string|max:11|min:10',
            'date_of_birth' => [ 'date', function ($attribute, $value, $fail) {
                $birthday = Carbon::parse($value);
                $age = $birthday->age;
                if ($age < 18) {
                    $fail('you must be at least 18 years old');
                }
            }],
            'email' => 'required|email|unique:users,email',
            'password' => 'required|min:8'
        ]);

        User::create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
             'middle_name' => $request->middle_name,
            'contact_number' => $request->contact_number,
            'date_of_birth' => $request->date_of_birth,
            'role' => $request->role,
            'email' => $request->email,
            'password' => Hash::make($request->password)
        ]);
    }

    public function UserLogin(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if (!Auth::attempt($request->only('email', 'password'))) {
            return response()->json(['message' => 'Invalid credentials'], 401);
        }

        $user = User::where('email', Auth::user()->email)->first();
        $token = $user->createToken("token" . $user->id)->plainTextToken;
        return response()->json([
            'role' => $user['role'],
        ])->Cookie(Cookie::forever('usr_tkn', $token, null, null, true, false));
    }
}
