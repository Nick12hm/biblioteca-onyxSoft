
# Funcionamiento de ApiRest Biblioteca 

A continuación se explicará cómo funcionan los diferentes endpoints de la api que se creó. 



### 1-Obtener todos los registros de la tabla

```http
  URL /api/books
```

| Parameter | Type | Description                |Método|
| :-------- | :------- | :------------------------- |------|
| `NA` | `NA` | Se obtienen todos los registros de la tabla|GET|

#### Ejemplo de solicitud 
```http
    http://localhost/Prueba-tecnica/Libros_api/public/api/books
```
Respuesta Exitosa:
- código de estado: 200.
- cuerpo de respuesta: 
    ```http
    {
        "data": [
            {
                "id": 18,
                "titulo": "hola",
                "autor": "hola",
                "aniopublicacion": "hola",
                "genero": "23"
            },
            {
                "id": 11,
                "titulo": "Ser",
                "autor": "Nick",
                "aniopublicacion": "2012",
                "genero": "Suspenso, accion, drama"
            },
            ...
       
        ],
        "estado": 200
    }
    ```

### 2-Obtener registro específico de la tabla  


```http
  URL /api/book/{id}
```

| Parameter | Type | Description                |Método|
| :-------- | :------- | :------------------------- |------|
| `id` | `number` | Permite obtener un registro específico de la tabla|GET|


#### Ejemplo de solicitud 
```http
   http://localhost/Prueba-tecnica/Libros_api/public/api/book/2
```
Respuesta Exitosa:
- código de estado: 200.
- cuerpo de respuesta: 
    ```http
    {
        "mensaje": "Consulta exitosa",
        "data": [
            {
                "id": 2,
                "titulo": "Don Quijote de la Mancha",
                "autor": "Miguel de Cervantes",
                "aniopublicacion": "1605",
                "genero": "Novela"
            }
        ],
        "estado": 200
    }
    ```
Respuesta fallida
- código de estado: 404
- cuerpo de la respuesta:
    ```http
    {
        "mensaje": "No existe el registro",
        "data": null,
        "estado": 404
    }
    ```

### 3-Crear un nuevo registro

```http
  URL /api/book
```

| Parameter | Type | Description                |Método|
| :-------- | :------- | :------------------------- |------|
| `Request` | `Class Laravel` |Permite obtener los datos que se van a registrar en la tabla|POST|


#### Ejemplo de solicitud 
```http
   http://localhost/Prueba-tecnica/Libros_api/public/api/book
```
Respuesta Exitosa:
- código de estado: 201.
- cuerpo de respuesta:
    ```http
    {
        "mensaje": "Registro exitoso",
        "data": {
            "titulo": "Hola",
            "autor": "Nick",
            "aniopublicacion": "2016",
            "genero": "Romance",
            "id": 19
        },
        "estado": 201
    }
    ```

Respuesta fallida
- código de estado: 404 | 500
- cuerpo de la respuesta:
    ```http
    {
        "mensaje": "El campo titulo es requerido. (and 3 more errors)",
        "estado": 500
    }
    ```

### 4-Actualizar registro específico de la tabla

```http
  URL /api/book/{id}
```

| Parameter | Type | Description                |Método|
| :-------- | :------- | :------------------------- |------|
| `Request` | `Class Laravel` |Permite obtener los datos ha actualizar en la tabla |post|
|`id`|`number`|Permite identificar el registro que se ha de actualizar|poss|

#### Ejemplo de solicitud 
```http
   http://localhost/Prueba-tecnica/Libros_api/public/api/book/18
```
Respuesta Exitosa:
- código de estado: 200.
- cuerpo de respuesta:
    ```http
    {
        "mensaje": "El registro se ha actualizado correctamente",
        "data": {
            "id": 18,
            "titulo": "Lagrimas",
            "autor": "Nick",
            "aniopublicacion": "2000",
            "genero": "Suspenso, drama, comedia"
        },
        "estado": 200
    }

    ```
Respuesta fallida
- código de estado: 404 | 500
- cuerpo de la respuesta:
    ```http
    {
        "mensaje": "El campo genero es requerido.",
        "estado": 500
    }

    {
        "mensaje": "No existe el registro",
        "data": null,
        "estado": 404
    }
    ```
### 5-Eliminar registro de la tabla

```http
  URL /api/book/{id}
```

| Parameter | Type | Description                |Método|
| :-------- | :------- | :------------------------- |------|
| `id` | `number` |Permite identificar el registro que se va ha eliminar de la tabla|delete|

#### Ejemplo de solicitud 
```http
   http://localhost/Prueba-tecnica/Libros_api/public/api/book/18
```

Respuesta Exitosa:
- código de estado: 204.
- cuerpo de respuesta:
    ```http
    {
        "mensaje": "Registro eliminado con exito",
        "data": null,
        "estado": 204
    }

    ```
Respuesta fallida
- código de estado: 404 | 500
- cuerpo de la respuesta:
    ```http
    {
        "mensaje": "No query results for model [App\\Models\\Libro] 111",
        "estado": 500
    }

    {
        "mensaje": "No existe el registro",
        "data": null,
        "estado": 404
    }
    ```
