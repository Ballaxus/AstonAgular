import { Injectable } from '@angular/core';
import { Cat } from '../models/Cat';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  constructor() { }

  getAll(): Promise<any> {
    return fetch(`http://localhost:3000/chats`, {
      method: 'GET'
    });
  }
  getById(id: number): Promise<any> {
    return fetch(`http://localhost:3000/chats/${id}`, {
      method: 'GET'
    });
  }
  delete(id: number): Promise<any> {
    return fetch(`http://localhost:3000/chats/${id}`, {
      method: 'DELETE'
    });
  }
  create(cat: Cat): Promise<any> {
    return fetch(`http://localhost:3000/chats`, {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cat)
    });
  }
  // update(cat: Cat): Promise<any> {
  //   return fetch(`http://localhost:3000/chats/${id}`, {
  //     method: 'GET'
  //   });
  // }
}
