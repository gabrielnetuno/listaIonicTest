import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Produto } from '../model/produto';
import { identity } from 'rxjs';


@Injectable({
  providedIn: 'root'
})




export class DatabaseService {

  constructor(private http: HttpClient) { }

  HttpOptions={
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  }

  readonly API = "http://localhost:3000/lista";

  getItem(){
    return this.http.get<Produto[]>(this.API);
  }

  getOneItem(id:number){
    return this.http.get<Produto>(this.API + id);
  }

  delItem(id:number){
    return this.http.delete(this.API + id).subscribe()
  }

  statusItem(item: Produto){
    return this.http.put(this.API + item.id, JSON.stringify(item), this.HttpOptions).subscribe();
  }

  updateItem(id: any, item: Produto, ){
    return this.http.put(this.API + identity, JSON.stringify(item), this.HttpOptions).subscribe();
  }
}
