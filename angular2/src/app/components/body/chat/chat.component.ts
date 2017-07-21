import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html'
})
export class ChatComponent implements OnInit {

  chats: FirebaseListObservable<any[]>;

  mensaje:string="";

  constructor( af: AngularFireDatabase )
  {
    this.chats = af.list('/chats');
  }

  ngOnInit() {
  }

  enviar()
  {
    if(this.mensaje.length == 0)
    {
      return;
    }

    console.log(this.mensaje)
  }
}
