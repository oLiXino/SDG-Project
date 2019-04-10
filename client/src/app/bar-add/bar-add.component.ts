import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { BarService } from '../bar.service';

@Component({
  selector: 'app-bar-add',
  templateUrl: './bar-add.component.html',
  styleUrls: ['./bar-add.component.css']
})
export class BarAddComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder, private bs: BarService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      bar_name: ['', Validators.required],
      beer_on_tap_lowest: [''],
      beer_bottle_lowest: ['' ],
      beer_bucket_lowest: ['' ],
      beer_tower_lowest: ['' ],
      wine_glass_lowest: [''],
      wine_bottle_lowest: ['' ],
      whiskey_glass_lowest: ['' ],
      whiskey_bottle_lowest: ['' ],
      cocktail_glass_lowest: ['' ],
      beer_on_tap_average: ['' ],
      beer_bottle_average: ['' ],
      beer_bucket_average: ['' ],
      beer_tower_average: ['' ],
      wine_glass_average: ['' ],
      wine_bottle_average: ['' ],
      whiskey_glass_average: ['' ],
      whiskey_bottle_average: ['' ],
      cocktail_glass_average: ['' ],
      beer_on_tap_highest: ['' ],
      beer_bottle_highest: ['' ],
      beer_bucket_highest: ['' ],
      beer_tower_highest: ['' ],
      wine_glass_highest: ['' ],
      wine_bottle_highest: ['' ],
      whiskey_glass_highest: ['' ],
      whiskey_bottle_highest: ['' ],
      cocktail_glass_highest: ['' ],
      ambience: ['', Validators.required],
      unique: ['', Validators.required],
      postal_code: ['', Validators.required ],
      region: ['', Validators.required ]
    });
  }

  addBar(bar_name, beer_on_tap_lowest, beer_bottle_lowest, beer_bucket_lowest, beer_tower_lowest, 
    wine_glass_lowest, wine_bottle_lowest, whiskey_glass_lowest, whiskey_bottle_lowest, cocktail_glass_lowest,
    beer_on_tap_average, beer_bottle_average, beer_bucket_average, beer_tower_average, wine_glass_average,
    wine_bottle_average, whiskey_glass_average, whiskey_bottle_average, cocktail_glass_average,
    beer_on_tap_highest, beer_bottle_highest, beer_bucket_highest, beer_tower_highest,
    wine_glass_highest, wine_bottle_highest, whiskey_glass_highest, whiskey_bottle_highest, cocktail_glass_highest, 
    ambience, unique, postal_code, region) {
        console.log(beer_bottle_lowest);
        this.bs.addBar(bar_name, beer_on_tap_lowest, beer_bottle_lowest, beer_bucket_lowest, beer_tower_lowest, 
          wine_glass_lowest, wine_bottle_lowest, whiskey_glass_lowest, whiskey_bottle_lowest, cocktail_glass_lowest,
          beer_on_tap_average, beer_bottle_average, beer_bucket_average, beer_tower_average, wine_glass_average,
          wine_bottle_average, whiskey_glass_average, whiskey_bottle_average, cocktail_glass_average,
          beer_on_tap_highest, beer_bottle_highest, beer_bucket_highest, beer_tower_highest,
          wine_glass_highest, wine_bottle_highest, whiskey_glass_highest, whiskey_bottle_highest, cocktail_glass_highest,
          ambience, unique, postal_code, region);

          document.location.reload()
    }
  ngOnInit() {
  }

}