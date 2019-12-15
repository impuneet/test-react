# General Objective:

Develop a front-end application which would let the users help list and browse all Characters of Rick and Morty Show.

## Installation

Use the package manager [pip](https://pip.pypa.io/en/stable/) to install foobar.

```bash
npm i
npm run start
```

```bash
dev : "start": "webpack-dev-server --mode development --open --hot"
prod : "build": "webpack --mode production"
```

## Webpack Bundling package

```javascript
const hwp = require('html-webpack-plugin');

entry: path.join(__dirname, '/src/index.js'),
  output: {
    filename: 'build.js',
    path: path.join(__dirname, '/dist'),
  },
...

plugins: [new hwp({ template: path.join(__dirname, '/src/index.html') })],

```


## Standard Linting processes 

Used eslint-config-airbnb with prettier for linting es6 .

```bash
npm i -g eslint
eslint --fix
```

## Live Demo

![en-US](https://github.com/impuneet/test-react/blob/master/screenshots/screen1.PNG)


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
