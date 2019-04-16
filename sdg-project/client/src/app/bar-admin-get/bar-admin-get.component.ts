import { Component, OnInit } from '@angular/core';
import {Sort} from '@angular/material';
import Bar from '../Bar';
import { BarService } from '../bar.service';

@Component({
  selector: 'app-bar-admin-get',
  templateUrl: './bar-admin-get.component.html',
  styleUrls: ['./bar-admin-get.component.css']
})


export class BarAdminGetComponent implements OnInit {

  bars: Bar[];
  sorted_bar: Bar[];
  region_selection: string;
  

  constructor(private bs: BarService) {
  }

  ngOnInit() {
    this.region_selection = "all";
    this.bs
      .getBar()
      .subscribe((data: Bar[]) => {
        this.bars = data;
        this.sorted_bar = this.bars.slice();
    });
  }

  deleteBar(id) {
    this.bs.deleteBar(id).subscribe(res => {
      console.log('Deleted');
      document.location.reload();
    });
  }

  sortData(sort: Sort) {
    const data = this.bars.slice();
    if (!sort.active || sort.direction === '') {
      this.sorted_bar = data;
      return;
    }

    this.sorted_bar = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name': return compare(a.bar_name, b.bar_name, isAsc);
        
        
        default: return 0;
      }
    });
  }

}

function compare(a: Number | string | String, b: Number | string | String, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
