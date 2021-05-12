import { Component, Input, OnInit } from '@angular/core';
import { List, Book } from '../../interfaces/books-response';
import {Router} from '@angular/router';
import { title } from 'process';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() libros: Book[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  fixWord(word: string){
    return word.replace(' ', '+');
  }

  buscarGoogle(title: string, author: string){
    title = this.fixWord(title);
    author = this.fixWord(author);
    // this.router.navigateByUrl(`www.google.com/search?q=${title} ${author}`);
    window.location.assign (`http://www.google.com/search?q=${title}+${author}`);

  }


}
