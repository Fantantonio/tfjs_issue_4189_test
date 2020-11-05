This repo is made to reproduce this [issue](https://github.com/tensorflow/tfjs/issues/4189)

Steps to reproduce the issue:

1) Initialize a node.js project:
```
npm init -y
```

2) Clone this repo inside the node project folder

3) Install dependencies:
```
npm i nw@0.48.3-sdk -D
npm i nwjs-builder-phoenix --save-dev
```

4) Run it using "NPM SCRIPTS" if you are using vscode or by typing:
```
run Path\to\test_folder
```
inside `node_modules\.bin` directory


