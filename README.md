
# ApiRest para inventario de Biblioteca

Se ha creado una api que permite llevar una administración simple del inventario de libros de una Biblioteca. Para la creación y prueba de esta Api Rest se utilizaron las tecnologías de Laravel y Angular, además de PostgreSQL para una base de datos de prueba.




## Installation

Para correr el proyecto en local se deben realizar varias instalaciones, las dividire por areas, las de back-end y front-end.

### Backend (Laravel)

- Laragon (Sirve para correr un entorno muy completo del lado del servidor).
- Composer (Gestor de dependencias de PHP).
- DBeaver (Opcional. Administrador para bases de datos relacionales)
- Postgres (Opcional ya que Laragon trae mysql preinstalado y para la api es indiferente la base de datos).

Con estas instalaciones el Backend debería correr sin ningún problema.

#### Comandos inicales
```bash
  composer install (Dependencias de Vendor)
  npm install (Dependencias de NPM)
  Crear el archivo .env del archivo .env.example
  php artisan key:generate ()
```

#### Links relacionados

- [Laravel](https://laravel.com/docs/10.x)
- [Postgres](https://www.postgresql.org/download/)