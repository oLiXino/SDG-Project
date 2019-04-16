import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BarService {

  uri = 'http://localhost:4000/bar';

  constructor(private http: HttpClient) { }

  addBar(bar_name, beer_on_tap_lowest, beer_bottle_lowest, beer_bucket_lowest, beer_tower_lowest, 
              wine_glass_lowest, wine_bottle_lowest, whiskey_glass_lowest, whiskey_bottle_lowest, cocktail_glass_lowest,
              beer_on_tap_average, beer_bottle_average, beer_bucket_average, beer_tower_average, wine_glass_average,
              wine_bottle_average, whiskey_glass_average, whiskey_bottle_average, cocktail_glass_average,
              beer_on_tap_highest, beer_bottle_highest, beer_bucket_highest, beer_tower_highest,
              wine_glass_highest, wine_bottle_highest, whiskey_glass_highest, whiskey_bottle_highest, cocktail_glass_highest,
              ambience, unique, postal_code, region) {
    const obj = {
      bar_name: bar_name,
      beer_on_tap_lowest: beer_on_tap_lowest,
      beer_bottle_lowest: beer_bottle_lowest,
      beer_bucket_lowest: beer_bucket_lowest,
      beer_tower_lowest: beer_tower_lowest,
      wine_glass_lowest: wine_glass_lowest,
      wine_bottle_lowest: wine_bottle_lowest,
      whiskey_glass_lowest: whiskey_glass_lowest,
      whiskey_bottle_lowest: whiskey_bottle_lowest,
      cocktail_glass_lowest: cocktail_glass_lowest,

      beer_on_tap_average: beer_on_tap_average,
      beer_bottle_average: beer_bottle_average,
      beer_bucket_average: beer_bucket_average,
      beer_tower_average: beer_tower_average,
      wine_glass_average: wine_glass_average,
      wine_bottle_average: wine_bottle_average,
      whiskey_glass_average: whiskey_glass_average,
      whiskey_bottle_average: whiskey_bottle_average,
      cocktail_glass_average: cocktail_glass_average,

      beer_on_tap_highest: beer_on_tap_highest,
      beer_bottle_highest: beer_bottle_highest,
      beer_bucket_highest: beer_bucket_highest,
      beer_tower_highest: beer_tower_highest,
      wine_glass_highest: wine_glass_highest,
      wine_bottle_highest: wine_bottle_highest,
      whiskey_glass_highest: whiskey_glass_highest,
      whiskey_bottle_highest: whiskey_bottle_highest,
      cocktail_glass_highest: cocktail_glass_highest,
      ambience: ambience,
      unique: unique,
      postal_code: postal_code,
      region: region
    };
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }

  getBar() {
    return this
           .http
           .get(`${this.uri}`);
  }

  editBar(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
    }
 
  deleteBar(id) {
      return this
                .http
                .get(`${this.uri}/delete/${id}`);
    }
  updateBar(bar_name, beer_on_tap_lowest, beer_bottle_lowest, beer_bucket_lowest, beer_tower_lowest, 
    wine_glass_lowest, wine_bottle_lowest, whiskey_glass_lowest, whiskey_bottle_lowest, cocktail_glass_lowest,
    beer_on_tap_average, beer_bottle_average, beer_bucket_average, beer_tower_average, wine_glass_average,
    wine_bottle_average, whiskey_glass_average, whiskey_bottle_average, cocktail_glass_average,
    beer_on_tap_highest, beer_bottle_highest, beer_bucket_highest, beer_tower_highest,
    wine_glass_highest, wine_bottle_highest, whiskey_glass_highest, whiskey_bottle_highest, cocktail_glass_highest,
    ambience, unique, postal_code, region, id) {

      const obj = {
        bar_name: bar_name,
        beer_on_tap_lowest: beer_on_tap_lowest,
        beer_bottle_lowest: beer_bottle_lowest,
        beer_bucket_lowest: beer_bucket_lowest,
        beer_tower_lowest: beer_tower_lowest,
        wine_glass_lowest: wine_glass_lowest,
        wine_bottle_lowest: wine_bottle_lowest,
        whiskey_glass_lowest: whiskey_glass_lowest,
        whiskey_bottle_lowest: whiskey_bottle_lowest,
        cocktail_glass_lowest: cocktail_glass_lowest,
  
        beer_on_tap_average: beer_on_tap_average,
        beer_bottle_average: beer_bottle_average,
        beer_bucket_average: beer_bucket_average,
        beer_tower_average: beer_tower_average,
        wine_glass_average: wine_glass_average,
        wine_bottle_average: wine_bottle_average,
        whiskey_glass_average: whiskey_glass_average,
        whiskey_bottle_average: whiskey_bottle_average,
        cocktail_glass_average: cocktail_glass_average,
  
        beer_on_tap_highest: beer_on_tap_highest,
        beer_bottle_highest: beer_bottle_highest,
        beer_bucket_highest: beer_bucket_highest,
        beer_tower_highest: beer_tower_highest,
        wine_glass_highest: wine_glass_highest,
        wine_bottle_highest: wine_bottle_highest,
        whiskey_glass_highest: whiskey_glass_highest,
        whiskey_bottle_highest: whiskey_bottle_highest,
        cocktail_glass_highest: cocktail_glass_highest,
        ambience: ambience,
        unique: unique,
        postal_code: postal_code,
        region: region
        };
      this
        .http
        .post(`${this.uri}/admin/update/${id}`, obj)
        .subscribe(res => console.log('Done'));
    }
}