import express from 'express';
import config from './config';
import router from './api/routes';

const server = express();

server.set('view engine', 'ejs'); // simple template engine for serverside rendered html
//todo: perhaps replace ejs with moustache. ejs templates are in the views folder

import './reactRenderer';
server.get('/', (req, res) => {
  res.render('index', {
    initialContent: '...'
  }); // render the template index
});

server.use('/api', router);
server.use(express.static('public')); // serve static assets

server.listen(config.port, config.host, () => {
  console.info('Express- listening on port', config.port);
});
