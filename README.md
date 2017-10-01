# babel-plugin-tester

[![Build Status](https://travis-ci.org/houssemba/babel-plugin-jsperf.svg?branch=master)](https://travis-ci.org/houssemba/babel-plugin-jsperf)
[![codecov](https://codecov.io/gh/houssemba/babel-plugin-jsperf/branch/master/graph/badge.svg)](https://codecov.io/gh/houssemba/babel-plugin-jsperf)
[![Greenkeeper badge](https://badges.greenkeeper.io/houssemba/babel-plugin-jsperf.svg)](https://greenkeeper.io/)

## Installation

```
npm install --save-dev babel-plugin-jsperf
```

## Usage

## Example

```javascript
function foo() {
  const bar = 'bar';
  return bar;
}
```
      ↓ ↓ ↓ ↓ ↓ ↓
```javascript
function foo() {
  console.time('foo');
  const bar = 'bar';
  var _returnValue = bar;
  console.timeEnd('foo');
  return _returnValue;
}
```
