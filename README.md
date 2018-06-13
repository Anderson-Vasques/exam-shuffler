# backend

> node + express

> You need create a database(mysql) called "testgenerator" with user "root" and empty password.
You can also config your database settings in /server/database.js.
> The tables you need to create are in the end of this file.

## Development Setup
``` bash
# open server folder
cd server

# install dependencies
npm install

# run backend server
npm run dev
```


# client

> A Vue.js project

## Build Setup

``` bash
# open client folder
cd client

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


# Tables
## answer
|id   	|description   	|question_id   	|   	|   	|
|---	|---	|---	|---	|---	|
|1   	|resposta a   	|1   	|   	|   	|
|2   	|resposta b   	|1   	|   	|   	|
|3   	|resposta c   	|1   	|   	|   	|
|4   	|resposta d   	|1   	|   	|   	|


## question
|id   	|description   	|   	|   	|   	|
|---	|---	|---	|---	|---	|
|1   	|Qual a resposta correta? |   	|   	|   	|
