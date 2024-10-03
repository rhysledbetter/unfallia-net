import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MagicItemsComponent } from './magic-items.component';
import { AddMagicItemsComponent } from './add-magic-items/add-magic-items.component';
import { DeleteMagicItemsComponent } from './delete-magic-items/delete-magic-items.component';
import { EditMagicItemsComponent } from './edit-magic-items/edit-magic-items.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MagicItemsComponent,
    AddMagicItemsComponent,
    DeleteMagicItemsComponent,
    EditMagicItemsComponent
  ],
  imports: [
    CommonModule,RouterModule,ReactiveFormsModule
  ],
  exports: [
    MagicItemsComponent,
    AddMagicItemsComponent,
    DeleteMagicItemsComponent,
    EditMagicItemsComponent,
    ReactiveFormsModule
  ]
})
export class MagicItemsModule { }
