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
      // jsperf
      function todo() {
        console.log('toto');
      }
    `
  }, {
    title: 'function with return statement',
    code: `
      // jsperf
      function foo() {
        const bar = 'bar';
        return bar;
      }
    `
  }, {
    title: 'arrow function',
    code: `
      const foo = /* jsperf */ () => 'test';
    `
  }, {
    title: 'clazz method',
    code: `
      class clazz {
        // jsperf
        method() {
          console.log('class method !');
        }
      }
    `
  }, {
    title: 'function without comment',
    code: `
      function fun() {
         console.log('Do not touch !');
      }
    `,
    snapshot: false
  }]
});
