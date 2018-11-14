import path from 'path';
import express from 'express';
import morgan from 'morgan';
import webpack from 'webpack';
import bodyParser from 'body-parser';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from '../webpack/index.config';
import apiRouter from './routes';
import DBInitialize from './database';

const port = process.env.PORT || 9800;
const server = express();
const compiler = webpack(config);
const routes = apiRouter(express.Router());

//++ initialize database connection
DBInitialize();

//++ set server configurations
server.set('view engine', 'ejs');

//++ set middlewares to be used by server
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(express.static('public'));
server.use('/bower_components', express.static('bower_components'));

server.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
  historyApiFallback: true
}));

server.use(webpackHotMiddleware(compiler));
server.use(morgan('dev'));

server.use('/api', routes);

server.all('*', (req, res) => {
  res.render(path.join(__dirname, '../public', 'index'));
});

server.listen(port, (error) => {
  if (!error) console.log(`[*] Server started on port ${port}\n`);
  else console.log(`[!] Unable to start server on port ${port}\n`);
});
