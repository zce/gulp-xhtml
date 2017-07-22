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

> A gulp plugin for compiling xTemplate templates.

## Install

```sh
# npm
$ npm install gulp gulp-xhtml --save-dev
# or yarn
$ yarn add gulp gulp-xhtml -D
```

## Usage

demo.xtpl
```html
<p>{{ message }}</p>
```

gulpfile.js

```js
var xhtml = require('gulp-xhtml');

gulp.task('views', () => {
  return gulp.src('views/*.xtpl')
    .pipe(xhtml())
    .pipe(gulp.dest('dist'))
});
```

## License

[MIT](LICENSE) © [汪磊](http://github.com/zce)

