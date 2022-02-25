// Fetch errors
import 'cross-fetch/polyfill';
import '@testing-library/jest-native/extend-expect';
import { server } from '../mocks/server';
import AbortController from 'abort-controller';

(global as any).AbortController = AbortController;

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
