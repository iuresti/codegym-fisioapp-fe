import {Component} from '@angular/core';
import {Login} from "../../model/login";
import {FormsModule} from "@angular/forms";
import {LoginService} from "../../services/login.service";
import {Router} from "@angular/router";
import {NgbAlert} from "@ng-bootstrap/ng-bootstrap";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NgbAlert, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  login: Login;
  failedLogin: boolean = false;

  constructor(private loginService: LoginService, private router: Router) {
    this.login = new Login();
  }

  onLogin() {
    this.failedLogin = false;
    this.loginService.login(this.login).subscribe(data => {
      console.log(data);
      this.router.navigateByUrl('/dashboard');
    }, error => {
      this.failedLogin = true;
    })
  }
}
