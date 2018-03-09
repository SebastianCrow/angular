Angular:
https://angular.io/guide/quickstart

ng-bootstrap:
https://github.com/ng-bootstrap/ng-bootstrap
https://ng-bootstrap.github.io/#/getting-started

ngx-bootstrap:
https://github.com/valor-software/ngx-bootstrap
https://valor-software.com/ngx-bootstrap/#/getting-started

- template error handling & debuging
- adding service multiple times in providers create multiple instances!
- "shadow DOM"
- lifecycle (https://angular.io/guide/lifecycle-hooks)

Migration:
https://angular.io/guide/upgrade

- incremental updates, AngularJS and Angular existing at the same time, 'upgrade/static' module
- the most important rules (done):
  - one component per file -> allowing for one at a time migration
  - folder by feature & modularity
- use module loader (done)
- migrate to TypeScript (ongoing)
- use AngularJS component directives instead of ng-controller/ng-include (ongoing)
  - should have attributes: restrict, scope, bindToController, controller/controllerAs, template/templateUrl
  - may use attributes: transclude, require
  - shouldn't use: compile, replace, priority, terminal <- not supported in Angular
- use $onInit(), $onDestroy(), $onChanges() in controllers (since AngularJS 1.5)

- ngUpgrade -> UpgradeModule
- both fully fledged AngularJS & Angular frameworks are running at the same time 
- You can make AngularJS services available for injection to Angular code by upgrading them
- You can also make Angular services available for injection to AngularJS code by downgrading them
- each component in DOM is owned by one framework (usually, app starts with AngularJS on the root level)
- $rootScope.$apply() / Angular zone -> OnChanges lifecycle hook is working
- angular.module / NgModule decorator -> you need at least one module each from both AngularJS and Angular. You will import UpgradeModule inside the NgModule, and then use it for bootstrapping the AngularJS module
- bootstraping hybrid app (done by UpgradeModule)
  - create new @NgModule class AppModule
  - use UpgradeModule inside:
    - angular.bootstrap(document.body, ['heroApp'], { strictDi: true }) -> this.UpgradeModule.bootstrap(document.body, ['heroApp'], { strictDi: true })
- use Angular component in the AngularJS context -> needs to be downgraded using downgradeComponent() method
  - directive('heroDetail', downgradeComponent({ component: HeroDetailComponent }) as angular.IDirectiveFactory)
- one exception when using downgraded Angular component in the AngularJS context:
  - kebab-case: [myHero]="hero" -> [my-hero]="hero"
- AngularJS component can be upgraded using class HeroDetailDirective extends UpgradeComponent
- transclude -> content projection (ng-content)






------------------------------------------------------------------------------------------------------

# Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
