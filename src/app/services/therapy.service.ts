import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Therapy} from "../classes/therapy";

@Injectable({
  providedIn: 'root'
})
export class TherapyService {

  constructor(private httpClient: HttpClient) { }

  getAll() : Observable<Therapy[]> {
    return this.httpClient.get<Therapy[]>("http://localhost:8080/api/therapy");
  }
}
