# babel-plugin-jsperf
> an easy way to benchmark your javascript code

[![Build Status](https://travis-ci.org/houssemba/babel-plugin-jsperf.svg?branch=master)](https://travis-ci.org/houssemba/babel-plugin-jsperf)
[![codecov](https://codecov.io/gh/houssemba/babel-plugin-jsperf/branch/master/graph/badge.svg)](https://codecov.io/gh/houssemba/babel-plugin-jsperf)
[![Greenkeeper badge](https://badges.greenkeeper.io/houssemba/babel-plugin-jsperf.svg)](https://greenkeeper.io/)

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
