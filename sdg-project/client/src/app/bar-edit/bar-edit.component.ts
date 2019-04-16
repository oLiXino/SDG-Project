import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { BarService } from '../bar.service';

@Component({
  selector: 'app-bar-edit',
  templateUrl: './bar-edit.component.html',
  styleUrls: ['./bar-edit.component.css']
})
export class BarEditComponent implements OnInit {

  bar: any = {};
  angForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private bs: BarService,
    private fb: FormBuilder) {
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
      ambience: [''],
      unique: [''],
      postal_code: ['', Validators.required ],
      region: ['', Validators.required ]
      });
    }

  updateBar(bar_name, beer_on_tap_lowest, beer_bottle_lowest, beer_bucket_lowest, beer_tower_lowest, 
    wine_glass_lowest, wine_bottle_lowest, whiskey_glass_lowest, whiskey_bottle_lowest, cocktail_glass_lowest,
    beer_on_tap_average, beer_bottle_average, beer_bucket_average, beer_tower_average, wine_glass_average,
    wine_bottle_average, whiskey_glass_average, whiskey_bottle_average, cocktail_glass_average,
    beer_on_tap_highest, beer_bottle_highest, beer_bucket_highest, beer_tower_highest,
    wine_glass_highest, wine_bottle_highest, whiskey_glass_highest, whiskey_bottle_highest, cocktail_glass_highest,
    ambience, unique, postal_code, region) {
      this.route.params.subscribe(params => {
         this.bs.updateBar(bar_name, beer_on_tap_lowest, beer_bottle_lowest, beer_bucket_lowest, beer_tower_lowest, 
          wine_glass_lowest, wine_bottle_lowest, whiskey_glass_lowest, whiskey_bottle_lowest, cocktail_glass_lowest,
          beer_on_tap_average, beer_bottle_average, beer_bucket_average, beer_tower_average, wine_glass_average,
          wine_bottle_average, whiskey_glass_average, whiskey_bottle_average, cocktail_glass_average,
          beer_on_tap_highest, beer_bottle_highest, beer_bucket_highest, beer_tower_highest,
          wine_glass_highest, wine_bottle_highest, whiskey_glass_highest, whiskey_bottle_highest, cocktail_glass_highest,
          ambience, unique, postal_code, region, params['id']);
         this.router.navigate(['bar/admin']);
   });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
        this.bs.editBar(params['id']).subscribe(res => {
          this.bar = res;
      });
    });
  }
}