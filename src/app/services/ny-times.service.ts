import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Categories, Result } from '../interfaces/categories-details';
import { List, Books } from '../interfaces/books-response';
import { Book, Results, Category } from '../interfaces/category-response';

@Injectable({
  providedIn: 'root'
})
export class NyTimesService {

  constructor(private htpp: HttpClient) { }

  apiKey = 'wMrIxYjKdpTQq76wy7ngPAG1OD0VJy8j';
  url = 'https://api.nytimes.com/svc/books/v3/';

  getCategories(): Observable<Result[]>{
    return this.htpp.get<Categories>(`${this.url}lists/names.json?api-key=${this.apiKey}`)
    .pipe(map(info => info.results)
    );
  }

  getCategory(): Observable<List[]>{
    return this.htpp.get<Books>(`${this.url}lists/overview.json?api-key=${this.apiKey}`)
    .pipe(
      map(info => info.results),
      map(results => results.lists)
    );
  }

  cleanWord(word: string): string{
    word.trim();
    return word.toLowerCase().replace(/[!.,  ]/g, '-');
  }

  getBookByTitle(title: string, categoria: string):Observable<Book[]>{

    categoria = this.cleanWord(categoria);
    return this.htpp.get<Category>(`${this.url}lists/current/${categoria}.json?api-key=wMrIxYjKdpTQq76wy7ngPAG1OD0VJy8j`)
    .pipe(
      map(info => info.results),
      map(results => results.books)
    );

    // return this.htpp.get<SingleBook>(`${this.url}reviews.json?api-key=${this.apiKey}&title=${title}`)
    // .pipe(
    //   map(resp => resp.results)
    // );
  }


}

