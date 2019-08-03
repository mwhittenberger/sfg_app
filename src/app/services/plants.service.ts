import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlantsService {

  constructor(private http: HttpClient ) {}

  getPlants() {
    return this.http.get('https://www.southfloridagarden.com/api/user/getPlants');
  }

}
