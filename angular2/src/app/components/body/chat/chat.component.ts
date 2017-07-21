import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html'
})
export class ChatComponent implements OnInit {

  chats: FirebaseListObservable<any[]>;

  constructor( af: AngularFireDatabase )
  {
    this.chats = af.list('/chats');
  }

  ngOnInit() {
  }

}
