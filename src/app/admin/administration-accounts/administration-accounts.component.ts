import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/Interfaces/User';



@Component({
  selector: 'app-administration-accounts',
  templateUrl: './administration-accounts.component.html',
  styleUrls: ['./administration-accounts.component.css']
})
export class AdministrationAccountsComponent implements OnInit {

  public page : number = 1;
  usersCreators : User[] = [];
  usersDonors : User[] = [];

  ngOnInit(): void {
    this.getUsers();
  }

   users : User[] = [
    {
      'id' : 0,
      'email' : 'marcos07@gmail.com',
      'name' : 'marcos',
      'lastname' : 'cora',
      'password' : '1234',
      'rrs_fb' : '',
      'rrs_ig' : '',
      'place' : 'neco',
      role : {
        'id' : 0,
        'roleName' : 'donador'
      }
  
    },
    {
      'id' : 1,
      'email' : 'raul@hotmail.com',
      'name' : 'raul',
      'lastname' : 'cora',
      'password' : '12345',
      'rrs_fb' : '',
      'rrs_ig' : '',
      'place' : 'neco',
      role : {
        'id' : 1,
        'roleName' : 'creador'
      }
  
    },
    {
      'id' : 2,
      'email' : 'raul@hotmail.com',
      'name' : 'PAncho',
      'lastname' : 'cora',
      'password' : '12345',
      'rrs_fb' : '',
      'rrs_ig' : '',
      'place' : 'neco',
      role : {
        'id' : 0,
        'roleName' : 'donador'
      }
  
    },
    {
      'id' : 3,
      'email' : 'raul@hotmail.com',
      'name' : 'Rafa',
      'lastname' : 'cora',
      'password' : '12345',
      'rrs_fb' : '',
      'rrs_ig' : '',
      'place' : 'neco',
      role : {
        'id' : 1,
        'roleName' : 'creador'
      }
  
    },
    {
      'id' : 4,
      'email' : 'raul@hotmail.com',
      'name' : 'PAnchooo',
      'lastname' : 'cora',
      'password' : '12345',
      'rrs_fb' : '',
      'rrs_ig' : '',
      'place' : 'neco',
      role : {
        'id' : 0,
        'roleName' : 'donador'
      }
  
    },
    {
      'id' : 5,
      'email' : 'raul@hotmail.com',
      'name' : 'raul',
      'lastname' : 'cora',
      'password' : '12345',
      'rrs_fb' : '',
      'rrs_ig' : '',
      'place' : 'neco',
      role : {
        'id' : 1,
        'roleName' : 'creador'
      }
  
    },
    {
      'id' : 6,
      'email' : 'raul@hotmail.com',
      'name' : 'raul',
      'lastname' : 'cora',
      'password' : '12345',
      'rrs_fb' : '',
      'rrs_ig' : '',
      'place' : 'neco',
      role : {
        'id' : 1,
        'roleName' : 'creador'
      }
  
    },
    {
      'id' : 7,
      'email' : 'raul@hotmail.com',
      'name' : 'raul',
      'lastname' : 'cora',
      'password' : '12345',
      'rrs_fb' : '',
      'rrs_ig' : '',
      'place' : 'neco',
      role : {
        'id' : 1,
        'roleName' : 'creador'
      }
  
    },  {
      'id' : 8,
      'email' : 'raul@hotmail.com',
      'name' : 'raul',
      'lastname' : 'cora',
      'password' : '12345',
      'rrs_fb' : '',
      'rrs_ig' : '',
      'place' : 'neco',
      role : {
        'id' : 1,
        'roleName' : 'creador'
      }
  
    }
  ]

  getUsers(){
    //peticion a la BDD

    this.users.forEach(u=>{
      if(u.role.id == 0){
        this.usersDonors.push(u);
      }else{
        this.usersCreators.push(u);
      }
    })
  
  }
}




