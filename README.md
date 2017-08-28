[![build status](https://secure.travis-ci.org/survivejs/react-component-boilerplate.svg)](http://travis-ci.org/survivejs/react-component-boilerplate) [![bitHound Score](https://www.bithound.io/github/survivejs/react-component-boilerplate/badges/score.svg)](https://www.bithound.io/github/survivejs/react-component-boilerplate) [![Dependency Status](https://david-dm.org/survivejs/react-component-boilerplate.svg)](https://david-dm.org/survivejs/react-component-boilerplate)

# react-creative-btns - Beautiful creative button styles from Codrops ported to React 


> Check out [Codrops - Creative Button Styles](https://tympanus.net/codrops/2013/06/13/creative-button-styles/) for the original buttons.

## Basic Usage

[Demo](https://danielyaa5.github.io/react-creative-btns)
[Github](https://github.com/danielyaa5/react-creative-btns)

Right now only Effects 1 has been tested.
Install: `npm i -S react-creative-btns`.

### Development

* Developing - **npm start** - Runs the development server at *localhost:8080* and use Hot Module Replacement. You can override the default host and port through env (`HOST`, `PORT`).
* Creating a version - **npm version <x.y.z>** - Updates */dist* and *package.json* with the new version and create a version tag to Git.
* Publishing a version - **npm publish** - Pushes a new version to npm and updates the project site.

#### Documentation Site
The boilerplate includes a [GitHub Pages](https://pages.github.com/) specific portion for setting up a documentation site for the component. The main commands handle with the details for you. Sometimes you might want to generate and deploy it by hand, or just investigate the generated bundle.

* Building - **npm run gh-pages** - Builds the documentation into `./gh-pages` directory.
* Deploying - **npm run gh-pages:deploy** - Deploys the contents of `./gh-pages` to the `gh-pages` branch. GitHub will pick this up automatically. Your site will be available through *<user name>.github.io/<project name>`.
* Generating stats - **npm run stats** - Generates stats that can be passed to [webpack analyse tool](https://webpack.github.io/analyse/). This is useful for investigating what the build consists of.

### Testing

The test setup is based on Jest. Code coverage report is generated to `coverage/`. The coverage information is also uploaded to codecov.io after a successful Travis build.

* Running tests once - **npm test**
* Running tests continuously - **npm run test:watch**
* Running individual tests - **npm test -- <pattern>** - Works with `test:watch` too.
* Linting - **npm run test:lint** - Runs ESLint.

### Documentation Site


## Credits
Survivejs's [react-component-boilerplate](https://github.com/survivejs/react-component-boilerplate)
## License

*react-creative-btns* is available under MIT. See LICENSE for more details.

