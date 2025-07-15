<?php

use Illuminate\Support\Facades\Route;

// Route::get('/', function () {
//     return view('root');
// });

Route::get('/{any}', function () {
    return view('root'); 
})->where('any', '.*');
