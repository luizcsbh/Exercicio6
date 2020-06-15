import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router"; // CLI imports router
//import { HelloRoute } from "../components/HelloRoute";
//import { AppComponent } from "../app/app.component";
import { detalhesMovie } from "../components/detalhesMovie/detalhesMovie.component";
import { home } from "../components/home/home.component";
const routes: Routes = [
  { path: "", component: home },
  { path: "detalhes-movie/:id", component: detalhesMovie }
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
