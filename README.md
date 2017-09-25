# ENV
[![NPM Version][NPM IMAGE]][NPM LINK]
[![LICENSE][LICENSE IMAGE]][LICENSE LINK]

[NPM IMAGE]:http://img.shields.io/npm/v/bichi-env.svg?style=flat
[NPM LINK]:https://www.npmjs.org/package/bichi-env
[LICENSE IMAGE]:https://img.shields.io/npm/l/bichi-env.svg
[LICENSE LINK]:https://www.npmjs.org/package/bichi-env

## Use
````javascript
import env from 'bichi-env'
const options = {
  // env file path
  path: '/',
  // env file name
  name: '.env',
}
const config = env()
````