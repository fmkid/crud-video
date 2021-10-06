// const express = require('express');
// const morgan = require('morgan');
// const cors = require('cors');
// const path = require('path');
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';

const app = express();

// Conexión base de datos
const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/myac';
const options = { useNewUrlParser: true, useUnifiedTopology: true };
// Or using promises
mongoose.connect(uri, options).then(
    /** ready to use. The `mongoose.connect()` promise resolves to 
   mongoose instance. */
    () => { console.log('Conectado a DB') },
    /** handle initial connection error */
    err => { console.log(err) }
);

// Middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use('/api', require('./routes/mascota'));

// Middleware para Vue.js router modo history
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

//Puerto
app.set('puerto', process.env.PORT || 3000);

app.listen(app.get('puerto'), function () {
    console.log('Servidor escuchando por el puerto ' + app.get('puerto'));
})