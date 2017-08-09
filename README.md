<img src="https://dadi.tech/assets/products/dadi-web-full.png" alt="DADI Web" height="65"/>

## Pug.js engine interface

[![npm (scoped)](https://img.shields.io/npm/v/@dadi/web-pugjs.svg?maxAge=10800&style=flat-square)](https://www.npmjs.com/package/@dadi/web-pugjs)
[![coverage](https://img.shields.io/badge/coverage-78%25-yellow.svg?style=flat?style=flat-square)](https://github.com/dadi/web-pugjs)
[![Build Status](https://travis-ci.org/dadi/web-pugjs.svg?branch=master)](https://travis-ci.org/dadi/web-pugjs)
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)

This module allows [Pug.js](https://pugjs.org) templates to be used with [DADI Web](https://github.com/dadi/web).

## Installation

- Add this module as a dependency:

   ```
   npm install @dadi/web-pugjs --save
   ```

- Include it in the `engines` array passed to Web:

   ```js
   require('@dadi/web')({
     engines: [
       require('@dadi/web-pugjs')
     ]
   })
   ```

## Usage

### Include paths

Partials can be included using the `include` keyword and paths to the included files can be absolute or relative (see [Pug's documentation](https://pugjs.org/language/includes.html)).

The base directory for absolute paths is the `pages/` directory. Take the following directory tree.

```
pages/
|_ partials/
|_ |_ common/
|_ |_ |_ header.pug
|_ |_ contact-info.pug
|_ home.pug
```

To include `header.pug` from `contact-info.pug`, you can do:

```pug
//- Absolute path
include /partials/common/header.pug

//- Relative path
include common/header.pug
```

### Helper functions

Add a DADI Web configuration setting for `helpers`, pointing to a directory containing helper files. Each `.js` helper file will be added as a property to template locals for use within templates.

#### Configuration

```
  engines: {
    pug: {
      paths: {
        helpers: 'test/workspace/helpers'
      }
    }
  }
```

#### Directory structure

```
helpers/
|_ trim.js
pages/
|_ partials/
|_ |_ common/
|_ |_ |_ header.pug
|_ |_ contact-info.pug
|_ home.pug
```

#### Locals

The function is added to the template locals, along with data objects:

```
{
  products: [
    { name: 'The Old Man and the Sea' }
  ],
  trim: [Function]
}
```

#### Usage

Use the function in templates like so:

```
h1= trim(product.name)
```

