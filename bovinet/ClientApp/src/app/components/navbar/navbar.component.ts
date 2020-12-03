import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  logoUrl = 'https://icon-icons.com/icons2/1286/PNG/72/90_85241.png';
  constructor() { }

  ngOnInit(): void {
  }

}
