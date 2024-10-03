import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MagicItemClass } from '../models/magic-items.class';
//import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MagicItemService {

  // URL endpoint to our Express app
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  // GET all
  getMagicItems(): Observable<any>{
    return this.http.get(this.apiUrl);
  }

  // GET one record
  getMagicItem(id: number): Observable<any>{
    return this.http.get(this.apiUrl+id)
  }

  // PUT, update a record
  updateMagicItem(id: number, newMagicItem: MagicItemClass): Observable<MagicItemClass>{
    return this.http.put<MagicItemClass>(this.apiUrl+id, newMagicItem);
  }
  // POST a new record
  addMagicItem(newMagicItem: MagicItemClass): Observable<any>{
    return this.http.post(this.apiUrl,newMagicItem);
  }
}
