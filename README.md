# gulp-xhtml

[![NPM version][npm-image]][npm-url]
[![NPM download][download-image]][download-url]
[![Build Status][travis-image]][travis-url]
[![Dependency Status][dependency-image]][dependency-url]
[![devDependency Status][devdependency-image]][devdependency-url]
[![Code Style][style-image]][style-url]

[npm-image]: https://badge.fury.io/js/gulp-xhtml.svg
[npm-url]: https://npmjs.org/package/gulp-xhtml
[download-image]: https://img.shields.io/npm/dm/gulp-xhtml.svg
[download-url]: https://npmjs.org/package/gulp-xhtml
[travis-image]: https://travis-ci.org/zce/gulp-xhtml.svg?branch=master
[travis-url]: https://travis-ci.org/zce/gulp-xhtml
[dependency-image]: https://david-dm.org/zce/gulp-xhtml/status.svg
[dependency-url]: https://david-dm.org/zce/gulp-xhtml
[devdependency-image]: https://david-dm.org/zce/gulp-xhtml/dev-status.svg
[devdependency-url]: https://david-dm.org/zce/gulp-xhtml?type=dev
[style-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg
[style-url]: http://standardjs.com/

> A node.js wrapper around xtemplate engine


## Install

```sh
$ npm install --save gulp gulp-xhtml
```


## Usage

demo.xtpl
```html
<p>{{ message }}</p>
```

demo.js

```js
const xTemplate = require('gulp-xhtml')

// callback
xTemplate.render(path.resolve(__dirname, 'demo.xtpl'), {
  message: 'hello world'
}, function (err, result) {
  // result => <p>hello world</p>
})

// or promise
xTemplate
  .render(path.resolve(__dirname, 'demo.xtpl'), { message: 'hello world' })
  .then(function (result) {
    // result => <p>hello world</p>
  })
  .catch(function (err) {
    // if err
  })
```


## API

### render(path, data[, options], callback)

#### path

Type: `string`

The path of template file.

#### data

Type: `object`

The template data.

#### options

##### extname

Type: `string`

##### strict

Type: `boolean`

##### catchError

Type: `boolean`

##### cache

Type: `boolean`

##### encoding

Type: `string`<br>
Default: `utf-8`

#### callback(err, result)

Type: `function`

Done callback


## License

[MIT](LICENSE) © [汪磊](http://github.com/zce)

