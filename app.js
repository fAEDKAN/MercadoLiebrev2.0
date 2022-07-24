const express = require('express');
const path = require('path');
const port = 3030;
const app = express();



//* RECURSOS ESTÁTICOS

app.use(express.static('public'));


//* RUTAS

app.get('/', (req,res) => res.sendFile(path.resolve(__dirname, 'views', 'index.html')));


//* CONSOLE LOG

app.listen(port, () => console.log(`Server running on http://localhost:${port}/`));