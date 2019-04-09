# RapidsCemeteryFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.2.

## Prerequisites

* Node.js
* NPM

## Frameworks and libraries

* Angular 7+
* BootStrap / ngx-bootstrap
* angular2-wizard
* ngx-chronology

## Configuration

Clone the repository to your machine. Once this has been completed, navigate to the project directory and run the command `npm install`. This will install all of the dependencies for the project. Now you can begin to edit the code.

## File Structure

The Rapids Cemetery frontend code was designed to be efficient and easy to maintain. To achieve this, we have focused on high separation of concerns and simple file structuring.

### Models

Contains classes that represent API objects. This allows us to easily acquire all properties when retrieving objects from the backend API. 

### Modules

Contains all of the components used to build the interfaces and functionality for the application. Each component contains a component folder for its individual components as well as a view folder, which is responsible for displaying the content.

### Services

Contains all of the services that are used to communicate with the API. A service is any code that must reference or call the API to GET or POST specific data.

### Shared

Contains all of the components that are shared or repeated multiple times within the application. Reference the modules section above for further information on its structure.

### Assets

Contains all of the assets within the site such as images and css styling.

#### css

Contains all of the styles related to the parent components.

#### images

Contains all of the static or unchanging images.

## Making Changes

If you’re making changes to the code, then branch off of dev (ensure you have the latest copy by pulling first). Once you have made all of your changes, then create a pull request for someone to review. After your code has been reviewed, then merge it into dev. This will trigger a build that will recompile the live code and update the public application.

### Development Server

In order to access and run the code locally, in the project directory run the command `ng serve`. This will compile the code and run the local server. In your browser, visit “localhost:4200”. This will show the site as it is on your local machine. Everytime you make a change, the site will reload/recompile.

### Code Scaffolding

In order to add a component, run the command `ng generate component ‘name of component’`. In order to add a service, run the command “ng generate service ‘name of service”. These are all Angular CLI commands, which help easily and efficiently create different aspects of the project such as services and components. In addition, it will also hook everything up for you without the need to do much additional configuration. You can also use `ng generate directive|pipe|class|guard|interface|enum|module`. To generate other items further.

### Build

Once you have completed making your changes to the site, run the command `ng build --aot --prod`. This will compile the code for production and ensure that the actual build runs successfully. This must be done before creating the pull request and merging the code back into dev. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via Karma.

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via Protractor.

## Third-Party Documentation References

Angular
https://angular.io/docs

Node.js
https://nodejs.org/en/docs/

NPM
https://docs.npmjs.com/

BootStrap
https://getbootstrap.com/docs/4.1/getting-started/introduction/

ngx-bootstrap
https://valor-software.com/ngx-bootstrap/#/documentation

angular2-wizard
https://github.com/3dluis/angular2-wizard

ngx-chronology
https://github.com/JR33D/ngx-chronology

Karma
https://karma-runner.github.io

Protractor
http://www.protractortest.org/
