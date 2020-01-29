import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
@Component({
  selector: 'app-graph-sim',
  templateUrl: './graph-sim.component.html',
  styleUrls: ['./graph-sim.component.css'],
  template: `<div style='margin-top:80px;'><button (click)="add()">Add Point!</button>
  <div [chart]="chart"></div></div>`
})
export class GraphSimComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  chart = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Linechart'
    },
    credits: {
      enabled: false
    },
    series: [
      {name: '2019',
        data: [1, 2, 3,4,5,6,7,8]},
      {
        name: '2020',
        data: [8,7,6,5,4,3,2,1,0]
      },

    ]
  });
 
  add() {
    this.chart.addPoint(Math.floor(Math.random() * 10));
  }
}
 