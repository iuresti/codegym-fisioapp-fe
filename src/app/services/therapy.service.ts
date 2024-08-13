import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Therapy} from "../model/therapy";
import {ConfigurationService} from "./configuration.service";

@Injectable({
  providedIn: 'root'
})
export class TherapyService {

  constructor(private httpClient: HttpClient, private configuration: ConfigurationService) {
  }

  getAll(): Observable<Therapy[]> {
    return this.httpClient.get<Therapy[]>(`/api/therapy`)
  }
}
