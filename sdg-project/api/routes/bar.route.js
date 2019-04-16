const express = require('express');
const app = express();
const barRoutes = express.Router();

// Require Bar model in our routes module
let Bar = require('../models/Bar');

// Defined store route
barRoutes.route('/add').post(function (req, res) {
  let bar = new Bar(req.body);
  bar.save()
    .then(bar => {
      res.status(200).json({'bar': 'bar in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
barRoutes.route('/').get(function (req, res) {
    Bar.find(function (err, bares){
    if(err){
      console.log(err);
    }
    else {
      res.json(bares);
    }
  });
});

// Defined edit route
barRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Bar.findById(id, function (err, bar){
      res.json(bar);
  });
});

//  Defined update route
barRoutes.route('/admin/update/:id').post(function (req, res) {
    Bar.findById(req.params.id, function(err, bar, next) {
    if (!bar)
      return next(new Error('Could not load Document'));
    else {
        bar.bar_name = req.body.bar_name;
        bar.beer_on_tap_lowest = req.body.beer_on_tap_lowest;
        bar.beer_bottle_lowest = req.body.beer_bottle_lowest;
        bar.beer_bucket_lowest = req.body.beer_bucket_lowest;
        bar.beer_tower_lowest = req.body.beer_tower_lowest;
        bar.wine_glass_lowest = req.body.wine_glass_lowest;
        bar.wine_bottle_lowest = req.body.wine_bottle_lowest;
        bar.whiskey_glass_lowest = req.body.whiskey_glass_lowest;
        bar.whiskey_bottle_lowest = req.body.whiskey_bottle_lowest;
        bar.cocktail_glass_lowest = req.body.cocktail_glass_lowest;

        bar.beer_on_tap_average = req.body.beer_on_tap_average;
        bar.beer_bottle_average = req.body.beer_bottle_average;
        bar.beer_bucket_average = req.body.beer_bucket_average;
        bar.beer_tower_average = req.body.beer_tower_average;
        bar.wine_glass_average = req.body.wine_glass_average;
        bar.wine_bottle_average = req.body.wine_bottle_average;
        bar.whiskey_glass_average = req.body.whiskey_glass_average;
        bar.whiskey_bottle_average = req.body.whiskey_bottle_average;
        bar.cocktail_glass_average = req.body.cocktail_glass_average;

        bar.beer_on_tap_highest = req.body.beer_on_tap_highest;
        bar.beer_bottle_highest = req.body.beer_bottle_highest;
        bar.beer_bucket_highest = req.body.beer_bucket_highest;
        bar.beer_tower_highest = req.body.beer_tower_highest;
        bar.wine_glass_highest = req.body.wine_glass_highest;
        bar.wine_bottle_highest = req.body.wine_bottle_highest;
        bar.whiskey_glass_highest = req.body.whiskey_glass_highest;
        bar.whiskey_bottle_highest = req.body.whiskey_bottle_highest;
        bar.cocktail_glass_highest = req.body.cocktail_glass_highest;
        bar.ambience = req.body.ambience;
        bar.unique = req.body.unique;
        bar.postal_code = req.body.postal_code;
        bar.region = req.body.region;
        bar.save().then(bar => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
barRoutes.route('/delete/:id').get(function (req, res) {
    Bar.findByIdAndRemove({_id: req.params.id}, function(err, bar){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = barRoutes;