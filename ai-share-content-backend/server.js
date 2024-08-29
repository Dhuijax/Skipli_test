const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const apiRoutes = require('./routes/api');
const cors = require('cors');

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use(cors({
    origin: 'http://localhost:3000',
  }));

app.use('/api', apiRoutes);

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('MongoDB connected');
        app.listen(5000, () => {
            console.log('Server is running on http://localhost:5000');
        });
    })
    .catch(err => console.error(err));