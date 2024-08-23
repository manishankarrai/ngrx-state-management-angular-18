const mongoose = require('mongoose');

// Define the schema for a grocery item
const GrocerySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    }
});

// Create the model from the schema
const Grocery = mongoose.model('Grocery', GrocerySchema);

module.exports ={ Grocery };
