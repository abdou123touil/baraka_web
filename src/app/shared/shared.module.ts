import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule  } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { SelectComponent } from './components/select/select.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchComponent } from './components/search/search.component';
import { dark_modeComponent } from '../dark_mode/components/dark_mode.component';




@NgModule({
  declarations: [
    HeaderComponent,
    SelectComponent,
    SearchComponent,
    dark_modeComponent,
    FooterComponent,
     SearchComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,

    RouterModule,
    HttpClientModule
  ],
  exports:[
    FooterComponent,
    HeaderComponent,
    SelectComponent,
    SearchComponent

  ]
})
export class SharedModule { }
