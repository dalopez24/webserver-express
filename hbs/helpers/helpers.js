const hbs = require('hbs')


hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear()
})

hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split(' ')

    palabras.forEach((element, id) => {
        palabras[id] = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase()
    });

    return palabras.join(' ')
})