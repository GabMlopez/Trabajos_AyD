const port = 3011;
const express = require("express");
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const videogamesRoutes = require('./Routes/videogameRoutes');

app.use("/videogameStore",videogamesRoutes);

app.listen(port,() => console.log("System Running in --> "+port));