const Jasmine = require('jasmine');
const jasmine = new Jasmine();

jasmine.loadConfigFile('client/specs/support/jasmine.json');

jasmine.loadConfig({
  oneFailurePerSpec: true
});

jasmine.execute();
