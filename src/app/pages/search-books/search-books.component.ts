import { Component, OnDestroy, OnInit } from '@angular/core';
import { NyTimesService } from '../../services/ny-times.service';
import { Result } from '../../interfaces/categories-details';
import { List, Book } from '../../interfaces/books-response';
import { Resultados } from '../../interfaces/singleBook-responsive';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-search-books',
  templateUrl: './search-books.component.html',
  styleUrls: ['./search-books.component.css']
})
export class SearchBooksComponent implements OnInit{

  categories: Result[] = []; // CATEGORIAS TRAIDAS
  categoriaActual: string; // NOMBRE DE CATEGORIA SELECCIONADA
  categoriaSeleccionada: List[] = [];
  libros: Resultados[] = []; // LIBROS DE CATEGORIA SELECCIONADA
  error = false; // DETECTAR ERROR
  mensajeError: string;
  encontrado: boolean;


  constructor(private bookService: NyTimesService){

    this.error = false;
    this.encontrado = true;
  }

  ngOnInit(): void {
    if(this.libros){
      // PARA QUE HICE ESTO
    }
    this.bookService.getCategories().subscribe( getInfo => {
      return this.categories = getInfo.splice(0, 9);
    }, (errorService) => {
      this.error = true;
      this.mensajeError =  errorService.message;
    });
  }

  // VALIDAR SI USUARIO SELECCIONA CATEGORIA

  validatedCategory(listName: string){
    const box = document.querySelector('#box');
    this.categoriaActual = listName;
    if (listName){
      box.removeAttribute('disabled');
    }else{
    }
  }

  // BUSCAR LIBRO POR TITULO

  search(title){

    // BUSQUEDA DE LIBROS POR CATEGORIA

    // this.bookService.getCategory().subscribe(lists => {


    //   for (let i = 0; i < lists.length; i++){

    //     if ((lists[i].list_name) === this.categoriaActual){
    //       this.libros = [];
    //       this.categoriaSeleccionada.push(lists[i]);
    //       this.libros = this.categoriaSeleccionada[0].books;
    //     }

    //   }
    //   console.log(this.libros);

    // });

    title = title.trim();
    if(title.lenght === 0){
      return;
    }
    this.bookService.getBookByTitle(title).subscribe(resp => {
      if(resp.length === 0){
        this.encontrado = false;
        return;
      }
      this.encontrado = true;
      this.libros = resp;
    }, (errorService) => {
      this.error = true;
      this.mensajeError = errorService.message;

    });

  }



}
