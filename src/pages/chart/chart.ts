import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import * as HighCharts from 'highcharts';

@Component({
  selector: 'page-chart',
  templateUrl: 'chart.html'
})
export class ChartPage implements OnInit {

  constructor(public navParams: NavParams, public navCtrl: NavController) {
    console.log(this.navParams.get('item'));
  }

  ngOnInit(): void {

    var myChart = HighCharts.chart('cont', {
      chart: {
        type: 'bar'
      },
      title: {
        text: 'Fruit Consumption'
      },
      xAxis: {
        categories: ['Apples', 'Bananas', 'Oranges'],
        scrollbar: {
          enabled: true
        }
      },
      yAxis: {
        title: {
          text: 'Fruit eaten'
        }
      },
      series: [{
        name: 'AAPL Stock Price',
        data: [1, 0, 4, 1, 0, 4, 1, 0, 4, 1, 0, 4, 1, 0, 4]
      }, {
        name: 'John',
        data: [5, 7, 3, 5, 7, 3, 5, 7, 3, 5, 7, 3, 5, 7, 3]
      }]
    });
  }

}
