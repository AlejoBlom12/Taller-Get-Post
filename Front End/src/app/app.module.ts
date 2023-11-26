import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { FormatoAutosComponent } from './formato-autos/formato-autos.component';
import { ListadoAutosComponent } from './listado-autos/listado-autos.component';

@NgModule({
  declarations: [
    AppComponent,
    FormatoAutosComponent,
    ListadoAutosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
