const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Bar = new Schema({

bar_name: {     type: String   },
beer_on_tap_lowest: {     type: Number   },
beer_bottle_lowest: {     type: Number   },
beer_bucket_lowest: {     type: Number   },
beer_tower_lowest: {     type: Number   },
wine_glass_lowest: {     type: Number   },
wine_bottle_lowest: {     type: Number   },
whiskey_glass_lowest: {     type: Number   },
whiskey_bottle_lowest: {     type: Number   },
cocktail_glass_lowest: {     type: Number   },
beer_on_tap_average: {     type: Number   },
beer_bottle_average: {     type: Number   },
beer_bucket_average: {     type: Number   },
beer_tower_average: {     type: Number   },
wine_glass_average: {     type: Number   },
wine_bottle_average: {     type: Number   },
whiskey_glass_average: {     type: Number   },
whiskey_bottle_average: {     type: Number   },
cocktail_glass_average: {     type: Number   },
beer_on_tap_highest: {     type: Number   },
beer_bottle_highest: {     type: Number   },
beer_bucket_highest: {     type: Number   },
beer_tower_highest: {     type: Number   },
wine_glass_highest: {     type: Number   },
wine_bottle_highest: {     type: Number   },
whiskey_glass_highest: {     type: Number   },
whiskey_bottle_highest: {     type: Number   },
cocktail_glass_highest: {     type: Number   },
ambience: {type: Number},
unique: {type: String},
postal_code: {     type: Number   },
region: {     type: String   }

},{
    collection: 'bar'
});

module.exports = mongoose.model('Bar', Bar);