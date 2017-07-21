import { Component } from '@angular/core';
import { ChatService } from "./components/services/chat.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor( public cs:ChatService )
  {

  }
}
