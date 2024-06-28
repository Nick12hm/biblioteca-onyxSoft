<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Libro extends Model
{
    /**
     * @param boolean $timestamp se cambia su valor a false para que no tenga en cuenta el creat_at y update_at de la tabla
     * en la base de datos.
     * @param array $fillable representa los campos que se pueden asignar de forma masiva en la tabla libros, esto con el fin de 
     * solo hacer registro de los datos deseados.
     */
    protected $table = 'libros';
    public $timestamps = false;

    protected $fillable = [
        'titulo',
        'autor',
        'aniopublicacion',
        'genero',
    ];
   
}

