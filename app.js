const express = require('express');
const app = express();
const port = 3000;
const RoutesIndex = require('./routes/index');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/', RoutesIndex)

app.listen(port,() => {
    console.log(`${port} masuk`);
});