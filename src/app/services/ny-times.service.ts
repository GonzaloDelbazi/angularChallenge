import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { Categories, Result } from '../interfaces/categories-details';

@Injectable({
  providedIn: 'root'
})
export class NyTimesService {

  constructor(private htpp: HttpClient) { }

  apiKey = 'wMrIxYjKdpTQq76wy7ngPAG1OD0VJy8j';

  getBooks(): Observable<Result[]>{
    return this.htpp.get<Categories>(`https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=${this.apiKey}`)
    .pipe(map(info => info.results)
    );
  }


}

