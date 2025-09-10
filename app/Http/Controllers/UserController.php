<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function UsersList(Request $request)
    {
        $sortOrder = $request->query('sortOrder', 'ASC');
        $sortName = $request->query('sortName', 'id');
        if (isset($request->search)) {
            $data = User::select(
                'first_name',
                'last_name',
                'contact_number',
                'date_of_birth',
                'email',
                'role'
            )
                ->where('role', 'admin')
                ->where(function ($query) use ($request) {
                    $query->where('first_name',  'LIKE', '%' . $request->search . '%')
                        ->orWhere('last_name',  'LIKE', '%' . $request->search . '%')
                        ->orWhere('contact_number',  'LIKE', '%' . $request->search . '%')
                        ->orWhere('email',  'LIKE', '%' . $request->search . '%')
                        ->orWhere('role',  'LIKE', '%' . $request->search . '%');
                })

                ->orderBy($sortName, $sortOrder)
                ->paginate(5);
            return $data;
        } else {
            $data = User::select(
                'id',
                'first_name',
                'last_name',
                'contact_number',
                'date_of_birth',
                'email',
                'role'
            )
                ->where('role', 'admin')
                ->orderBy($sortName, $sortOrder)
                ->paginate(5);
            return $data;
        }
    }

    public function deleteUser (Request $request) {
          $user = User::findOrFail($request->id)->delete();
        return response()->json([
            'deleted' => $user,
            'message' => "Delete user successfully",
            'status' => 200,
        ]);

    }
}
