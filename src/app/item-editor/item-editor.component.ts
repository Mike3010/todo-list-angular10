import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../models/item';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-item-editor',
  templateUrl: './item-editor.component.html',
  styleUrls: ['./item-editor.component.css']
})
export class ItemEditorComponent implements OnInit {

  item: Item;

  constructor(private itemService: ItemService, private route: ActivatedRoute, private router: Router) { }

  saveItem(item: Item) {
    if(item.id == null) {
      this.addItem(item);
    } else {
      this.updateItem(item);
    }
  }
  
  private addItem(item: Item) {
    this.itemService.save(item).subscribe(i => {
      this.router.navigate(['/list']);
    });
  }

  private updateItem(item: Item) {
    this.itemService.update(item).subscribe(i => {
      this.router.navigate(['/list']);
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    
    if(id != null) {
      this.itemService.getItem(id).subscribe(item => {
        this.item = item;
      });
    } else {
      this.item = { id: null, title: '', text: '', sort: null}
    }    
  }
}
