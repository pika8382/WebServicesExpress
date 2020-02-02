const express = require('express')
const app = express();
const hbs = require("hbs");
require("./hbs/helpers");

const port = process.env.PORT || 3000;


app.use(express.static(__dirname + "/public"));
hbs.registerPartials(__dirname + "/views/partials");

app.set('view engine', 'hbs');

app.get('/home', (req, res) => {
    res.render("home", {
        nombre: "pika"
    });
});

app.get('/', (req, res) => {
    res.render("home", {
        nombre: "pika"
    });
});

app.get('/about', (req, res) => {
    res.render("about", {
        anio: new Date().getFullYear()
    });
})

app.listen(port, () => {
    console.log(`Escuchando ${port}`);
});