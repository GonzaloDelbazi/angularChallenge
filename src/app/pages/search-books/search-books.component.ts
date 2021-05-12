import { Component, OnDestroy, OnInit } from '@angular/core';
import { NyTimesService } from '../../services/ny-times.service';
import { Result } from '../../interfaces/categories-details';
import { List } from '../../interfaces/books-response';
import { Book } from '../../interfaces/category-response';

@Component({
  selector: 'app-search-books',
  templateUrl: './search-books.component.html',
  styleUrls: ['./search-books.component.css']
})
export class SearchBooksComponent implements OnInit{

  categories: Result[] = []; // CATEGORIAS TRAIDAS
  categoriaActual: string; // NOMBRE DE CATEGORIA SELECCIONADA
  categoriaSeleccionada: List[] = [];
  sBook: Book[] = []; // sBook DE CATEGORIA SELECCIONADA
  error = false; // DETECTAR ERROR
  mensajeError: string;
  encontrado: boolean;


  constructor(private bookService: NyTimesService){

    this.error = false;
    this.encontrado = true;
  }

  ngOnInit(): void {
    if(this.sBook){
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

  search(title: string){

    // BUSQUEDA DE sBook POR CATEGORIA

    // this.bookService.getCategory().subscribe(lists => {


    //   for (let i = 0; i < lists.length; i++){

    //     if ((lists[i].list_name) === this.categoriaActual){
    //       this.sBook = [];
    //       this.categoriaSeleccionada.push(lists[i]);
    //       this.sBook = this.categoriaSeleccionada[0].books;
    //     }

    //   }
    //   console.log(this.sBook);

    // });

    title = title.trim();
    if(title.length === 0){
      return;
    }
    title = title.toLowerCase();
    this.bookService.getBookByTitle(title, this.categoriaActual).subscribe(resp => {
      console.log(resp);
      if (resp.length === 0){
        return;
      }
      for(const book of resp){
        if(book.title.toLowerCase() === title){
          this.sBook.push(book);
          this.encontrado = true;
          console.log(this.sBook);
          return;
        }
      }
      if(this.sBook.length === 0){
        this.encontrado = false;
        return;
      }


    }, (errorService) => {
      this.error = true;
      this.mensajeError = errorService.message;

    });

  }



}
