const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const nunjucks = require('nunjucks');
const apiRoutes = require('./routes/api');
const app = express();


nunjucks.configure('views', {
  trimBlocks: true,
  express: app
});
app.use(helmet());
app.use(morgan('combined'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use('/', apiRoutes);

app.listen(5000, function() {
  console.log('listening at port 5000');
});