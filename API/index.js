const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');



// Midelware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());




// Ruta principal
app.get('/', (req, res) => {
    res.send('Main Page');
});



// Iniciar l'app a un port on escoltarà
app.listen(3000, () => {
    console.log('started on 3000')
});


app.use(require('./controllers/partidas.controller'));
app.use(require('./controllers/jugador.controller'));
app.use(require('./controllers/nave.controller'));
app.use(require('./controllers/inventario.controller'));