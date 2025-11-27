<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\AnalyticController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
  return $request->user();
})->middleware('auth:sanctum');

route::controller(AuthController::class)->group(function () {
  route::post('user-signup', 'UserSignup');
  route::post('/user-login', 'UserLogin');
});

route::controller(UserController::class)->group(function () {
  route::get('users-list', 'usersList');
  route::delete('delete-user/{id}', 'deleteUser');
  route::get('get-user/{id}', 'getUser');
  route::post('update-user/{id}', 'updateUser');
});

route::controller(ProductController::class)->group(function () {
  //route for category
  route::get('get-categories', 'getCategories');
  route::post('store-category', 'storeCategory');
  route::post('update-category', 'updateCategory');
  route::delete('destroy-category/{id}', 'destroyCategory');
  //route for description
  route::get('get-descriptions', 'getDescriptions');
  route::post('store-description', 'storeDescription');
  route::get('view-product-description/{title}', 'viewDescription');
  route::delete('destroy-description/{id}', 'destroyDescription');
  route::post('update-description', 'updateDescription');
  route::post('update-description', "updateDescription");

  route::get('option-list', 'optionList');
  route::get('show-option/{title}', 'showOption');
  route::post('store-option', 'storeOption');
  route::post('update-option', 'updateOption');
  route::delete('destroy-option/{title}', 'destroyOption');

  route::post('store-product', 'storeProduct');
  route::get('show-products', 'showProducts');
  route::get('show-product/{id}', 'showProduct');
});

route::controller(AnalyticController::class)->group(function () {
  route::get('/product-trending', 'ProductTrending');
});

route::controller(CartController::class)->group(function () {
  route::post('store-cart', 'storeCart');
  route::get('show-cart/{id}', 'showCart');
  route::post('update-cart', 'updateCart');
  route::post('delete-cart', 'deleteCart');
});

route::controller(OrderController::class)->group(function () {
  route::post('/store-order', 'storeOrder');
});
