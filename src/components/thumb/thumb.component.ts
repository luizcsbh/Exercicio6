import { Component, OnInit } from "@angular/core";
import { Input } from "@angular/core";
import { IMovie } from "../../app/Movie";

@Component({
  selector: "thumb",
  templateUrl: "./thumb.component.html",
  styleUrls: ["./thumb.component.css"]
})
export class thumb implements OnInit {
  @Input("movieItem") movieItem: IMovie;

  ngOnInit() {
    console.log("thumbMovie", this.movieItem);
  }
}
