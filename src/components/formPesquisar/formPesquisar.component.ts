import { Component, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";

@Component({
  selector: "form-pesquisar",
  templateUrl: "./formPesquisar.component.html",
  styleUrls: ["./formPesquisar.component.css"]
})
export class formPesquisar {
  @Output() PesquisarMovie = new EventEmitter<string>();

  filter: string;

  onInputChange(name: string) {
    this.PesquisarMovie.emit(name);
  }
}
