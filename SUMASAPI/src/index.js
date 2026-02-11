const express = require('express');
const app = express();
const morgan = require('morgan');//Muestra las solicitudes HTTP en la consola
const cors = require('cors');//Permite conexiones externas


//configuracion del servidor puerto 3000

app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);//Configura el formato de salida JSON con una sangría de 2 espacios


app.use(morgan('dev'));//Usa morgan para mostrar las solicitudes HTTP en la consola

app.listen(app.get('port'), () => {
    console.log("SERVIDOR EN EL PUERTO 3000");
});

app.use(express.json());//Permite que el servidor entienda las solicitudes con formato JSON
app.use(cors());//Permite conexiones externas

app.get('/', (req, res) => {
    res.json({
        "Title": "Hola Mundo"
    });
});

//comentario ejemplo
app.post('/sumar', (req, res) => {
    const { num1, num2 } = req.body;//se declaran los datos de entrada 
    
    //validar que se hayan enviado los dos numeros que no esten vacios
    if(!num1 || !num2){
        return res.status(400).json({'error': 'Faltan numeros para sumar'})
    }

    //Sumar los numeros
    const resultado = num1 + num2;

    //Enviar el resultado al front
    res.send({ resultado });//se envia el resultado al front
});

