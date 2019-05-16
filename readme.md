<h1 align="center">
  react-page-transition
</h1>

<p align="center">
Drop in page transition component built for hooks
</p>

![preview](https://github.com/hanford/react-page-transition/blob/master/preview.gif)

<p align="center">
  <a href="https://www.npmjs.com/package/react-page-transition">
    <img src="https://img.shields.io/npm/dy/react-page-transition.svg">
  </a>
  <a href="https://www.npmjs.com/package/react-page-transition">
    <img src="https://img.shields.io/npm/v/react-page-transition.svg?maxAge=3600&label=react-page-transition&colorB=007ec6">
  </a>
  <img src="https://img.shields.io/github/repo-size/hanford/react-page-transition.svg" />
</p>

<br/>

## Installation

```sh
$ npm install --save react-page-transition
```

```sh
$ yarn add react-page-transition
```

## Usage

```js
import * as React from 'react'
import Pager from 'react-page-transition'

export default function App() {
  const [value, setState] = React.useState(0);

  return (
    <Pager value={value} onRequestChange={i => setState(i)}>
      <div>Hey!</div>
      <Component2 />
      {(props, index) => {
        return 'I also work!';
      }}
    </Pager>
  );
}
```

## Example

[![Edit react-page-transition](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/reactpagetransition-9x9d2?fontsize=14)

```sh
$ yarn example
```

<hr />

Questions? Feedback? [Please let me know](https://github.com/hanford/react-page-transition/issues/new)

## License (MIT)

```
WWWWWW||WWWWWW
 W W W||W W W
      ||
    ( OO )__________
     /  |           \
    /o o|    MIT     \
    \___/||_||__||_|| *
         || ||  || ||
        _||_|| _||_||
       (__|__|(__|__|
```