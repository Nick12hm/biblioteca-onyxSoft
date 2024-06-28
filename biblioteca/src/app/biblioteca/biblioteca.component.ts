import { Component, OnInit } from '@angular/core';
import{FormsModule, ReactiveFormsModule} from '@angular/forms'; //added this manually in order to use forms
import Swal  from 'sweetalert2';
import { BiblioteService } from '../core/services/bibliote.service';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-biblioteca',
  standalone: true,
  imports: [TableModule, FormsModule],
  templateUrl: './biblioteca.component.html',
  styleUrl: './biblioteca.component.css'
})
export class BibliotecaComponent implements OnInit {

  // registros de libro 
  public books: any[] = [];

   // Encabezado formulario 
   public title = 'Registrar Libro';
   public btnSave = 'Registrar';
  // campos de formulario
  public libro = {
    id: 0,
    titulo: '',
    autor: '',
    year: '',
    genero: ''
  }
 
 
  constructor (private serviceapi: BiblioteService )  {}
  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    this.serviceapi.queryGet('books').subscribe({
      next:(response) => {
        this.books = response.data;
      },
      error(err) {
        console.log(err);
      }
    })
  }

  editBook(id: number){
    try {
      this.serviceapi.queryGet('book/'+id).subscribe({
        next: (response) => {
          let dato = response.data;
          if(dato){
            this.title = 'Editar información';
            this.btnSave = 'Actualizar';
            this.libro.id = dato.id;
            this.libro.titulo = dato.titulo;
            this.libro.autor = dato.autor;
            this.libro.year = dato.aniopublicacion;
            this.libro.genero = dato.genero;
            console.log(this.libro);
            
          }else{
            console.log(response.mensaje);
          }
        },
        error(err) {
          console.log(err);
        }
      })
    } catch (error) {
      console.log(error);
      
    }
  }

  saveBook(){
    let bookForm = new FormData();
    let url = 'book';
    if (this.libro.id != 0) {
      console.log(this.libro.id);
      
      url+= '/'+this.libro.id;
    }
    bookForm.append('titulo', this.libro.titulo);
    bookForm.append('autor', this.libro.autor);
    bookForm.append('aniopublicacion', this.libro.year);
    bookForm.append('genero', this.libro.genero);

    this.serviceapi.queryPost(url, bookForm).subscribe({
      next: (response) => {        
        if(response.estado == 201 || response.estado == 200){
          Swal.fire({
            title: "Exitoso!",
            text: response.mensaje,
            icon: "success"
          });
          this.initVaribles();
          this.getBooks();
        }else{
          Swal.fire({
            title: "Ups!",
            text: response.mensaje,
            icon: "error"
          });
        }
        },
      error(err) {
        console.log(err);
      }
    })
  }


  confirmatedeleteBook(id: number){
    Swal.fire({
      title: "¿Esta seguro de eliminar el registro?",
      text: "Se perdera el registro ",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Eliminar!",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleteBook(id);
      }
    });
  }

  deleteBook(id: number){
    this.serviceapi.queryDelete('book/'+id).subscribe({
      next: (response) => {
        if (response.estado == 204) {
          Swal.fire({
            title: "Eliminado!",
            text: "Se elimino correctamente el registro ",
            icon: "success"
          });
          this.getBooks();
        }
      },
      error(err) {
        console.log(err);
      }
    })
  }

  initVaribles(){
    this.libro = {
      id: 0,
      titulo: '',
      autor: '',
      year: '',
      genero: ''
    }

    this.title = 'Registrar Libro';
    this.btnSave = 'Registrar';
  }


}
