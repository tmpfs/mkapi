Table of Contents
=================

* [Markdown API](#markdown-api)
  * [Install](#install)
  * [Usage](#usage)
  * [API](#api)
    * [concat](#concat)
    * [print](#print)
    * [parse](#parse)
  * [Developer](#developer)
    * [Test](#test)
    * [Cover](#cover)
    * [Lint](#lint)
    * [Clean](#clean)
    * [Readme](#readme)

Markdown API
============

[<img src="https://travis-ci.org/tmpfs/mdapi.svg?v=2" alt="Build Status">](https://travis-ci.org/tmpfs/mdapi)
[<img src="http://img.shields.io/npm/v/mdapi.svg?v=2" alt="npm version">](https://npmjs.org/package/mdapi)
[<img src="https://coveralls.io/repos/tmpfs/mdapi/badge.svg?branch=master&service=github&v=2" alt="Coverage Status">](https://coveralls.io/github/tmpfs/mdapi?branch=master).

Quick and dirty (but effective) API comments to commonmark compliant markdown.

Designed for small to medium sized libraries, for large projects use one of the many other documentation tools.

See [api](#api) for example output.

## Install

```
npm i mdapi
```

## Usage

```
mdapi [options] [files...]

  -o, --output=[file]  Write output to file.
  -t, --title=[val]    Title for initial heading (default: API).
  -l, --level=[num]    Initial heading level (default: 1).
  -h, --help           Display this help and exit.
  --version            Print the version and exit.

Report bugs to https://github.com/tmpfs/mdapi/issues
```

Print the documentation to stdout:

```
mdapi index.js
```

Need HTML or XML? No problem, install [commonmark](https://github.com/jgm/commonmark.js) and pipe the output:

```
mdapi index.js | commonmark
```

## API

```javascript
var parse = require('mdapi');
parse(['index.js'], {stream: process.stdout});
```

### concat

```javascript
concat(files, output, cb)
```

Concatenate input files into a single string.

* files `Array`: List of input file to load.
* output `String`: The output string.
* cb `Function`: Callback function.

### print

```javascript
print(ast, opts, cb)
```

Print the markdown from the parsed ast.

* ast `Object`: The parsed comments abstract syntax tree.
* opts `Object`: Parse options.
* cb `Function`: Callback function.

### parse

```javascript
parse(files, opts, cb)
```

Parse an array of files into a markdown string.

* files `Array`: List of files to parse.
* opts `Object`: Parse options.
* cb `Function`: Callback function.

## Developer

### Test

To run the test suite:

```
npm test
```

### Cover

To generate code coverage run:

```
npm run cover
```

### Lint

Run the source tree through [jshint](http://jshint.com) and [jscs](http://jscs.info):

```
npm run lint
```

### Clean

Remove generated files:

```
npm run clean
```

### Readme

To build the readme file from the partial definitions (requires [mdp](https://github.com/tmpfs/mdp)):

```
npm run readme
```

Generated by [mdp(1)](https://github.com/tmpfs/mdp).

[jshint]: http://jshint.com
[jscs]: http://jscs.info
[commonmark]: https://github.com/jgm/commonmark.js
[mdp]: https://github.com/tmpfs/mdp
