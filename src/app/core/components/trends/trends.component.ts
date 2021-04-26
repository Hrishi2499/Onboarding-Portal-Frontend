import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { XAxisOptions } from "highcharts";
import { TrendData } from '../../model/trend-data';
import { TrendService } from '../../services/trend.service';

@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.css']
})
export class TrendsComponent implements OnInit{

  highcharts: Highcharts.Chart;
  displayObject: TrendData = new TrendData();
  displayObject2: TrendData = new TrendData();
  series: any;
  area: string;

  constructor(private trendsService: TrendService) {}
  ngOnInit(){
    this.trendsService.getTrendByLocation().subscribe((data) =>{
      this.displayObject.name = data["name"];
      this.displayObject.years = data["years"];
      this.displayObject.columns = data["columns"];
      this.displayObject.data = data["data"];
      this.series = this.getSeries(this.displayObject);
      this.area = 'container';
      this.draw(this.displayObject);
    });
    
    this.trendsService.getTrendByManager().subscribe((data) =>{
      this.displayObject2.name = data["name"];
      this.displayObject2.years = data["years"];
      this.displayObject2.columns = data["columns"];
      this.displayObject2.data = data["data"];
      this.series = this.getSeries(this.displayObject2);
      this.area = 'container2';
      this.draw(this.displayObject2);
    });
    
  }

  draw(object: TrendData){
    
    this.highcharts = Highcharts.chart( 
    {
      exporting: {
        enabled: true},
      chart: {
          renderTo:this.area,
          type: 'column'
      },
      title: {
          text: object.name
      },
      subtitle: {
          text: ''
      },
      xAxis: {
          categories: object.years,
          crosshair: true
      },
      yAxis: {
          min: 0,
          title: {
              text: 'Count'
          }
      },
      tooltip: {
          headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat:  '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                        '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
          footerFormat: '</table>',
          shared: true,
          useHTML: true
      },
      plotOptions: {
          column: {
              pointPadding: 0.2,
              borderWidth: 0
          }
      },
      series: this.series
  });
  }

  getSeries(object:TrendData){
    var series = [];
    for(let num =0; num < object.columns.length; num++){
        series.push({
          name: object.columns[num],
          type: 'column',
          data: object.data[num]
        });
    }
    return series;
  }
}

