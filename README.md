# bookshelf-api
## Installation

Make sure you have Node and NPM installed in your device
1. Run in your terminal `npmi init --y`
2. Run in your terminal `npm i @hapi/hapi` for framework
3. Run in your terminal `npm install nanoid@3.x.x`
4. Run in your terminal `npm i nodemon --save-dev`
5. Run in your terminal `npm i eslint --save-dev`

## Usage
### For nodemon
After installing nodemon, open the package.json file, create a new npm runner script to run server.js using nodemon.

"scripts": {
    "start": "nodemon ./src/server.js",
},

### Run in your terminal `npx eslint --init` for initialization
1. How would you like to use ESLint? -> To check, find problems, and enforce code style.
2. What type of modules does your project use? -> Javascript modules (import/export).
3. Which framework did you use? -> None of these. 
4. Does your project use TypeScript? -> N.
5. Where does your code run? -> Node (select using space).
6. How would you like to define a style for your project? -> Use a popular style guide.
6. Which style guide do you want to follow? -> (You are free to choose, for example choose StandardJS Code Style).
7. What format do you want your config file to be in? -> JSON.
8. Would you like to …… (seluruh pertanyaan selanjutnya) -> Y.

### For eslint
After making the ESLint configuration, then we use ESLint to examine the JavaScript code in the project. But before that, we need to add the following npm runner inside the package.json file.

"scripts": {
  "lint": "eslint ./"
},
