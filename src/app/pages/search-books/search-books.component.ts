import { Component, OnInit } from '@angular/core';
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

  categories: Result[] = [];
  categoriaActual: string;
  categoriaSeleccionada: List[] = [];
  sBook: Book[] = [];
  error: boolean = false;
  mensajeError: string;
  encontrado: boolean = true;

  constructor(private _bookService: NyTimesService) {}

  ngOnInit(): void {

    this._bookService.getCategories().subscribe( getInfo => {

      return this.categories = getInfo.splice(0, 9);
    }, (errorService) => {

      this.error = true;
      this.mensajeError = errorService.message;
    });
  }

  validatedCategory(listName: string) {

    const box = document.querySelector('#box');
    this.categoriaActual = listName;
    if (listName){

      box.removeAttribute('disabled');
    }
  }

 search(title: string) {

    let titleRE = new RegExp(title, 'i')

    if (title.length === 0) {

      return;
    }
    this._bookService.getBookByTitle(title, this.categoriaActual).subscribe(resp => {

      if (resp.length === 0) {

        return;
      }

      this.sBook = [];
      resp.find(book => {
       let z = book.title.search(titleRE)
       if (z != -1) {
        this.sBook.push(book);
        this.encontrado = true;
       }
      });

      if (this.sBook.length === 0) {

        this.encontrado = false;
        return;
      }
    }, (errorService) => {

      this.error = true;
      this.mensajeError = errorService.message;
    });
  }
}
