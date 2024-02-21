import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components/components.component';
import { BackComponent } from './components/back/back.component';



@NgModule({
  declarations: [
    ComponentsComponent,
    BackComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BackModule { }
