const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');


// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Suman'
    })
})
// line 13 - index ref to index.hbs

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        name: 'Suman Kumar',
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        message: 'This is node, and you are using express.js',
        title: 'Help',
        name: 'Suman Kumar'
    })
})

// console.log(__dirname);
// console.log(path.join(__dirname, '../public'));

// app.get('', (req, res) => {
//     res.send('<h1>Hello express!</h1>')
// })

// app.get('/help', (req, res) => {
//     res.send({
//         name: 'suman',
//         designation: 'Software Engineer'
//     })
// })

// app.get('/about', (req, res) => {
//     res.send('<h1> About </h1>')
// })



app.listen(3000, () => {
    console.log('Server is up on port 3000.');
})
