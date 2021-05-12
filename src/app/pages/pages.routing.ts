import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { SearchBooksComponent } from './search-books/search-books.component';


const routes: Routes = [
    {
        path: 'dashboard',
        component: PagesComponent,
        children: [
            // { path: '', component: DashBoardComponent },
            { path: 'Sbooks', component: SearchBooksComponent },
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
