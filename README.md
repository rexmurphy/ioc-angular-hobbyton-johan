# IocAngularHobbytonJohan

## Title
ioc-angular-hobbyton-johan

## Description
This app will manage everything related to my board game group’s sessions  
(catalog of our board games, game session records, meetup scheduling, campaign tracking, etc.)

## Technical Stack
[Angular CLI](https://github.com/angular/angular-cli) version 18.2.21 with:

- Standalone architecture (no `app.module.ts`)
- Routing enabled
- SCSS as the styling preprocessor
- Client-Side Rendering (CSR) enabled
- Server-Side Rendering (SSR) disabled
- Node.js and npm for dependency management
- Git for version control
- GitHub as the remote repository: https://github.com/rexmurphy/ioc-angular-hobbyton-johan

## Status
The Angular 18 project has been successfully created using the Standalone architecture, with routing enabled and SCSS configured as the default styling format.  
Client-Side Rendering (CSR) is configured, with Server-Side Rendering (SSR) disabled as required.  
Version control has been properly initialized using Git, and all required branches (`main`, `ra1-setup`, `ra2-components`, `ra3-serveis`, `ra4-navegacio`) have been created.

Additionally, the project structure has been manually organized inside `src/app/` by creating the following directories:
- components/ (for reusable UI components)
- services/ (for data and business logic)
- models/ (for TypeScript interfaces and data models)
- pages/ (for main application views)

`.gitkeep` files have been added where necessary to ensure empty directories are properly tracked under version control.
 
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
