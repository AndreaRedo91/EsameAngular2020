import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { ListelementComponent } from './listelement/listelement.component';
import { ConteComponent } from './conte/conte.component';
import { PreloadimgComponent } from './preloadimg/preloadimg.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ListelementComponent,
    ConteComponent,
    PreloadimgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
