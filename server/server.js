require('./config/config');

const express = require('express');
//const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();


// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))

// // parse application/json
// app.use(bodyParser.json())

app.use(express.json());
app.use(express.urlencoded({ extended: false }));




//configurarion global de rutas
app.use(require('./routes/index'));


mongoose.connect('mongodb://localhost:27017/cafe_db', (err, res) => {
    if (err) throw err;

    console.log('Base de datos ONLINE OK');
});

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT);
})