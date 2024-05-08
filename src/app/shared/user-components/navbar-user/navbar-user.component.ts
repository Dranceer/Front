import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserAuthenticationService } from 'src/app/Services/user-authentication.service';
import { UserServiceService } from 'src/app/Services/user-service.service';

@Component({
  selector: 'app-navbar-user',
  templateUrl: './navbar-user.component.html',
  styleUrls: ['./navbar-user.component.css']
})
export class NavbarUserComponent implements OnInit{
  
  email: any;
  token: any;
  role: any;

  constructor(private router: Router, private auth: UserAuthenticationService, private userService: UserServiceService){}

  ngOnInit(): void {
    this.optionAdmin();
  }

  optionAdmin(){
    this.email = this.auth.getEmail();
    this.token = this.auth.getItem();
    this.userService.searchByEmail(this.email,this.token).subscribe(data =>{
      this.role = data[0].role;
      console.log(this.role);
    })
  }

  logOut(){
    this.auth.removeItem();
    this.router.navigate(['/']);
  }
}
