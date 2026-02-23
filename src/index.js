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



//ENDPOINT QUE SUMA 2 NUMEROS
app.post('/sumar', (req, res) => { //http://localhost:3000/sumar
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


//////////////////////////////////////////////////////////////////////////////////////////

//end point area triangulo 
app.post('/area-triangulo', (req, res) => {
    const { base, altura } = req.body;//se declaran los datos de entrada

    //validar que se hayan enviado los dos numeros que no esten vacios
    if(!base || !altura){
        return res.status(400).send({'error': 'Faltan datos para calcular el area'})
    }

    //sumar los numeros
    const resultado = (base * altura) / 2;

    //enviar el resultado al front
    res.send({ resultado });//se envia el resultado al front
});


//end point perimetro triangulo
app.post('/perimetro-triangulo', (req, res) => {
    const { lado1, lado2, lado3 } = req.body;//se declaran los datos de entrada

    //validar que se hayan enviado los tres lados que no esten vacios
    if(!lado1 || !lado2 || !lado3){
        return res.status(400).send({'error': 'Faltan datos para calcular el perimetro'})
    }

    //sumar los lados
    const resultado = lado1 + lado2 + lado3;

    //enviar el resultado al front
    res.send({ resultado });//se envia el resultado al front
});

//////////////////////////////////////////////////////////////////////////////////////////

//end point area cuadrado
app.post('/area-cuadrado', (req, res) => {
    const { lado } = req.body;//se declaran los datos de entrada

    //validar que se haya enviado el lado que no este vacio
    if(!lado){
        return res.status(400).send({'error': 'Faltan datos para calcular el area'})
    }

    //calcular el area
    const resultado = lado * lado;

    //enviar el resultado al front
    res.send({ resultado });//se envia el resultado al front
});


//end point perimetro cuadrado
app.post('/perimetro-cuadrado', (req, res) => {
    const { lado } = req.body;//se declaran los datos de entrada

    //validar que se haya enviado el lado que no este vacio
    if(!lado){
        return res.status(400).send({'error': 'Faltan datos para calcular el perimetro'})
    }

    //calcular el perimetro
    const resultado = lado * 4;

    //enviar el resultado al front
    res.send({ resultado });//se envia el resultado al front
});

//////////////////////////////////////////////////////////////////////////////////////////

//end point area circulo
// endpoint área círculo
app.post('/area-circulo', (req, res) => {
    const { radio } = req.body;
    if(!radio){
        return res.status(400).send({ error: 'Falta el dato radio' });
    }
    const resultado = Math.PI * radio * radio;
    res.send({ resultado });
});

// endpoint perímetro círculo
app.post('/perimetro-circulo', (req, res) => {
    const { radio } = req.body;
    if(!radio){
        return res.status(400).send({ error: 'Falta el dato radio' });
    }
    const resultado = 2 * Math.PI * radio;
    res.send({ resultado });
});
