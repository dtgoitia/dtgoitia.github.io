This repository contains ready-to-use templates to start developing in React.

# Important

Once you have a local copy of the template, remember to **edit** the file `package.json` and change the following properties to your suit your needs:
* package name:
    ```js
    "name": "react-project-template"`,
    ```
* repository url:
    ```js
    "url": "git+https://github.com/dtgoitia/react-project-template.git"
    ```
* author:
    ```js
    "author": "dtgoitia"
    ```
* bugs url:
    ```js
    "url": "https://github.com/dtgoitia/react-project-template/issues"
    ```
* homepage:
    ```js
    "homepage": "https://github.com/dtgoitia/react-project-template#readme"
    ```

# How to use the template

1. Clone the repository.
2. Make the changes mentioned [above](#important).
3. Open a terminal, navigate to the repository folder and run `npm install` to install all the dependencies. This can take few minutes.
4. Run `npm run start`. This will bring a server up, open a new tab in your default browser, and access `http://localhost:8080/`.

Each time you edit any file, the server will show you the changes automatically.

# How to create your own template

This are the exact steps followed to setup the basic React project template.

1. Initialize a Git repository

    ```cmd
    git init
    ```
2. Initialize a NPM package. Accept all default options
    ```cmd
    npm init
    ```
3. Install `react` and `react-dom` packages from NPM:
    ```cmd
    npm install --save react react-dom
    ```
4. Create a `.gitignore` file to avoid adding all the NPM packages' files into out git repo, because this files can be installed anytime from NPM if needed.
    ```cmd
    touch .gitignore
    ```
    Edit the just created `.gitignore` file so that it looks like below. Then save and close it.
    ```txt
    node_modules
    dist
    ```
5. Install this auxiliary modules:
    ```cmd
    npm install --save-dev babel-core babel-loader babel-preset-env babel-preset-react css-loader style-loader html-webpack-plugin webpack webpack-dev-server
    ```
6. Create `webpack.config.js` file:
    ```cmd
    touch webpack.config.js
    ```
    Edit the just created `webpack.config.js` file  to look like below. Then save and close it.
    ```js
    var path = require('path');
    var HtmlWebPackPlugin = require('html-webpack-plugin');

    module.exports = {
        entry: './app/index.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'index_bundle.js'
        },
        module: {
            rules: [
                { test: /\.(js)$/, use: 'babel-loader'},
                { test: /\.css$/, use: ['style-loader', 'css-loader']}
            ]
        },
        plugins: [new HtmlWebPackPlugin({
            template: 'app/index.html'
        })]
    }
    ```
7. Edit `package.json` file to look like below.
    ```js
    {
        "name": "react-project-template",
        "version": "1.0.0",
        "description": "",
        "main": "index.js",
        "scripts": {
            "start": "webpack-dev-server --open"
        },
        "babel": {
            "presets": [
            "env",
            "react"
            ]
        },
        "repository": {
            "type": "git",
            "url": "git+https://github.com/dtgoitia/react-project-template.git"
        },
        "keywords": [
            "react",
            "project",
            "template"
        ],
        "author": "dtgoitia",
        "license": "ISC",
        "bugs": {
            "url": "https://github.com/dtgoitia/react-project-template/issues"
        },
        "homepage": "https://github.com/dtgoitia/react-project-template#readme",
        "dependencies": {
            "react": "^15.6.1",
            "react-dom": "^15.6.1"
        },
        "devDependencies": {
            "babel-core": "^6.25.0",
            "babel-loader": "^7.1.1",
            "babel-preset-env": "^1.6.0",
            "babel-preset-react": "^6.24.1",
            "css-loader": "^0.28.4",
            "html-webpack-plugin": "^2.29.0",
            "style-loader": "^0.18.2",
            "webpack": "^3.1.0",
            "webpack-dev-server": "^2.5.1"
        }
    }
    ```
    Remember to change the following properties to your suit your needs:
    * `"react-project-template"`
    * `"git+https://github.com/dtgoitia/react-project-template.git"`
    * `"https://github.com/dtgoitia/react-project-template/issues"`
    * `"https://github.com/dtgoitia/react-project-template#readme"`
8. Create you app files:
    ```cmd
    mkdir app
    cd app
    touch index.html
    touch index.css
    touch index.js
    mkdir components
    cd components
    touch Apps.js
    ```
9. Edit `index.html` file to look like below. Then save and close.
    ```html
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title></title>
        </head>
        <body>
            <div id="app"></div>
        </body>
    </html>
    ```
10. Edit `index.css` file to look like below. Then save and close.
    ```css
    body {
      background-color: green;
    }

    div {
      color: black;
    }
    ```
11. Edit `index.js` file to look like below. Then save and close.
    ```js
    const React = require('react');
    const ReactDOM = require('react-dom');
    require('./index.css');
    const App = require('./components/Apps')

    ReactDOM.render(
      <App />,
      document.getElementById('app')
    );
    ```
12. Edit `components/Apps.js` file to look like below. Then save and close.
    ```jsx
    const React = require('react');

    class App extends React.Component {
      render() {
        return (
            <div>Your app is up and running!</div>
        )
      }
    }

    module.exports = App;
    ```
