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
    if(item.id == 0) {
      this.addItem(item);
    }
    this.router.navigate(['/list']);
  }
  
  private addItem(item: Item) {
    this.itemService.getItems().subscribe(items => {
      item.id = items.length+1;
      this.itemService.addItem(item);
    });
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    
    if(id != 0) {
      this.itemService.getItem(id).subscribe(item => {
        this.item = item;
      });
    } else {
      this.item = { id: 0, title: 'new', text: '', due: new Date()}
    }    
  }
}
