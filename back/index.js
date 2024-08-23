const express = require('express');
const app = express();
const port = 3000; // Define the port number
require('./config/dbConnection');
const { Grocery } = require('./models/grocery');
const cors =  require('cors');


// Middleware to parse JSON requests
app.use(cors({ origin: "*"})); // from any origin
app.use(express.json());


// Basic route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Define a route for fetching groceries (assuming you have a Grocery model)
app.get('/groceries', async (req, res) => {
    try {
        const groceries = await Grocery.find(); // Assuming Grocery is a Mongoose model
        res.json(groceries);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching groceries', error });
    }
});


// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
