import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { BuscaTesoroComponent } from './main/busca-tesoro/busca-tesoro.component';
import { MemoComponent } from './main/memo/memo.component';
import { MoletopoComponent } from './main/moletopo/moletopo.component';
import { QuienesquienComponent } from './main/quienesquien/quienesquien.component';
import { FormsModule } from '@angular/forms';
import { JuegosComponent } from './main/juegos/juegos.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    BuscaTesoroComponent,
    MemoComponent,
    MoletopoComponent,
    QuienesquienComponent,
    JuegosComponent
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
