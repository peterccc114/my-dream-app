import { Component } from '@angular/core';

import{ MyNewComponentComponent } from './my-new-component/my-new-component.component';
import{ User } from './shared/models/User'
import{ UserformComponent } from './userform/userform.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css'
  ]
})
export class AppComponent {
  title: string = 'App';
  users: User[] = [
    { id: 25, name: 'Chris', username: 'secilayha' },
    { id: 30, name: 'nick',  username: 'whatnickw'}
  ];

  activeUser: User;

  selectUser(user){
    this.activeUser = user;
    console.log(user);
  }
}
