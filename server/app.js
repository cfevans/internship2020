const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
// const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');
const path = require('path')


const app = express();


app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


app.set('port',3000)


app.listen(app.get('port'), function () {
   console.log('info', `Server started on ${app.get('port')}`);
});

app.use('/', require('./sample_route'))

app.use('/html', require('./handlebars_route'))