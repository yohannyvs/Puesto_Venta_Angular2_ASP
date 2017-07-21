import { Component, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html'
})
export class BodyComponent implements OnInit {

  constructor( public cs:ChatService ) { }

  ngOnInit() {
  }

}
