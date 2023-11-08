import { Component } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
// import { ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html',
  styleUrls: ['./radar.component.css']
})
export class RadarComponent {
  public radarChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };
  public radarChartLabels: string[] = [
    'Eating',
    'Drinking',
    'Sleeping',
    'Designing',
    'Coding',
    'Cycling',
    'Running',
  ];

  public radarChartData: ChartData<'radar'> = {
    labels: this.radarChartLabels,
    datasets: [
      { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
      { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' },
    ],
  };
  public radarChartType: ChartType = 'radar';

  // events
  public chartClicked({
    event,
    active,
  }: {
    event: ChartEvent;
    active: object[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event: ChartEvent;
    active: object[];
  }): void {
    console.log(event, active);
  }
  public polarAreaChartLabels: string[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail Sales',
    'Telesales',
    'Corporate Sales',
  ];
  public polarAreaChartData: ChartData<'polarArea'> = {
    labels: this.polarAreaChartLabels,
    datasets: [
      {
        data: [300, 500, 100, 40, 120],
        label: 'Series 1',
      },
    ],
  };
  public polarAreaLegend = true;

  public polarAreaChartType: ChartType = 'polarArea';

  // events
  // public chartClicked({
  //   event,
  //   active,
  // }: {
    event: ChartEvent | undefined;
    active: object[] | undefined;


    public scatterChartOptions: ChartConfiguration['options'] = {
      responsive: true,
    };
    public scatterChartLabels: string[] = [
      'Eating',
      'Drinking',
      'Sleeping',
      'Designing',
      'Coding',
      'Cycling',
      'Running',
    ];
  
    public scatterChartData: ChartData<'scatter'> = {
      labels: this.scatterChartLabels,
      datasets: [
        {
          data: [
            { x: 1, y: 1 },
            { x: 2, y: 3 },
            { x: 3, y: -2 },
            { x: 4, y: 4 },
            { x: 5, y: -3 },
          ],
          label: 'Series A',
          pointRadius: 10,
        },
      ],
    };
    public scatterChartType: ChartType = 'scatter';
  
    // events
    // public chartClicked({
    //   event,
    //   active,
    // }: 
    // {
    //   event: ChartEvent;
    //   active: object[];
    // }): 
    // void {
    //   console.log(event, active);
    // }
  
    // public chartHovered({
    //   event,
    //   active,
    // }: 
    // {
    //   event: ChartEvent;
    //   active: object[];
    // }): 
    // void {
    //   console.log(event, active);
    // }
  } 

  // void {
  //   console.log(event, active);
  // }

  // public chartHovered({
  //   event,
  //   active,
  // }: {
  //   event: ChartEvent;
  //   active: object[];
  // }): void {
  //   console.log(event, active);
  // }


