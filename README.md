[![view on npm](https://img.shields.io/npm/v/@test-runner/tap-view.svg)](https://www.npmjs.org/package/@test-runner/tap-view)
[![npm module downloads](https://img.shields.io/npm/dt/@test-runner/tap-view.svg)](https://www.npmjs.org/package/@test-runner/tap-view)
[![Build Status](https://travis-ci.org/test-runner-js/tap-view.svg?branch=master)](https://travis-ci.org/test-runner-js/tap-view)
[![Dependency Status](https://badgen.net/david/dep/test-runner-js/tap-view)](https://david-dm.org/test-runner-js/tap-view)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/feross/standard)

# @test-runner/tap-view

Adds TAP-compatible output to test-runner.

## Synopsis

```
$ npm install --save-dev @test-runner/tap-view

$ test-runner --view @test-runner/tap-view test/*.js
TAP version 13
1..3
ok bad option: should fail and printError
ok arrays: new array does not overwrite if it is empty
ok Invalid middleware: no middleware method
# Passed: 3, failed: 0, skip: 0
```

* * *

&copy; 2019 Lloyd Brookes \<75pound@gmail.com\>.
