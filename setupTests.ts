
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';

import { server } from './src/testing/msw-server';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

// warn is noisy and hard to remove
// not needed for test debug as we move to mocking redux not the network
if (process.env.NODE_ENV === 'test') {
  // eslint-disable-next-line no-console
  console.warn = () => {};
}
