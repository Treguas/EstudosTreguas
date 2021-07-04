import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { User } from './app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'treinoKond';
  users: any;
  userInputs: User = {
    id: "",
    nome: "",
    cpf: ""
  };

  constructor(
    public service: AppService
  ){

  }

  ngOnInit(){
    this.service.todosComWhereUsers();
    this.service.onUsersChanged.subscribe(response => {
      console.log(response)
      this.users = response;
    })
  }

}
