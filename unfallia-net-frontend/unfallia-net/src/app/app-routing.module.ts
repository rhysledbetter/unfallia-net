import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MagicItemsComponent } from './magic-items/magic-items.component';
import { AddMagicItemsComponent } from './magic-items/add-magic-items/add-magic-items.component';
import { EditMagicItemsComponent } from './magic-items/edit-magic-items/edit-magic-items.component';
import { DeleteMagicItemsComponent } from './magic-items/delete-magic-items/delete-magic-items.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"about", component:AboutComponent},
  {path:"contact", component:ContactComponent},
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:"magic-items", component:MagicItemsComponent},
  {path:"magic-items/add-magic-item", component:AddMagicItemsComponent},
  {path:"magic-items/edit/:id", component:EditMagicItemsComponent},
  {path:"magic-items/delete/:id",component:DeleteMagicItemsComponent},
  {path:"**", component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
