import { Component, OnInit, ViewChild } from '@angular/core';
import {Sort, MatSortable, MatSort} from '@angular/material';
import Bar from '../Bar';
import { BarService } from '../bar.service';



@Component({
  selector: 'app-bar-get',
  templateUrl: './bar-get.component.html',
  styleUrls: ['./bar-get.component.css']
})


export class BarGetComponent implements OnInit {

  bars: Bar[];
  sorted_bar: Bar[];
  region_selection: string;
  price_selection: string;
  drink_type_selection: string;

  constructor(private bs: BarService) {
  }

  @ViewChild(MatSort) sort: MatSort;


  ngOnInit() {
    this.region_selection = "all";
    this.price_selection = "average";
    this.drink_type_selection = "beer";
    this.bs
      .getBar()
      .subscribe((data: Bar[]) => {
        this.bars = data;
        this.sorted_bar = this.bars.slice();
        this.sorted_bar= this.sorted_bar.sort((a, b)=> a.bar_name > b.bar_name ?1 : a.bar_name === b.bar_name ? 0 :-1);  
    });
  
  }

  filterBy(prop: string){
    return this.sorted_bar.sort((a, b)=> a[prop] > b[prop] ?1 : a[prop] === b[prop] ? 0 :-1);
  }

  sortDefault() {
    this.sorted_bar= this.sorted_bar.sort((a, b)=> a.bar_name > b.bar_name ?1 : a.bar_name === b.bar_name ? 0 :-1);
  }
  ambienceArray(n){
    var arr = [];
    for (var i = 0; i < n; i++) {
        arr[i] = i+1;
    }
    return arr;
  }

  sortData(sort: Sort) {
    const data = this.bars.slice();
    if (!sort.active || sort.direction === '') {
      this.sorted_bar = data;
      return;
    }
    console.log(data);
    this.sorted_bar = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name': return compare(a.bar_name, b.bar_name, isAsc);
        case 'beer_on_tap_lowest': return compare(a.beer_on_tap_lowest, b.beer_on_tap_lowest, isAsc);
        case 'beer_bottle_lowest': return compare(a.beer_bottle_lowest, b.beer_bottle_lowest, isAsc);
        case 'beer_bucket_lowest': return compare(a.beer_bucket_lowest, b.beer_bucket_lowest, isAsc);
        case 'beer_tower_lowest': return compare(a.beer_tower_lowest, b.beer_tower_lowest, isAsc);
        case 'wine_glass_lowest': return compare(a.wine_glass_lowest, b.wine_glass_lowest, isAsc);
        case 'wine_bottle_lowest': return compare(a.beer_on_tap_lowest, b.beer_on_tap_lowest, isAsc);
        case 'whiskey_glass_lowest': return compare(a.whiskey_glass_lowest, b.whiskey_glass_lowest, isAsc);
        case 'whiskey_bottle_lowest': return compare(a.whiskey_bottle_lowest, b.whiskey_bottle_lowest, isAsc);
        case 'beer_cocktail_glass_lowest': return compare(a.cocktail_glass_lowest, b.cocktail_glass_lowest, isAsc);
     
        case 'beer_on_tap_average': return compare(a.beer_on_tap_average, b.beer_on_tap_average, isAsc);
        case 'beer_bottle_average': return compare(a.beer_bottle_average, b.beer_bottle_average, isAsc);
        case 'beer_bucket_average': return compare(a.beer_bucket_average, b.beer_bucket_average, isAsc);
        case 'beer_tower_average': return compare(a.beer_tower_average, b.beer_tower_average, isAsc);
        case 'wine_glass_average': return compare(a.wine_glass_average, b.wine_glass_average, isAsc);
        case 'wine_bottle_average': return compare(a.beer_on_tap_average, b.beer_on_tap_average, isAsc);
        case 'whiskey_glass_average': return compare(a.whiskey_glass_average, b.whiskey_glass_average, isAsc);
        case 'whiskey_bottle_average': return compare(a.whiskey_bottle_average, b.whiskey_bottle_average, isAsc);
        case 'beer_cocktail_glass_average': return compare(a.cocktail_glass_average, b.cocktail_glass_average, isAsc);

        case 'beer_on_tap_highest': return compare(a.beer_on_tap_highest, b.beer_on_tap_highest, isAsc);
        case 'beer_bottle_highest': return compare(a.beer_bottle_highest, b.beer_bottle_highest, isAsc);
        case 'beer_bucket_highest': return compare(a.beer_bucket_highest, b.beer_bucket_highest, isAsc);
        case 'beer_tower_highest': return compare(a.beer_tower_highest, b.beer_tower_highest, isAsc);
        case 'wine_glass_highest': return compare(a.wine_glass_highest, b.wine_glass_highest, isAsc);
        case 'wine_bottle_highest': return compare(a.beer_on_tap_highest, b.beer_on_tap_highest, isAsc);
        case 'whiskey_glass_highest': return compare(a.whiskey_glass_highest, b.whiskey_glass_highest, isAsc);
        case 'whiskey_bottle_highest': return compare(a.whiskey_bottle_highest, b.whiskey_bottle_highest, isAsc);
        case 'beer_cocktail_glass_highest': return compare(a.cocktail_glass_highest, b.cocktail_glass_highest, isAsc);

        //case 'ambience': return compare(a.ambience, b.ambience, isAsc);
        default: return 0;
      }
    });
  }

}

function compare(a: Number | string | String, b: Number | string | String, isAsc: boolean) {
  if (a == null) {
    return 1;
  } else if (b == null) {
    return -1;
  } else {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
}
