# Lean Nodent Runtime<br/>[![Sponsored by][sponsor-img]][sponsor] [![Version][npm-version-img]][npm] [![Downloads][npm-downloads-img]][npm] [![Build Status Unix][travis-img]][travis] [![Build Status Windows][appveyor-img]][appveyor] [![Dependencies][deps-img]][deps]

[sponsor-img]: https://img.shields.io/badge/Sponsored%20by-Sebastian%20Software-692446.svg
[sponsor]: https://www.sebastian-software.de
[deps]: https://david-dm.org/sebastian-software/lean-nodent-runtime
[deps-img]: https://david-dm.org/sebastian-software/lean-nodent-runtime.svg
[npm]: https://www.npmjs.com/package/lean-nodent-runtime
[npm-downloads-img]: https://img.shields.io/npm/dm/lean-nodent-runtime.svg
[npm-version-img]: https://img.shields.io/npm/v/lean-nodent-runtime.svg
[travis-img]: https://img.shields.io/travis/sebastian-software/lean-nodent-runtime/master.svg?branch=master&label=unix%20build
[appveyor-img]: https://img.shields.io/appveyor/ci/swernerx/lean-nodent-runtime/master.svg?label=windows%20build
[travis]: https://travis-ci.org/sebastian-software/lean-nodent-runtime
[appveyor]: https://ci.appveyor.com/project/swernerx/lean-nodent-runtime/branch/master

Lean Nodent Runtime is a fork of [Nodent-Runtime](https://github.com/MatAtBread/nodent-runtime) to tweak it for usage inside [Babel-Preset-Edge](https://github.com/sebastian-software/babel-preset-edge).



## Features

- Just the basic function helper to work together with the transpiled code.
- Ideal for usage with [fast-async](https://github.com/MatAtBread/fast-async) e.g. like in [Babel-Preset-Edge](https://github.com/sebastian-software/babel-preset-edge).


## Babel Configuration

To enable this very lightweight runtime use the secondary parameter for plugin configuration:

```js
plugins: [
  [ "fast-async", {
    "useRuntimeModule": "lean-nodent-runtime"
  }]
]
```

Please also make sure to pass over the information to require `lean-nodent-runtime` in all resulting code.


## License

[MIT](license)

## Copyright

<img src="https://cdn.rawgit.com/sebastian-software/sebastian-software-brand/3d93746f/sebastiansoftware-en.svg" alt="Sebastian Software GmbH Logo" width="250" height="200"/>

Copyright 2016-2018<br/>[Matt](https://github.com/MatAtBread)<br/><br/>
Copyright 2017-2018<br/>[Sebastian Software GmbH](http://www.sebastian-software.de)
