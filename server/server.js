import bodyParser from 'body-parser';
import config from './config';
import express from 'express';
import routes from './routes';

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.render('index', {
    answer: 43
  });
});

app.use(routes);

app.listen(config.port, () => {
  console.info(`Running on ${config.port}`);
});