const express = require('express')
const app = express()
const port = 3000;
app.use(express.static(__dirname + 'templates'));


app.listen(port, () => {
    console.log(`Escuchando servicio el el puerto ${ port }`);
});