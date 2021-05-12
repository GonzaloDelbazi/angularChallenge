import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { NotPageFoundComponent } from './components/not-page-found/not-page-found.component';
import { PagesRoutingModule } from './pages/pages.routing';


const routes: Routes = [

  {path: '', redirectTo: '/dashboard/Sbooks', pathMatch: 'full'  },
  {path: '**', component: NotPageFoundComponent}


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
