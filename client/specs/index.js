const Jasmine = require('jasmine');
const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

require('@babel/register');

const jasmine = new Jasmine();

jasmine.loadConfigFile('client/specs/support/jasmine.json');

jasmine.loadConfig({
  oneFailurePerSpec: true,
});

Enzyme.configure({ adapter: new Adapter() });
jasmine.execute();
