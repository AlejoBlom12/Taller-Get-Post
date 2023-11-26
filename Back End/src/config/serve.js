
const express = require('express')
const app = express();
const cors = require('cors');
const autosRoutes = require('../routes/autos.routes')

const port = 3000;

app.use(cors());
app.use(express.json());
app.use(autosRoutes)

app.set("port", process.env.PORT || port);

module.exports = app;
