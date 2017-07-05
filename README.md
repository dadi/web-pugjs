<img src="https://dadi.tech/assets/products/dadi-web-full.png" alt="DADI Web" height="65"/>

## Pug.js engine interface

[![npm (scoped)](https://img.shields.io/npm/v/@dadi/web-pugjs.svg?maxAge=10800&style=flat-square)](https://www.npmjs.com/package/@dadi/web-pugjs)
[![coverage](https://img.shields.io/badge/coverage-57%25-red.svg?style=flat?style=flat-square)](https://github.com/dadi/web-pugjs)
[![Build Status](https://travis-ci.org/dadi/web-pugjs.svg?branch=master)](https://travis-ci.org/dadi/web-pugjs)
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)

This module allows [Dust.js](https://pugjs.org) templates to be used with [DADI Web](https://github.com/dadi/web).

## Installation

- Add this module as a dependency:

   ```
   npm install @dadi/web-pugjs --save
   ```

- Include it in the `engines` array passed to Web:

   ```npm
   require('@dadi/web')({
     engines: [
       require('@dadi/web-pugjs')
     ]
   })
   ```