const babel = require('babel-core');
const plugin = require('../src');

var example = `
var foo = 1;
if (foo) console.log(foo);
function toto() {
  console.log('toto');
}

toto();
`;

it('works', () => {
  const {code} = babel.transform(example, {plugins: [plugin]});
  expect(code).toMatchSnapshot();
});
