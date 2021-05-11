import { Component, OnInit } from '@angular/core';
import { NyTimesService } from '../../services/ny-times.service';
import { Result } from '../../interfaces/categories-details';

@Component({
  selector: 'app-search-books',
  templateUrl: './search-books.component.html',
  styleUrls: ['./search-books.component.sass']
})
export class SearchBooksComponent implements OnInit {

  categories: Result[] = [];

  constructor(private bookService: NyTimesService){

    
  }
  ngOnInit(): void {
    this.bookService.getBooks().subscribe( getInfo => {
      console.log(getInfo);
      this.categories = getInfo.splice(0, 9);
      console.log(this.categories);

    });
  }


}
