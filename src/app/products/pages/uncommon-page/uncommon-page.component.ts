import { Component } from '@angular/core';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  // i18n Select
  public name:string = 'Nicolas';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male : 'invitarlo',
    female: 'invitarla'
  }

  changeClient():void{
    this.name = 'Melissa';
    this.gender = 'female';
  }

  // i18n Plural

  public clients:string[] = ['Maria','Pedro','Fernando','Nicolas'];
  public clientsMap = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1':  'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }


  deleteClient():void{
    this.clients.shift();
  }

  //Key Value Pipe
  public person = {
    name: 'Nicolas',
    age: 24,
    address: 'Bogotá, Colombia'
  }

  //Async Pipe
  public myObservableTimer: Observable<Number> = interval(1000);


}
