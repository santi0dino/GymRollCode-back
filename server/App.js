const express = require ('express');
const morgan = require('morgan');
const {connection} = require ('../db/connect');
const userRoutes = require ('../routes/user.routes');
const ClassesRoutes = require ('../routes/classes.routes');
const teachersRoutes = require ('../routes/teacher.routes');

//instanciando express
const app = express();

// Configura el registro de solicitudes utilizando Morgan en modo de desarrollo
app.use(morgan('dev'));

//MiddleWares
require('dotenv').config();
app.use(express.json());

//Definiendo puerto
const port = process.env.PORT;

//Definiendo rutas
app.use('user',userRoutes);
app.use('/classes', ClassesRoutes);
app.use('/teachers', teachersRoutes);

//Funcion para esuchar puerto
app.listen (port, () => {
    console.log(`Estamos escuchando el puerto: ${port}`);
})

//funcion para conectar a la base de datos
connection();