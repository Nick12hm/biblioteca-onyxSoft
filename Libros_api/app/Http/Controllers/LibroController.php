<?php

namespace App\Http\Controllers;

use App\Models\Libro;
use Illuminate\Http\Request;

class LibroController extends Controller
{
    /**
     * index permite listar todos los registros exitentes de la tabla llamada libros.
     */
    public function index()
    {
        try {

            $libros = Libro::orderByDesc('id')->get();
            if ($libros) {
                return response()->json(['data'=>$libros, 'estado'=>200]);
            }else {
                return response()->json(['mensaje'=> 'No hay registros', 'data'=>$libros, 'estado'=>404]);
            }
        } catch (\Throwable $th) {
            return response()->json(['mensaje'=>$th->getMessage(), 'estado'=>500]);
        }
    }

    /**
     * Store permite crear nuevos registros en la tabla de libros.
     * @param body $request contiene toda la informacion enviada por el cliente, que sera evaluada, para su posterior registro
     */
    public function store(Request $request)
    {
        try {
            $validate = $request->validate([
                'titulo' => 'required',
                'autor'  => 'required',
                'aniopublicacion'  => 'required',
                'genero'  => 'required'
            ]);
    
            if ($validate) {
                $new_book = Libro::create($request->all());
                return response()->json(['mensaje'=> 'Registro exitoso', 'data'=>$new_book, 'estado'=>201]);
            }else {
                return response()->json(['mensaje'=> 'Todos los campos son requeridos', 'data'=>$new_book, 'estado'=>404]);    
            }
        } catch (\Throwable $th) {
            return response()->json(['mensaje'=>$th->getMessage(), 'estado'=>500]);
        }
    }

    /**
     * show permite obtener un registro en especifico de la tabla libros.
     * @param number $id representa el dato especifico que consulta un cliente.
     */
    public function show(Libro $id)
    {
        try {
            $libro = Libro::find($id);
            if ($libro) {
                return response()->json(['mensaje'=>'Consulta exitosa', 'data'=>$libro, 'estado'=>200]);
            }else {
                return response()->json(['mensaje'=>'No existe el registro', 'data' =>$libro, 'estado'=>404]);
            }
        } catch (\Throwable $th) {
            return response()->json(['mensaje'=>$th->getMessage(), 'estado'=>500]);
        }
    }

    /**
     * Update Permite actualizar un registro específico en la tabla libros
     * @param body $request contiene toda la información que el cliente desea actualizar.
     * @param number $id representa el registro que sera actualizado.
     */
    public function update(Request $request, $id)
    {
        try {
            $validate = $request->validate([
                'titulo' => 'required',
                'autor'  => 'required',
                'aniopublicacion'  => 'required',
                'genero'  => 'required'
            ]);
            if ($validate) {
                $libro = Libro::find($id);
                if (!$libro) {
                    return response()->json(['mensaje'=> 'No existe el registro', 'data'=>$libro, 'estado'=>404]);
                }
                $libro->update($request->all());
                return response()->json(['mensaje'=> 'El registro se ha actualizado correctamente', 'data'=> $libro, 'estado'=>200]);
            }else {
                return response()->json(['mensaje'=> 'Todos los campos son requeridos para actualizar el Libro', 'data'=>$libro, 'estado'=>404]);
            }
            
        } catch (\Throwable $th) {
            return response()->json(['mensaje'=>$th->getMessage(), 'estado'=>500]);
        }
    }

    /**
     * 
     * destroy permite eliminar un dato específico de la tabla libros.
     * @param number $id representa el registro que sera eliminado.
     */
    public function destroy($id)
    {
        try {

            $libro = Libro::findOrFail($id);
            if ($libro) {
                $libro->delete();
                return response()->json(['mensaje'=> 'Registro eliminado con exito', 'data'=>null, 'estado'=>204]);
            }    
        } catch (\Throwable $th) {
            return response()->json($th->getMessage(), 500);
        }
    }
}
