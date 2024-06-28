
# ApiRest para inventario de Biblioteca

Se ha creado una api que permite llevar una administración simple del inventario de libros de una Biblioteca. Para la creación y prueba de esta Api Rest se utilizaron las tecnologías de Laravel y Angular, además de PostgreSQL para una base de datos de prueba.

- [Video_Desmostración](https://drive.google.com/file/d/1YCgvZFuB6XeosSPVV9_hhVrP6jPvdWmr/view?usp=sharing)

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


### Frontend (Angular)

#### Comandos para entorno de desarrollo
- node [Descargar node](https://nodejs.org/en/download/package-manager)

Una arternativa a node, y para una administración de versiones use nvm
- nvm [Descargar nvm](https://github.com/coreybutler/nvm-windows/releases)

Despues de tener node en local, instalar Angular CLI
-  npm install -g @angular/cli

Con estas instalaciones el Frontend debería correr sin ningún problema.

#### Comandos inicales
```bash
  npm install (Dependencias de NPM)
  npm start o ng serve (Levantar proyecto)
```

#### Links relacionados

- [Angular](https://angular.dev/)
- [NVM](https://github.com/nvm-sh/nvm)
- [Node](https://nodejs.org/en)

