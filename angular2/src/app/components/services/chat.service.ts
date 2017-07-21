import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Mensaje } from "../interfaces/mensaje.interface"

@Injectable()
export class ChatService {

  chats: FirebaseListObservable<any[]>;
  usuario:any = { nombre: "Yohanny" };

  constructor( private af: AngularFireDatabase )
  {
    //this.chats = af.list('/chats');
  }

  cargarMensajes()
  {
    this.chats = this.af.list('chats',{
      query:{
        limitToLast:20,
        orerBykey: true
      }
    })

    return this.chats;
  }

  agregarMensaje(texto:string)
  {
    let mensaje:Mensaje =
    {
      nombre: "Yohanny",
      mensaje: texto
    }

    return this.chats.push( mensaje );
  }

}
