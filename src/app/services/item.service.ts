import { Injectable } from '@angular/core';
import { Item } from '../models/item'
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

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

  delete(item: Item) {
    return this.http.delete<any>('http://localhost:8080/todo/'+item.id);
  }
}
