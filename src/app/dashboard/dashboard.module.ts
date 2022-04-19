import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';



@NgModule({
  declarations: [
    HomeComponent,
    AutocompleteComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
