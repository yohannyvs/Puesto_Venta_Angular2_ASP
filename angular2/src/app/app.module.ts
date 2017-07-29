import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

//Components

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { BodyComponent } from './components/body/body.component';
import { ProductosComponent } from './components/body/productos/productos.component';
import { ChatComponent } from './components/body/chat/chat.component';
import { CarritoComponent } from './components/body/carrito/carrito.component';
import { FormsModule } from '@angular/forms';

//Services
import { ChatService } from './components/services/chat.service';
import {PuntoVentaService} from './components/services/punto-venta.service';

//Firebase
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { LoginComponent } from './components/shared/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BodyComponent,
    ProductosComponent,
    ChatComponent,
    CarritoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  providers: [
    ChatService,
    PuntoVentaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
