import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';
import { Item } from '../models/item';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  items: Item[];

  constructor(private itemService: ItemService, private http: HttpClient) { }

  ngOnInit(): void {
    this.getItems();
  }

  getItems() {
    this.itemService.getItems().subscribe(items => {
      this.items = items;
    })
  }

  delete(item: Item) {
    this.itemService.delete(item).subscribe(res => {
      console.log("delete:", res);
      this.getItems();
    });
  }

}
