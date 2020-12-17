import { Component, OnInit } from '@angular/core';
import { Owner } from 'src/app/models/owner';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { OwnerService } from 'src/app/services/owner.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  logoUrl = 'https://icon-icons.com/icons2/1286/PNG/72/90_85241.png';
  isAdmin = false;
  isLogged = false;

  
  constructor(private authenticationService: AuthenticationService, private ownerService: OwnerService) { }

  loadData() {
    const user = this.authenticationService.getCurrentUser();
    this.isLogged = user != null;
    this.ownerService.getId(user.id).subscribe(result => {
      this.isAdmin =  result.type === 'Administrative';
    })
  }

  logOut() {
    localStorage.clear();
    window.location.reload();
  }

  ngOnInit(): void {
    this.loadData();
  }

}
