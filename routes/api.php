<?php

use App\Http\Controllers\AuthController; 
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

//routes non proteger pour user
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () { 
    //Routes proteger pour user
    Route::get('/user', fn (Request $request) => $request->user()); 
    Route::post('/logout', [AuthController::class, 'logout']); 

    // Routes pour projets
    Route::get('/projects', [ProjectController::class, 'index']);
    Route::get('/projects/{id}', [ProjectController::class, 'show']);
        
    // Routes pour tâches
    Route::get('/taches', [TacheController::class, 'index']);
    Route::get('/taches/{id}', [TacheController::class, 'show']);

    // les autres routes ici pour les methodes de vos modeles

}); 