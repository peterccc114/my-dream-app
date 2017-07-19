import { Component } from '@angular/core';

import{ MyNewComponentComponent } from './my-new-component/my-new-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css'
  ]
})
export class AppComponent {
  title = 'App';
  users = [
    { id: 25, name: 'Chris', username: 'secilayha' },
    { id: 30, name: 'nick',  username: 'whatnickw'}
  ];
  
  activeUser;

  selectUser(user){
    this.activeUser = user;
    console.log(this.activeUser);
  }
}
