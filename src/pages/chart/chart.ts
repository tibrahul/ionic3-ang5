import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import * as HighCharts from 'highcharts';

@Component({
  selector: 'page-chart',
  templateUrl: 'chart.html'
})
export class ChartPage implements OnInit {

  public ChartData:String;

  constructor(public navParams: NavParams, public navCtrl: NavController) {
    console.log(this.navParams.get('item'));
    this.ChartData=this.navParams.get('item');
  }

  ngOnInit(): void {

    if(this.ChartData=='customer_product'){
      this.OpenPieChart();
    }
    if(this.ChartData=='Warehouse_Comparision'){
      this.OpenAreaspline();
    }

    if(this.ChartData=='Forcastvsorders'){
      this.OpenSpline();
    }
    
  }




  OpenPieChart(){
    var myChart = HighCharts.chart('cont', {
      chart: {
        type: 'pie'
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

  OpenAreaspline(){

    var myChart = HighCharts.chart('cont', {
      chart: {
        type: 'areaspline'
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
  

  OpenSpline(){

    var myChart = HighCharts.chart('cont', {
      chart: {
        type: 'spline'
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

