const express = require('express');
const mongo = require('mongodb');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 3000;
const mongoose = require('mongoose');
const Bill = require('./bill.product');

const corsOptions = {
    origin: ['http://localhost:3000', 'http://localhost:5173'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
}

app.use(cors(corsOptions));
app.use(bodyParser.json());

mongoose.connect("mongodb://0.0.0.0:27017/")
    .then(() => {
        console.log("Connected to database!");
        app.listen(port, () => {
            console.log(`Server is running on port: ${port}`);
        });
    })
    .catch(() => {
        console.log("Connection failed!");
    });

app.post('/billsubmission', async (req, res) => {
    console.log(req.body);
    const { billID, amountCharge } = req.body;
    try {
        const bill = await Bill.find({ billID, amountCharge });

        if (bill) {
            return res.status(200).json({ message: 'Bill found!' });
        }
        else {
            return res.status(400).json({ message: 'Bill not found!' });
        }

    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ message: 'Server Error!' });
    }

});
