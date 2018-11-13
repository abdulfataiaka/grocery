const summer = require('./test.fixture');

describe('Sum function', function() {
  it('Should output 10 for the sum of 6 and 4', function() {
    expect(summer(6, 4)).toBe(10);
  });
});
