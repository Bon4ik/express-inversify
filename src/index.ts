import 'reflect-metadata';
import { InversifyExpressServer } from 'inversify-express-utils';
import * as bodyParser from 'body-parser';
import * as helmet from 'helmet';
import { container } from './helpers/ioc';

import './helpers/loader';

const server = new InversifyExpressServer(container);

server.setConfig((app) => {
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());
  app.use(helmet());
});

const app = server.build();
app.listen(3000);
console.log('Server started on port 3000 :)');

exports = module.exports = app;
