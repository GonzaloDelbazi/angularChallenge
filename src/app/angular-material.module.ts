import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatInputModule
  ],
  exports:[
    CommonModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class AngularMaterialModule { }

