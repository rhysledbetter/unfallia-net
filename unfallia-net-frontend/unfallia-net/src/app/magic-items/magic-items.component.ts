import { Component } from '@angular/core';
//import { magic_items } from '../models/magic-items.data';
import { MagicItemService } from '../services/magic-item.service';
import { MagicItemClass } from '../models/magic-items.class';

@Component({
  selector: 'app-magic-items',
  templateUrl: './magic-items.component.html',
  styles: ``
})
export class MagicItemsComponent {

  //magic_items = magic_items;
  magic_items!: any[];
  //magic_items!: MagicItemsClass;
  magic_items_array!: Array<any>;
  constructor(private magicItemService: MagicItemService) { }

  ngOnInit(): void {
    this.loadData();
    //this.magic_items_array = Object.keys(this.magic_items).map(key => ({type: key, value: this.magic_items[key]}))
  }

  loadData() {
    this.magicItemService.getMagicItems()
      .subscribe(
        data => {
          this.magic_items = data;
        },
        error => {
          console.log(error)
        }
      )
  }
}
