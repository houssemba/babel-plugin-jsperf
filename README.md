# babel-plugin-jsperf
> an easy way to benchmark your javascript code

[![Build Status](https://travis-ci.org/houssemba/babel-plugin-jsperf.svg?branch=master)](https://travis-ci.org/houssemba/babel-plugin-jsperf)
[![codecov](https://codecov.io/gh/houssemba/babel-plugin-jsperf/branch/master/graph/badge.svg)](https://codecov.io/gh/houssemba/babel-plugin-jsperf)
[![Known Vulnerabilities](https://snyk.io/test/github/houssemba/babel-plugin-jsperf/badge.svg?targetFile=package.json)](https://snyk.io/test/github/houssemba/babel-plugin-jsperf?targetFile=package.json)  
## Installation

```
npm install --save-dev babel-plugin-jsperf
```

## Usage

### `.babelrc`

**.babelrc**

```json
{
  "plugins": ["jsperf"]
}
```

### CLI

```sh
babel --plugins jsperf code.js -o out.js
```

## Examples

```javascript
// jsperf
function todo() {
  console.log('toto');
}
```

↓ ↓ ↓ ↓ ↓ ↓

```javascript
// jsperf
function todo() {
  console.time('todo');
  console.log('toto');
  console.timeEnd('todo');
}
```
---

```javascript
const foo = /* jsperf */ () => 'test';
```

↓ ↓ ↓ ↓ ↓ ↓

```javascript
const foo = /* jsperf */function () {
  console.time('foo');
  var _returnValue = 'test';
  console.timeEnd('foo');
  return _returnValue;
};
```
---

```javascript
class clazz {
  // jsperf
  method() {
    console.log('class method !');
  }
}
```

↓ ↓ ↓ ↓ ↓ ↓

```javascript
class clazz {
  // jsperf
  method() {
    console.time('function2');
    console.log('class method !');
    console.timeEnd('function2');
  }
}
```
---

```javascript
// jsperf
function foo() {
  const bar = 'bar';
  return bar;
}
```

↓ ↓ ↓ ↓ ↓ ↓

```javascript
// jsperf
function foo() {
  console.time('foo');
  const bar = 'bar';
  var _returnValue = bar;
  console.timeEnd('foo');
  return _returnValue;
}
```
