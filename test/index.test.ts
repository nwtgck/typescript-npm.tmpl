import {hoge}  from '../lib';
import * as assert from 'power-assert';

describe('hoge', () => {
  it('should return the same value as string length', () => {
    assert.equal(hoge("hello"), 5);
  });
});
