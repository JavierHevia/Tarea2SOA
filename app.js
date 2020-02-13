// npm run dev
var express = require('express')
var app = express()

var bodyParser = require('body-parser')
var path = require('path') // para llamar paginas ya creadas.

app.use(express.static(__dirname + '/public/')) // jala mi index por default
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ limit: '10mb' }))

app.get('/', function (req, res) { // ruta predefinida
  res.send('Hola Mundo!')
})

app.post('/Pedido', function (req, res) {
  console.log('Bienvenido al servicio de SERVICIO DE CROWDSOURCING DE COMIDA A DOMICILIO')
  console.log('.')
  console.log('..')
  console.log('...')
  // recibo los datos del form y los guardo en variables para mandarlos como parametros por la url
  var Restaurante = req.body.r2
  var menu = req.body.m2
  var bebida = req.body.b2

  console.log('Pedido realizado con éxito')
  console.log('...')
  console.log('..')
  console.log('.')
  // mando a llamar a mi get y le mando los parametros
  res.redirect('/recepcionOrdenes?restaurante=' + Restaurante + '&menu=' + menu + '&bebida=' + bebida)
})

app.get('/recepcionOrdenes', function (req, res) {
  // mando a llamar al html de recepciones de ordenes por medio de un get
  res.sendFile(path.join(__dirname + '/public/RecepcionOrdenes.html'))
})

app.post('/EnviarARepartido', function (req, res) {
  //  guardo el dato de mi form y se lo mando como parametro al get de enviar repartidor
  var dato = req.body.datosenviar
  console.log('.')
  console.log('..')
  console.log('...')
  console.log('Pedido enviado al repartido con éxito')
  console.log('...')
  console.log('..')
  console.log('.')
  res.redirect('/EnviarARepartido2?datos=' + dato)
})

app.get('/EnviarARepartido2', function (req, res) {
  // mando a llamar por medio de un get a mi pagina de servicio de entrega
  res.sendFile(path.join(__dirname + '/public/ServicioEntrega.html'))
})

app.post('/PedidoEnviado', function (req, res) {
  // hago el envio del pedido y regreso a la pagina index
  console.log('.')
  console.log('..')
  console.log('...')
  console.log('Pedido enviado a su casa')
  console.log('Gracias por utilizar este servicio')
  console.log('...')
  console.log('..')
  console.log('.')
  res.sendFile(path.join(__dirname + '/public/index.html'))
})

app.listen(3000, function () {
  console.log('Trabajando................... http://localhost:3000/')
})
