import { helloWorld } from './index';

describe('Hello world', () => {
  it('renders hello world string', () => {
    expect(helloWorld()).toEqual('Hello World!');
  });
});
