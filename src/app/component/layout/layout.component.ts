import {Component} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  constructor(private loginService: LoginService) {
  }

  logout() {
    this.loginService.logout();
  }
}
