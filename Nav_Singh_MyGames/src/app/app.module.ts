import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';  // Import CommonModule
import { AppComponent } from './app.component';
import { ContentListComponent } from "./content-list/content-list.component";

@NgModule({
  declarations: [
    AppComponent,
    ContentListComponent  
  ],
  imports: [
    BrowserModule,
    CommonModule  // Add CommonModule to the imports array
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
