const express = require('express')
const app = express()
const port = 3000

app.use(express.static(__dirname + '/public'));

/*
//mysql
var mysql = require('mysql'); 
var conexao = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456789",
  database: "tabeladb"
});

conexao.connect(function(err) {
    if (err) throw err;
    console.log("Banco de Dados Conectado");
});

const Elemento = require("./model/Elemento")
const Experimento = require("./model/Elemento")
const Experimentos_has_Elementos = require("./model/Elemento")


app.get('/elementos', function(req, res) {
    var elemento = new Elemento();
    
    elemento.listar(conexao, function(result) {
      res.json(JSON.stringify(result));
    });
  });
*/
app.listen(port, function(){
    console.log("Servidor no ar - Porta: 3000!")
});

pages =__dirname + '/public/views'

app.get('/', function(req, res){
    res.sendFile(pages + '/home.html');
});


