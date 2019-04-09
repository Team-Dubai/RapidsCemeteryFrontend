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

## Folder/File Structure

The Rapids Cemetery frontend code was designed to be efficient and easy to maintain. To achieve this, we have focused on high separation of concerns and simple file structuring.

```
src
├── app
│   ├── app-routing.module.ts
│   ├── app.component.html
│   ├── app.component.spec.ts
│   ├── app.component.ts
│   ├── app.module.ts
│   ├── models
│   │   ├── chronology-event.interface.ts
│   │   ├── item.ts
│   │   ├── stop.ts
│   │   ├── tag.ts
│   │   └── tour.ts
│   ├── modules
│   │   ├── about
│   │   │   ├── about.module.ts
│   │   │   ├── components
│   │   │   │   └── paragraph
│   │   │   │       ├── paragraph.component.css
│   │   │   │       ├── paragraph.component.html
│   │   │   │       ├── paragraph.component.spec.ts
│   │   │   │       └── paragraph.component.ts
│   │   │   └── view
│   │   │       └── about
│   │   │           ├── about.component.html
│   │   │           ├── about.component.spec.ts
│   │   │           └── about.component.ts
│   │   ├── admin
│   │   │   ├── admin.module.ts
│   │   │   ├── components
│   │   │   │   ├── add-item-form
│   │   │   │   │   ├── add-item-form.component.css
│   │   │   │   │   ├── add-item-form.component.html
│   │   │   │   │   ├── add-item-form.component.spec.ts
│   │   │   │   │   └── add-item-form.component.ts
│   │   │   │   ├── add-stop-form
│   │   │   │   │   ├── add-stop-form.component.css
│   │   │   │   │   ├── add-stop-form.component.html
│   │   │   │   │   ├── add-stop-form.component.spec.ts
│   │   │   │   │   └── add-stop-form.component.ts
│   │   │   │   ├── add-tag-form
│   │   │   │   │   ├── add-tag-form.component.css
│   │   │   │   │   ├── add-tag-form.component.html
│   │   │   │   │   ├── add-tag-form.component.spec.ts
│   │   │   │   │   └── add-tag-form.component.ts
│   │   │   │   ├── delete-item-form
│   │   │   │   │   ├── delete-item-form.component.css
│   │   │   │   │   ├── delete-item-form.component.html
│   │   │   │   │   ├── delete-item-form.component.spec.ts
│   │   │   │   │   └── delete-item-form.component.ts
│   │   │   │   ├── delete-stop-form
│   │   │   │   │   ├── delete-stop-form.component.css
│   │   │   │   │   ├── delete-stop-form.component.html
│   │   │   │   │   ├── delete-stop-form.component.spec.ts
│   │   │   │   │   └── delete-stop-form.component.ts
│   │   │   │   ├── delete-tag-form
│   │   │   │   │   ├── delete-tag-form.component.css
│   │   │   │   │   ├── delete-tag-form.component.html
│   │   │   │   │   ├── delete-tag-form.component.spec.ts
│   │   │   │   │   └── delete-tag-form.component.ts
│   │   │   │   ├── edit-item-form
│   │   │   │   │   ├── edit-item-form.component.css
│   │   │   │   │   ├── edit-item-form.component.html
│   │   │   │   │   ├── edit-item-form.component.spec.ts
│   │   │   │   │   └── edit-item-form.component.ts
│   │   │   │   ├── edit-tag-form
│   │   │   │   │   ├── edit-tag-form.component.css
│   │   │   │   │   ├── edit-tag-form.component.html
│   │   │   │   │   ├── edit-tag-form.component.spec.ts
│   │   │   │   │   └── edit-tag-form.component.ts
│   │   │   │   ├── forgot-password
│   │   │   │   │   ├── forgot-password.component.css
│   │   │   │   │   ├── forgot-password.component.html
│   │   │   │   │   ├── forgot-password.component.spec.ts
│   │   │   │   │   └── forgot-password.component.ts
│   │   │   │   ├── login
│   │   │   │   │   ├── login.component.css
│   │   │   │   │   ├── login.component.html
│   │   │   │   │   ├── login.component.spec.ts
│   │   │   │   │   └── login.component.ts
│   │   │   │   └── wrapper
│   │   │   │       ├── wrapper.component.css
│   │   │   │       ├── wrapper.component.html
│   │   │   │       ├── wrapper.component.spec.ts
│   │   │   │       └── wrapper.component.ts
│   │   │   └── view
│   │   │       └── admin
│   │   │           ├── admin.component.css
│   │   │           ├── admin.component.html
│   │   │           ├── admin.component.spec.ts
│   │   │           └── admin.component.ts
│   │   ├── burials
│   │   │   ├── burials.module.ts
│   │   │   ├── components
│   │   │   └── view
│   │   │       └── burials
│   │   │           ├── burials.component.html
│   │   │           ├── burials.component.spec.ts
│   │   │           └── burials.component.ts
│   │   ├── contact
│   │   │   ├── components
│   │   │   │   └── form
│   │   │   │       ├── form.component.css
│   │   │   │       ├── form.component.html
│   │   │   │       ├── form.component.spec.ts
│   │   │   │       └── form.component.ts
│   │   │   ├── contact.module.ts
│   │   │   └── view
│   │   │       └── contact
│   │   │           ├── contact.component.html
│   │   │           ├── contact.component.spec.ts
│   │   │           └── contact.component.ts
│   │   ├── faq
│   │   │   ├── components
│   │   │   │   └── q-a
│   │   │   │       ├── q-a.component.css
│   │   │   │       ├── q-a.component.html
│   │   │   │       ├── q-a.component.spec.ts
│   │   │   │       └── q-a.component.ts
│   │   │   ├── faq.module.ts
│   │   │   └── view
│   │   │       └── faq
│   │   │           ├── faq.component.html
│   │   │           ├── faq.component.spec.ts
│   │   │           └── faq.component.ts
│   │   ├── home
│   │   │   ├── components
│   │   │   │   └── spotlight
│   │   │   │       ├── spotlight.component.css
│   │   │   │       ├── spotlight.component.html
│   │   │   │       ├── spotlight.component.spec.ts
│   │   │   │       └── spotlight.component.ts
│   │   │   ├── home.module.ts
│   │   │   └── view
│   │   │       └── home
│   │   │           ├── home.component.html
│   │   │           ├── home.component.spec.ts
│   │   │           └── home.component.ts
│   │   ├── information
│   │   │   ├── components
│   │   │   │   ├── filter
│   │   │   │   │   ├── filter.component.css
│   │   │   │   │   ├── filter.component.html
│   │   │   │   │   ├── filter.component.spec.ts
│   │   │   │   │   └── filter.component.ts
│   │   │   │   └── search
│   │   │   │       ├── search.component.css
│   │   │   │       ├── search.component.html
│   │   │   │       ├── search.component.spec.ts
│   │   │   │       └── search.component.ts
│   │   │   ├── information.module.ts
│   │   │   └── view
│   │   │       └── information
│   │   │           ├── information.component.html
│   │   │           ├── information.component.spec.ts
│   │   │           └── information.component.ts
│   │   ├── plot
│   │   │   ├── components
│   │   │   │   └── loomis
│   │   │   │       ├── loomis.component.css
│   │   │   │       ├── loomis.component.html
│   │   │   │       ├── loomis.component.spec.ts
│   │   │   │       └── loomis.component.ts
│   │   │   ├── plot.module.ts
│   │   │   └── view
│   │   │       └── plot
│   │   │           ├── plot.component.html
│   │   │           ├── plot.component.spec.ts
│   │   │           └── plot.component.ts
│   │   ├── timeline
│   │   │   ├── components
│   │   │   │   ├── chronology
│   │   │   │   │   ├── chronology.component.css
│   │   │   │   │   ├── chronology.component.html
│   │   │   │   │   ├── chronology.component.spec.ts
│   │   │   │   │   └── chronology.component.ts
│   │   │   │   └── events
│   │   │   │       ├── events.component.css
│   │   │   │       ├── events.component.html
│   │   │   │       ├── events.component.spec.ts
│   │   │   │       └── events.component.ts
│   │   │   ├── directives
│   │   │   │   └── layout.directive.ts
│   │   │   ├── timeline.module.ts
│   │   │   └── view
│   │   │       └── timeline
│   │   │           ├── timeline.component.html
│   │   │           ├── timeline.component.spec.ts
│   │   │           └── timeline.component.ts
│   │   ├── tour
│   │   │   ├── components
│   │   │   │   ├── map
│   │   │   │   │   ├── map.component.css
│   │   │   │   │   ├── map.component.html
│   │   │   │   │   ├── map.component.spec.ts
│   │   │   │   │   └── map.component.ts
│   │   │   │   ├── wizard
│   │   │   │   │   ├── wizard.component.spec.ts
│   │   │   │   │   └── wizard.component.ts
│   │   │   │   └── wizard-step
│   │   │   │       ├── wizard-step.component.spec.ts
│   │   │   │       └── wizard-step.component.ts
│   │   │   ├── tour.module.ts
│   │   │   └── view
│   │   │       └── tour
│   │   │           ├── tour.component.html
│   │   │           ├── tour.component.spec.ts
│   │   │           └── tour.component.ts
│   │   └── trails
│   │       ├── components
│   │       ├── trails.module.ts
│   │       └── view
│   │           └── trails
│   │               ├── trails.component.html
│   │               ├── trails.component.spec.ts
│   │               └── trails.component.ts
│   ├── services
│   │   ├── authentication.service.spec.ts
│   │   ├── authentication.service.ts
│   │   ├── email.service.spec.ts
│   │   ├── email.service.ts
│   │   ├── item.service.spec.ts
│   │   ├── item.service.ts
│   │   ├── stop.service.spec.ts
│   │   ├── stop.service.ts
│   │   ├── tag.service.spec.ts
│   │   └── tag.service.ts
│   └── shared
│       ├── banner
│       │   ├── banner.component.css
│       │   ├── banner.component.html
│       │   ├── banner.component.spec.ts
│       │   └── banner.component.ts
│       ├── card
│       │   ├── card.component.css
│       │   ├── card.component.html
│       │   ├── card.component.spec.ts
│       │   └── card.component.ts
│       ├── footer
│       │   ├── footer.component.html
│       │   ├── footer.component.spec.ts
│       │   └── footer.component.ts
│       ├── item
│       │   ├── item.component.css
│       │   ├── item.component.html
│       │   ├── item.component.spec.ts
│       │   └── item.component.ts
│       ├── navbar
│       │   ├── navbar.component.html
│       │   ├── navbar.component.spec.ts
│       │   └── navbar.component.ts
│       └── shared.module.ts
├── assets
│   ├── css
│   │   ├── about.component.css
│   │   ├── app.component.css
│   │   ├── burials.component.css
│   │   ├── contact.component.css
│   │   ├── faq.component.css
│   │   ├── footer.component.css
│   │   ├── home.component.css
│   │   ├── information.component.css
│   │   ├── navbar.component.css
│   │   ├── plot.component.css
│   │   ├── timeline.component.css
│   │   ├── tour.component.css
│   │   └── trails.component.css
│   ├── img
│   │   ├── Unknown.png
│   │   ├── banner.jpeg
│   │   ├── cemeteryMap.png
│   │   ├── historySpotlight.jpeg
│   │   ├── logo.png
│   │   ├── loomis.png
│   │   ├── tourSpotlight.jpeg
│   │   └── trailSpotlight.jpg
│   └── libs
│       └── README.md
├── browserslist
├── environments
│   ├── environment.prod.ts
│   └── environment.ts
├── index.html
├── karma.conf.js
├── main.ts
├── polyfills.ts
├── styles.css
├── test.ts
├── tsconfig.app.json
├── tsconfig.spec.json
└── tslint.json
```


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
