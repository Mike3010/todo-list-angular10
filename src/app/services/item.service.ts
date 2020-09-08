import { Injectable } from '@angular/core';
import { Item } from '../models/item'
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private items: Item[] = [
    { id: 1, title: 'Test1', text: 'Text1', order: 1},
    { id: 2, title: 'Test2', text: 'Text2', order: 2},
    { id: 3, title: 'Test3', text: 'Text3', order: 3},
    { id: 4, title: 'Test4', text: 'Text4', order: 4},
    { id: 5, title: 'Test5', text: 'Text5', order: 5},
  ];

  constructor(private http: HttpClient) { }

  getItems(): Observable<Item[]> {

    return this.http.get<Item[]>('http://localhost:8080/todo/')
  }

  getItem(id: string): Observable<Item> {
    
    return this.http.get<Item>('http://localhost:8080/todo/'+id);
  }

  save(item: Item): Observable<Item> {
    return this.http.post<Item>('http://localhost:8080/todo/', item);
  }

  update(item: Item): Observable<Item> {
    return this.http.put<Item>('http://localhost:8080/todo/', item);
  }

  addItem(item: Item) {
    this.items.push(item);
  }
}
