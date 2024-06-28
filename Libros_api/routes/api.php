<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\LibroController;

/**
 * Los siguientes endpoints permiten acceder a diferentes funciones del api de Biblioteca.
 * La api creada permite hacer las funcionalidades de un Crud.
 */

Route::get('books', [LibroController::class, 'index']);
Route::post('book', [LibroController::class, 'store']);
Route::get('book/{id}', [LibroController::class, 'show']);
Route::post('book/{id}', [LibroController::class, 'update']);
Route::delete('book/{id}', [LibroController::class, 'destroy']);
