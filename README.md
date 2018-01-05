# Front / Twall - [Devfest](https://devfest.gdglille.org/) // GDG Lille ([@GDGLille](https://twitter.com/GDGLille)) 

[![Build Status](http://jenkins.bodul.fr/buildStatus/icon?job=GDG-Lille/twall-front/master)](http://jenkins.bodul.fr/job/GDG-Lille/job/twall-front/job/master/)

## Made with ...
* [NPM](https://www.npmjs.com/) 
* [Angular](https://angular.io/) with [Angular CLI](https://cli.angular.io/)
* [MomentJS](https://momentjs.com/)

## How to build for production ?

Run `ng build -prod` to build the project. The build artifacts will be stored in the `dist/` directory.

## How to display tweets ?

Simple, there is only one page : http://your-uri.org/tweets

### Option

| Name     | Description                              | Default              | Example                                  |
| -------- | ---------------------------------------- | -------------------- | ---------------------------------------- |
| refresh  | The refresh frequency (in milliseconds)  | 5000, cannot be less | http://your-uri.org/tweets;refresh=10000 |

## How to contribute (if you are a developer) ?

### Running in local

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Contact via [Issues](https://github.com/GDG-Lille/twall-front/issues)
Helpful for **question**, **bug** and **contribution request**.
