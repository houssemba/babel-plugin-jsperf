/*eslint no-undef: "error"*/
/*eslint-env node*/
const pluginTester = require('babel-plugin-tester');
const jsperfPlugin = require('../src/index');

pluginTester({
  plugin: jsperfPlugin,
  snapshot: true,
  tests: [{
    title: 'function without return statement',
    code: `
      function todo() {
        console.log('toto');
      }
    `
  }, {
    title: 'function with return statement',
    code: `
      function foo() {
        const bar = 'bar';
        return bar;
      }
    `
  }, {
    title: 'arrow function',
    code: `
      const foo = () => 'test';
    `
  }, {
    title: 'anonymous function',
    code: `
      (function(){
          console.log('anonymous function');
      }())
    `
  }, {
    title: 'clazz method',
    code: `
      class clazz {
        method() {
          console.log('class method !');
        }
      }
    `
  }]
});
