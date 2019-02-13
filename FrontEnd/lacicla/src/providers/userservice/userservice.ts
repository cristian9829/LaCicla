import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../../app/models/Usuario';
import { Authent } from '../../app/models/authent';
import { Tarjeta } from '../../app/models/Tarjeta';
import { Recorrido } from '../../app/models/Recorridos';

@Injectable()
export class UserserviceProvider {
defaultUrl:string;
  constructor(public httpClient: HttpClient) {
    // this.defaultUrl = 'http://localhost:3000';
    this.defaultUrl = 'https://lacicla.herokuapp.com'
  }

  create(user: Usuario): any {
    const url = `${this.defaultUrl}/usuarios`;
    console.log(url);
    return this.httpClient.post(url, user);
  }

  validateUser(auth: Authent): any {
    const url = `${this.defaultUrl}/usuario_token`;
    console.log(url);
    return this.httpClient.post(url, auth);
  }

  createTarjeta(tarjeta: Tarjeta): any {
    console.log(tarjeta);
    const url = `${this.defaultUrl}/tarjetas`;
    return this.httpClient.post(url, tarjeta);
  }

  obtenerTarjetaPorId(id:number): any {
    console.log(id);
    const url = `${this.defaultUrl}/tarjetas/getbyid/${id}`;
    console.log(url);
    return this.httpClient.get(url);
  }

  obtenerDescuentos(codigo:string){
    console.log(codigo);
    const url = `${this.defaultUrl}/descuentos/getByCodigo/${codigo}`;
    console.log(url);
    return this.httpClient.get(url);
  }

  obtenerRecorridoPorId(id:number): any {
    console.log(id);
    const url = `${this.defaultUrl}/recorridos/getbyid/${id}`;
    console.log(url);
    return this.httpClient.get(url);
  }

  simularRecorridos(recorrido:Recorrido){
    const url = `${this.defaultUrl}/recorridos`;
    console.log(url);
    return this.httpClient.post(url, recorrido);
  }

}
