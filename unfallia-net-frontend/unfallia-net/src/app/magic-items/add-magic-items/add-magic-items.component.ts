import { Component, OnInit } from '@angular/core';
import { MagicItemClass } from '../../models/magic-items.class';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MagicItemService } from '../../services/magic-item.service';
//import { magic_items } from '../../models/magic-items.data';

@Component({
  selector: 'app-add-magic-items',
  templateUrl: './add-magic-items.component.html',
  styles: ``
})
export class AddMagicItemsComponent implements OnInit {
  submitted = false;
  magicItems !: MagicItemClass[];
  magicItem = new MagicItemClass();
  magicItemsForm !: FormGroup;
  constructor(private magicItemService: MagicItemService) { }

  ngOnInit(): void {
    this.buildFormControls();
    this.loadData();
  }
  // Method to easily access form controls
  get f() { return this.magicItemsForm.controls; }

  handleSubmit() {
    console.log(this.magicItemsForm.value);
    this.buildMagicItem();
    this.magicItemService.addMagicItem(this.magicItem)
      .subscribe(
        data => {
          this.submitted = true;
        }
      )
    //this.magicItems.push(this.magicItem);
  }

  // Get all records from database
  loadData() {
    this.magicItemService.getMagicItems()
      .subscribe(
        data => {
          this.magicItems = data;
        },
        error => {
          console.log(error)
        }
      )
  }

  // Generate new ID
  getNewID() {
    let newId: number;
    while (true) {
      newId = Math.floor(Math.random() * 10000) + 99999;
      if (this.magicItems.findIndex(el => el.id == newId) == -1) {
        return newId;
      }
    }
  }

  // Build new magic item object
  buildMagicItem() {
    let m = this.magicItemsForm.value;
    this.magicItem.id = this.getNewID();
    this.magicItem.name = m.name;
    this.magicItem.location_found = m.location_found;
    this.magicItem.description = m.description;
    this.magicItem.abilities = m.abilities;
  }
  // Build form controls
  buildFormControls() {
    this.magicItemsForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      location_found: new FormControl('', [Validators.required]),
      description: new FormControl(),
      abilities: new FormControl()
    })
  }
}
