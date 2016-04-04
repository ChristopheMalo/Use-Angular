# Use-Angular
Some examples how to use Angular.js

## 01_first-app
- Use CDN angular and boostrap
- No MVC directories
- Just a simple app to show the force of Angular

## 02_structure-app
How to create an Angular project structure on local MAC OS X machine:
- Need NPM
- Install Node.js (if it's not already installed)
- Use Grunt (tasks runner) and Karma (test runner)
- Install grunt-cli (globally): [sudo] npm install -g grunt-cli
- Install karma-cli (globally): [sudo] npm install -g grunt-cli
- Install bower: [sudo] install -g bower
- or update bower: [sudo npm update -g bower
- Create the initial project structure:
    - Define the local dependencies of the projets
    - Backend dependencies managed with NPM (package.json)
        - Install modules and plugins with console and save in json file:
            - grunt: npm install <grunt-modules-or-plugins-name> --save-dev
            - karma: npm install <karma-modulesor-plugins-name> --save-dev
    - Frontent with Bower (bower.json)
        - Init bower file in local folder: bower init
