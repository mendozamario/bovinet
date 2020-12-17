import { EventEmitter, Injectable, Output } from '@angular/core';
import * as signalR from '@aspnet/signalr';
import { Animal } from '../models/animal';

@Injectable({
  providedIn: 'root'
})
export class AnimalSignalRService {
  private hubConnection: signalR.HubConnection;

  @Output() newAnimal = new EventEmitter<Animal>();
  @Output() deleteAnimal = new EventEmitter<string>();

  constructor() {}

  startConnection() {
    this.hubConnection = new signalR.HubConnectionBuilder().withUrl('/AnimalHub').build();

    this.hubConnection
      .start()
      .then(() => {
        console.log('Connection started');
        this.onNewAnimal();
        this.onDeleteAnimal();
      })
      .catch((err) => {
        console.log('Error: ' + err);
        setTimeout(() => this.startConnection(), 5000);
      });
  }

  private onNewAnimal() {
    this.hubConnection.on('NewAnimal', (animal) => {
      this.newAnimal.emit(animal);
    });
  }

  private onDeleteAnimal() {
    this.hubConnection.on('DeleteAnimal', (identification) => {
      this.deleteAnimal.emit(identification);
    });
  }
}
