import { Component, OnInit } from '@angular/core';
import { MonthlyService } from './../../services/monthly.service';
import {Observable} from "rxjs";
import { Storage } from '@ionic/storage';
import {PlantsService} from "../../services/plants.service";


@Component({
  selector: 'app-monthly',
  templateUrl: './monthly.page.html',
  styleUrls: ['./monthly.page.scss'],
})
export class MonthlyPage implements OnInit {

  list: Observable<any>;
  tasks: Array<any>;
  myTasks: Array<any>;
  plants: Observable<any>;

  constructor(private monthlyService: MonthlyService, private plantsService: PlantsService, public storage: Storage) { }

  ngOnInit() {
    this.getMyList();
    this.getPlants();
  }

  getMyList() {
    this.list = this.monthlyService.getList();
    this.list.subscribe(data => {
      console.log('list data ', data);
      this.tasks = data[0];
      this.myTasks = data[1];

    });
  }

  getPlants() {
    this.plants = this.plantsService.getPlants();
    this.plants.subscribe(data => {
      //console.log('plant data ', data);
      this.storage.set('plants', data);

      this.storage.get('plants').then((val) => {
        console.log('Plants are ', val);
      });

    });
  }

}
