# General Objective:

Develop a front-end application which would let the users help list and browse all Characters of Rick and Morty Show.

### Specific Objectives:
- Consume Rick and Morty API following the [API's documentation](https://rickandmortyapi.com/documentation/)
- Use the endpoint: _{GET} https://rickandmortyapi.com/api/character/_
- After getting the results, display the following information: **id**, **name**, **status**, **species** e **image**.
- Build a interface using cards.
- Apply search filter per character .
- Implement Sort feature (to filter through ‘id’ in ascending and descending order).
- Use React as **Javascript** framework.
- You may use any **CSS** framework - preferably following the Semantic react css

### Portfolio

You can visit my portfolio which is built with Gatsby and GraphQL and is also open source on github
https://iampuneet.in/

My Recent Work : 
https://iampuneet.in/projects

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

Desktop Grid

![en-US](https://github.com/impuneet/test-react/blob/master/screenshots/screen1.PNG)


Tablet Grid
![en-US](https://github.com/impuneet/test-react/blob/master/screenshots/screen2.PNG)

Mobile Grid

![en-US](https://github.com/impuneet/test-react/blob/master/screenshots/screen3.PNG)

Search By Name 

![en-US](https://github.com/impuneet/test-react/blob/master/screenshots/screen4.PNG)

Filter Data & Sorting by ID

![en-US](https://github.com/impuneet/test-react/blob/master/screenshots/screen5.PNG)


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
