import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  template: "<strong>Titulo da página: {{ titulo }}</strong>"
})
export class HelloRoute implements OnInit {
  titulo: string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.titulo = params["title"];
    });
  }
}
