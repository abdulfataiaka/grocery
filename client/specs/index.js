const Jasmine = require('jasmine');
require('@babel/register');

const jasmine = new Jasmine();

jasmine.loadConfigFile('client/specs/support/jasmine.json');

jasmine.loadConfig({
  oneFailurePerSpec: true,
});

jasmine.execute();
