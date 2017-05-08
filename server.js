import config from './config';
import express from 'express';
import apiRouter from './api/routes';
import serverRender from './reactRenderer';

const server = express();

server.set('view engine', 'ejs'); // simple template engine for serverside rendered html

server.get(['/', '/product/:productId'],(req, res) => {
  serverRender()
    .then(({ initialMarkup, initialData }) => {
      res.render('index', {
        initialMarkup,
        initialData
      });
    })
    .catch(console.error);
});

server.use('/api', apiRouter);
server.use(express.static('public'));

server.listen(config.port, config.host, () => {
  console.info('Express listening on port', config.port);
});
