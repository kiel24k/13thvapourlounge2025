<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

route::controller(AuthController::class)->group(function () {
  route::post('user-signup', 'UserSignup');
  route::post('user-login', 'UserLogin');
});

route::controller(AdminController::class)->group(function () {
  route::get('admin-list', 'adminList');
});
