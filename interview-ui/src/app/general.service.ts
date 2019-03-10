import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map, filter, scan } from 'rxjs/operators';

import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(private http: Http) { }

  getData(data){
    return this.http.get("https://api.github.com/search/repositories?q=" + data).pipe(map((res)=>{return res.json()? res.json(): res}))
  }
}
