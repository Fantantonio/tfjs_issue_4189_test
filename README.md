This repo is made to reproduce this [issue](https://github.com/tensorflow/tfjs/issues/4189)
<br>

#### Steps to reproduce the issue

1. Initialize a node.js project:

```
npm init -y
```

2. Clone this repo inside the node project folder
3. Install dependencies:

```
npm i nw@0.48.3-sdk -D
npm i nwjs-builder-phoenix --save-dev
```

4. Run it using "NPM SCRIPTS" if you are using vscode or by typing:

```
cd node_modules\.bin
run ../../
```
<br>

#### Stuff versions

* Windows 10 Home: 20H2
* Node.js: 14.6.0
* nwVersion: 0.48.3
* nwjs-builder-phoenix: 1.15.0
* TensorFlow.js installed from: npm
* TensorFlow.js version: 2.7.0
