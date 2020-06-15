import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "../modules/AppRoutingModule";
import { HelloRoute } from "../components/HelloRoute";
import { titulo } from "../components/titulo/titulo.component";
import { formPesquisar } from "../components/formPesquisar/formPesquisar.component";
import { thumb } from "../components/thumb/thumb.component";
import { detalhesMovie } from "../components/detalhesMovie/detalhesMovie.component";
import { home } from "../components/home/home.component";

@NgModule({
  declarations: [
    AppComponent,
    HelloRoute,
    titulo,
    formPesquisar,
    thumb,
    detalhesMovie,
    home
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
