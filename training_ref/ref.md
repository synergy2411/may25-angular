# What is JavaScript?

- Scripting language
- Dynamic
- Interactive Content
- Supports OOPS (Encapsulation, Abstration, Inheritance)
- Client side (Browser) as well as server side (NRE)
- Event Driven
- Fast
- Light-weight
- Asynchronous
- Single Thread

# JavaScript

- MEAN Stack : Mongo Express Angular Node
- MERN Stack : Mongo Express React Node

# JavaScript Development Environment -

> npm create vite@latest
> cd es6-examples
> npm install
> npm run dev

# JavaScript Datatypes

- Primitive : String, number, boolean
- Reference: Object, Array, Date, Function

# ES6+ Features

- Arrow function
- Rest / Spread (...)
- Destructuring - Array, Object
- Block Scoping - let, const
- Template Literals - `` (back tick)
- Default Parameter
- Promises
  > then().catch()
  > async...await
  > Promise API - all, allsettled, race, any, resolve, reject

# TypeScript: JavaScript with type syntax

# Types in TypeScript

- All JS DataTypes
- void
- any
- unknown
- never
- union
- undefined
- null
- tuple
- Custom types - type, interface, class
- Generics
- Decorators
- Module System

# TypeScript Development Environment -

> npm create vite@latest > choose Vanilla > TypeScript
> cd es6-examples
> npm install
> npm run dev

# JavaScript Libraries / Framework

- AngularJS (v1.x) - Library
- \*Angular - super-heroic framework
- React : Library; 35kb; quickly render the UI. SPA - react-router-dom, State Management - Redux, Form Validation - yup, formik, react-hook-form etc
- jQuery : DOM Manipulation, Animation, AJAX Calls
- \*Vue : template oriented progreessive framework; "Evan You"
- Knockout : MVVM Pattern; 2 way data binding
- Backbone : MVC Pattern at client side
- Polymer : create custom web components
- Stencil : Virtual DOM concepts to create Custom web components
- Electron : Desktop apps
- \*Ember : very frequent API changes
- Express/ Hapi/ Koa/ KrakenJS/ SailsJS : Server-side web application framework
- Node : Server side platform

# Angular CLI Installation

- [sudo] npm install @angular/cli@17 -g
- ng version
- ng new my-app --no-standalone (generates angular project with modules)
- cd my-app
- ng serve | npm start > starts Webpack dev Server

# Angular CLI Commands

- ng generate component path/to/component
- ng g c path/to/component
- ng g c components/users (ts, html, css, spec)

# Adding Bootstrap in Project

> npm install bootstrap@5
> changes in angular.json file

    - "./node_modules/bootstrap/dist/css/bootstrap.min.css" inside styles property

> restart the server

ng g c components/users/user-info
ng g c components/users/user-img
ng g c components/demo/life-cycle

# Angular Components

- Reusable peice of code
- Creates view
- PB and EB Syntax
- Nested Comp Communication
  > @Input() / @Output()
- Life Cycle
  > onChanges
  > onInit
  > doCheck
  > afterContentInit
  > afterContentChecked
  > afterViewInit
  > afterViewChecked
  > onDestroy
- Code refactoring
  > Custom Data Type
  > Model separated from View

# Angular Directives

- Component : view associated
- Attribute : changes the appearence eg. ngStyle, ngClass
- Structural : changes the DOM layout. eg. *ngIf, *ngFor, \*ngSwitch

> ng g c components/demo/directives-example

> ng g d directives/highlight

# Angular Pipes

> ng g c components/demo/pipe-example

> ng g p pipes/country-code
> ng g p pipes/reverse
