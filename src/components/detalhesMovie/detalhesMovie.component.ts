import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { IDetalhesMovie } from "../../app/DetalhesMovie";
import { ServicesMovies } from "../../services/servicesMovies";

@Component({
  selector: "detalhes-movie",
  templateUrl: "./detalhesMovie.component.html",
  styleUrls: ["./detalhesMovie.component.css"]
})
export class detalhesMovie implements OnInit {
  id = "Movies App";
  detalhesMovie: IDetalhesMovie;

  constructor(private route: ActivatedRoute, private movies: ServicesMovies) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params["id"];
    });

    this.movies.getDetail(this.id).subscribe(data => {
      console.log(data);
      this.detalhesMovie = {
        id: data.id,
        name: data.title,
        date: data.release_date,
        cover: "http://image.tmdb.org/t/p/w185/" + data.poster_path,
        overview: data.overview,
        page: data.homepage
      };
    });
  }
}
