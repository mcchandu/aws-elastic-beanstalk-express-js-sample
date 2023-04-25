const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hey There, my project is done I am now tesing it'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
