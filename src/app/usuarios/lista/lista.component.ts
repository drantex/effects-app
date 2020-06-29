import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { UserModel } from 'src/app/models/user.model';

import { map } from 'rxjs/operators';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  public users:Array<UserModel> = [];
  constructor( private userServices: UserService) { }

  ngOnInit() {

    this.userServices.getUSers()
      .subscribe( (dataUser:Array<any>) => { 
        this.users = dataUser.map( user => new UserModel(user))
        console.log(dataUser); 
      });
  }

}
