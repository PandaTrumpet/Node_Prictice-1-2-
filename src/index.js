import { initMongoDB } from './db/initiMongoDB.js';
import { setupServer } from './server.js';

const bootstrap = async () => {
  await initMongoDB();
  setupServer();
};
bootstrap();
