import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-auth-page',
  templateUrl: './default-auth-page.component.html',
  styleUrls: ['./default-auth-page.component.css']
})
export class DefaultAuthPageComponent implements OnInit {

  constructor() { }
  showComp = 'login';
  ngOnInit(): void {
  }

  showComponent(event) {
    this.showComp = event;
  }

}
