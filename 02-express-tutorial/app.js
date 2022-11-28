// example 1
// const express = require('express');
// const path = require('path');

// const app = express();

// //setup static files and middleware
// app.use(express.static('./public'));

// app.get('/', (req, res) => {
//     console.log("user hit the server");
//     res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
// });

// app.get('/about', (req, res) => {
//     res.status(200).send("about page")
// })

// app.all('*', (req, res) => {
//     res.status(404).send("<h1>resource not found </h1>")
// })

// app.listen(5000, () => {
//     console.log("Server is listening on port 5000")
// })


// example 2

const express = require('express');
const app = express();
const {products} = require('./data');

app.get('/', (req, res)=> {
    res.json(products)
})

app.listen(5000, ()=> {
    console.log('server listening on port 5000'); 
})