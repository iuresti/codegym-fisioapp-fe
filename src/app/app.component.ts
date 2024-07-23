import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TherapiesComponent} from "./component/therapies/therapies.component";
import {LoginComponent} from "./component/login/login.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TherapiesComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Mi primera app';
}
