import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DashboardService } from '../../shared';
import { ChartPage } from '../chart/chart';

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
  
})

export class DashboardPage implements OnInit {

  public allList : {};

  constructor(public navCtrl: NavController, public dashboardService: DashboardService) {

  }

  ionViewDidLoad() {
    
  }

  ngOnInit(): void {
    this.dashboardService.get_all_Lists().subscribe((data) => {
      this.allList = data
    });
  }

  openChart(rpname){
    this.navCtrl.push(ChartPage, {
      item: rpname
    })
  }

}
