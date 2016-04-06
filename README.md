# Use-Angular
Some examples how to use Angular.js

## 01_first-app
- Use CDN angular and boostrap
- No MVC directories
- Just a simple app to show the force of Angular

## 02_structure-app
How to create an Angular project structure with test on local MAC OS X machine:
- Need NPM
- Install Node.js (if it's not already installed)
- Use Grunt (tasks runner) and Karma (test runner)
- Install grunt-cli (globally): [sudo] npm install -g grunt-cli
- Install karma-cli (globally): [sudo] npm install -g grunt-cli
- Install bower: [sudo] install -g bower
- or update bower: [sudo] npm update -g bower
- Create the initial project structure:
    - Define the local dependencies of the projets
    - Backend dependencies managed with NPM (package.json)
        - Install modules and plugins with console and save in json file:
            - grunt: npm install <grunt-modules-or-plugins-name> --save or --save-dev
            - karma: npm install <karma-modulesor-plugins-name> --save or --save-dev
    - Frontent with Bower (bower.json)
        - Init bower file in local folder: bower init
        - Install modules and plugins with console and save json file:
            - angular: bower install <angular-modules-or-plugins-name> --save or save-dev
    - Code a controller test file (NameController) in folder test/unit/controller

## 03_create-app
How to create an Angular project structure (manually) without test on local MAC OS X:
- Create the project structure
- Install dependencies

## 04_create-app-seed
How to create an Angular project structure with (off: icial) seed
- Clone the seed from github, start a new project without history: git clone --depth=1 https://github.com/angular/angular-seed.git <project-name>
- [sudo] npm install
- bower install
- [sudo] npm and bower update

## movies
A complete app, use seed but write all code to understand howw seed works. I'm not using all the seed code. Bower components are installed outside the app.

This app display a list and details of films

- Init the structure folder
- Code the JSON bower and package files
- Install and save bower_components: 
    - bower install angular angular-route bootstrap jquery --save
    - bower install angular-mocks --save-dev
- Install and save node_modules
    - npm install http-server jasmine-core karma karma-firefox-launcher karma-jasmine karma-junit-reporter protractor --save-dev
- Script start node server
- Install BoilerplateHtml5 to use some elements (404 error, favicon...): bower install html5-boilerplate --save
- Code the index file
- Install express (for node): npm install express --save
- Code a node server to manage url and public folder
- Install moviedb to use API: npm install moviedb --save
- Code viewList to display all films
