const express = require('express');
const path = require('path');
const port = 3030;
const app = express();



//* RECURSOS ESTÁTICOS

app.use(express.static('public'));


//* RUTAS

app.get('/', (req,res) => res.sendFile(path.resolve(__dirname, 'views', 'index.html')));
app.get('/register', (req,res) => res.sendFile(path.resolve(__dirname, 'views', 'register.html')));
app.get('/login', (req,res) => res.sendFile(path.resolve(__dirname, 'views', 'login.html')));

//* CONSOLE LOG

app.listen(port, () => console.log(`Server running on http://localhost:${port}/`));