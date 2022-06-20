// Importa o módulo express para esse arquivo
const express = require("express");
const { url } = require("inspector");
// Instancia uma referência do express no projeto
const app = express();
const port = process.env.PORT || 3000; // Const para armanezar a porta do servidor
app.set("view engine", "ejs");
const path = require("path");
app.use(express.urlencoded());


// Rota principal que recebe uma função de callback que recebe dois parametros: 
// req de requisição
// res de resposta
//app.get("/", function (req, res) {
  //res.send("Hello World"); 
//});

// Substituição de function por arrow function
//app.get("/teste-em-pt", (req, res) => {
  //res.send("Olá Mundo");
//});

//app.get("/index", (req, res) => {
    //res.render("index"); // Nome do arquivo, o EJS já busca dentro da pasta views.
  //});

// Adicionando a const port e uma arow function de callback para mostrar no console que o servidor está rodando.


app.use(express.static(path.join(__dirname, "public")));

// Liga o servidor na porta 3000
//app.listen(3000);


app.get("/", (req, res) => {
    res.render("index");
});

app.get("/produtos", (req, res) => {
    res.render("products")
})

app.get("/contato", (req, res) => {
    res.render("blog")
})

app.get("/palmitoPicado", (req, res) => {
    res.render("single-product")
})

app.get("/palmitoRodela", (req, res) => {
  res.render("single-product-2")
})

app.get("/palmitoTolete", (req, res) => {
  res.render("single-product-3")
})

app.get("/quemSomos", (req, res) => {
  res.render("quemSomos")
})

app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));
