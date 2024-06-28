CREATE DATABASE biblioteca;
CREATE TABLE libros (
    ID SERIAL PRIMARY KEY,
    Titulo VARCHAR(255) NOT NULL,
    Autor VARCHAR(255) NOT NULL,
    AnioPublicacion varchar(255) NOT NULL,
    Genero VARCHAR(100)
);
INSERT INTO Libros (Titulo, Autor, AnioPublicacion, Genero) VALUES
('Cien años de soledad', 'Gabriel García Márquez', '1967', 'Realismo mágico'),
('Don Quijote de la Mancha', 'Miguel de Cervantes', '1605', 'Novela'),
('1984', 'George Orwell', '1949', 'Distopía'),
('Orgullo y prejuicio', 'Jane Austen', '1813', 'Novela romántica'),
('Crimen y castigo', 'Fiódor Dostoyevski', '1866', 'Novela psicológica'),
('El señor de los anillos', 'J.R.R. Tolkien', '1954', 'Fantasía'),
('El gran Gatsby', 'F. Scott Fitzgerald', '1925', 'Novela'),
('Matar a un ruiseñor', 'Harper Lee', '1960', 'Ficción'),
('La metamorfosis', 'Franz Kafka', '1915', 'Ficción surrealista'),
('La divina comedia', 'Dante Alighieri', '1320', 'Poesía épica');