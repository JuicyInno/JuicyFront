import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { globalHandlers } from './handlers';

const server = setupServer(...globalHandlers);

export { server, rest };
