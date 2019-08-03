import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';


@Injectable({
  providedIn: 'root'
})
export class MonthlyService {

  cookie : string;

  constructor(private http: HttpClient, public storage: Storage ) {}

  getList() {

    this.storage.get('cookie').then((val) => {
      this.cookie = val;
    });

    return this.http.get('https://www.southfloridagarden.com/api/user/getMonths/?cookie='+this.cookie+'&month=june');
  }

  updateList() {}
}
