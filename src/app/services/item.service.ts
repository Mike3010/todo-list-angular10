import { Injectable } from '@angular/core';
import { Item } from '../models/item'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private items: Item[] = [
    { id: 1, title: 'Test1', text: 'Text1', due: new Date(2020, 1, 1)},
    { id: 2, title: 'Test2', text: 'Text2', due: new Date(2020, 1, 2)},
    { id: 3, title: 'Test3', text: 'Text3', due: new Date(2020, 1, 3)},
    { id: 4, title: 'Test4', text: 'Text4', due: new Date(2020, 1, 4)},
    { id: 5, title: 'Test5', text: 'Text5', due: new Date(2020, 1, 5)},
  ];

  constructor() { }

  getItems(): Observable<Item[]> {
    return of(this.items);
  }

  getItem(id: number): Observable<Item> {
    for(let i=0; i<this.items.length; i++) {
      if(this.items[i].id == id) {
        return of(this.items[i]);
      }
    }
    return of(null);
  }

  addItem(item: Item) {
    this.items.push(item);
  }
}
