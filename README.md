#TS-REACT-SEED

This is skeleton project using typescript and react to build frontend app.
Build tools include typings, gulp, webpack etc.

##Command

###Install dependencies

`npm run init`

###Development

`npm run dev`

###Publish release version to build folder

`npm run release`

##Branch

+ v1.0  

  including gulp, browserify, tsify without webpack

+ v1.1

  Build typescript and react with gulp, webpack and typings

+ v1.2

  Add Redux based on v1.1

+ v1.3

  Test 3rd libs based on v1.1

##Manually install some dependencies(You don't need to do this normally)

+ `npm init`  create package.json
+ `npm i gulp --save-dev`
+ `npm i gulp-connect --save-dev`
+ `npm i gulp-typescript --save-dev`
+ `npm i gulp-open --save-dev`
+ `npm i typescript --save-dev`
+ `typings install react --save`
+ `typings install dt~react-dom --global --save`
+ `typings install react-router --save`
+ ...

##3rd libs

+ material-ui
+ fixed-data-table
+ react-tap-event-plugin

##issues

+ how to external material-ui?

##Ref

+ [tsconfig](https://angular.io/docs/ts/latest/guide/typescript-configuration.html)
+ [webpack.cofnig](https://github.com/webpack/docs/wiki/configuration#externals)