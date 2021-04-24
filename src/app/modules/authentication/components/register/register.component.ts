import { Component, OnInit,  EventEmitter, Output } from '@angular/core';
import { LoginService } from 'src/app/services/login-service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private loginservice: LoginService,
              private router: Router) { }
  @Output() showInParent = new EventEmitter();
  ngOnInit(): void {
  }

  login() {
    this.showInParent.emit('login');
  }

  signup() {
      this.loginservice.login().subscribe( result => {
        this.router.navigate(['/login']);
      })  
  }

}
