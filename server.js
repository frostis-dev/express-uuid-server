const express = require('express');
const {v4: uuidv4} = require('uuid');
const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { uuid: uuidv4() });
});

app.listen(3000);