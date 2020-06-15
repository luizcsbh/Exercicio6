import { Component } from "@angular/core";
import { ServicesMovies } from "../../services/servicesMovies";
import { IMovie } from "../../app/Movie";

@Component({
  selector: "home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class home {
  listMovies: IMovie[];
  initialMovies: IMovie[];

  constructor(private movies: ServicesMovies) {
    this.listMovies = [];
    this.initialMovies = this.listMovies;
  }

  ngOnInit() {
    this.movies.getPopular().subscribe(data => {
      console.log(data.results[0]);
      data.results.map(data =>
        this.listMovies.push({
          id: data.id,
          name: data.title,
          date: data.release_date,
          cover: "http://image.tmdb.org/t/p/w185/" + data.poster_path
        })
      );
    });
  }
  onSearchMovie(name: string) {
    console.log(name);
    if (name === "") {
      this.listMovies = this.initialMovies;
    }
    this.listMovies = this.listMovies.filter(
      item => item.name.toLowerCase().indexOf(name.toLowerCase()) !== -1
    );
  }
}
