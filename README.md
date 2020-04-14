# hooks-lib

> My personal react hooks library

[![NPM](https://img.shields.io/npm/v/hooks-lib.svg)](https://www.npmjs.com/package/hooks-lib) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save hooks-lib
```

## Usage

```jsx
import React, { Component } from 'react'

import { useMyHook } from 'hooks-lib'

const Example = () => {
  const example = useMyHook()
  return (
    <div>{example}</div>
  )
}
```

## License

MIT © [r-oland](https://github.com/r-oland)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
