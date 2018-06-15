const express = require('express')
const app = express()
const hbs = require('hbs')
const port = process.env.PORT || 3000
require('./hbs/helpers/helpers')


app.use(express.static(__dirname + '/public'))

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');



app.get('/', function(req, res) {
    res.render('home.hbs', {
        nombre: 'Daniel',
        anio: new Date().getFullYear()
    })
})


app.get('/about', function(req, res) {
    res.render('about.hbs', {
        anio: new Date().getFullYear()
    })
})


app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
})