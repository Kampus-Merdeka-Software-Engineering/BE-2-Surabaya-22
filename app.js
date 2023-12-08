require('dotenv').config();
const express = require('express');
const cors = require('cors');

const router = express.Router();
const app = express();

app.use(cors());

const consumentRoutes = require('./routes/consument');
const menuRoutes = require('./routes/menu');

app.use(consumentRoutes);
app.use(menuRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`)
});