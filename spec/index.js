const Jasmine = require('jasmine');
const jasmine = new Jasmine();

jasmine.loadConfigFile('spec/support/jasmine.json');

jasmine.loadConfig({
  oneFailurePerSpec: true
});

jasmine.execute();
