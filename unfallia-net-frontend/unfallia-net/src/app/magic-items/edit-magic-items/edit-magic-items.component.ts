import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MagicItemClass } from '../../models/magic-items.class';
import { MagicItemService } from '../../services/magic-item.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-magic-items',
  templateUrl: './edit-magic-items.component.html',
  styles: ``
})
export class EditMagicItemsComponent implements OnInit {



  submitted = false;
  magicItems !: MagicItemClass[];
  magicItem = new MagicItemClass();
  magicItemsForm !: FormGroup;

  id: number = 0; // MagicItem's ID from URL
  ready = false; // Load form only when data is present
  constructor(private magicItemService: MagicItemService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.buildFormControls();
    this.loadData();
    this.route.paramMap.subscribe( params => this.id = parseInt(params.get('id') || '{}'))

    this.magicItemService.getMagicItem(this.id)
      .subscribe(
        data => {
          this.magicItem = data[0];
        },
        error => console.log(error)
      )
  }
  // Method to easily access form controls
  get f() { return this.magicItemsForm.controls; }

  handleSubmit() {
    console.log(this.magicItemsForm.value);
    this.buildMagicItem();
    //this.magicItemService.updateMagicItem(this.id, this.magicItem)
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
