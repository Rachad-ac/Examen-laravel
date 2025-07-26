<?php

use App\Http\Controllers\AuthController; 
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () { 
Route::get('/user', fn (Request $request) => $request->user()); 
Route::post('/logout', [AuthController::class, 'logout']); 

// les autres routes ici pour les methodes de vos modeles
}); 