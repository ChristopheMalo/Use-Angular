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
How to create an Angular project strucuture without test on local MAC OS X:
- Create the projetc structure
- Install dependencies
