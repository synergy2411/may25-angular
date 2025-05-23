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

- @HostBinding
- @HostListener()

# Angular Pipes

> ng g c components/demo/pipe-example

> ng g p pipes/country-code
> ng g p pipes/reverse
> ng g p pipes/filter

# Forms

- States / Classes
- Validations
- Error Messages
- Template Driven
- Model Driven / Reactive Forms

# Pure vs Impure

let user = { // x0x01234
name : "john"
}

let friends = ["john","jenny","james"]

<!-- Immutable Change / Impure changes -->

user.name = "jenny"; // x0x01234
friends.push("joey")

<!-- Mutable Change / Pure changes-->

user = { // x0x198765
name : "mary"
}

friends = ["john","jenny","james", "jeoy"]

---

Component -> Shadow DOM- encapsulation; smaller piece of Actual DOM

# ViewEncapsulation :

- Emulated - by default; local stylesheet will have preference over global stylesheet
- Native / ShadowDOM - only local stylesheet will take effect; global stylesheet will be ignored
- None - local stylesheet will be applied to the other parts of the application

Comp A - None h1 {color : red}
Comp B - Native/ShadowDOM

---

# Pipes - Pure and

# Forms

- touched / untouched
- dirty / pristine
- valid / invalid

1. Template driven
2. Model Driven / Reactive
   > FormControl
   > FormGroup
   > FormBuilder
   > FormArray : generates form elements dynamically

---

# Services / DI

> ng g s services/data
> ng g s services/counter

- CounterService : Root Module, Component, Singleton Instance

- CompA : ng g c components/demo/comp-a
- CompB : ng g c components/demo/comp-b

@Injectable({
providedIn: "root"
})

- root : injected in root of application
- platform : singleton instance available in all running apps
- any : different singleton instance will be available for all the modules; mostly used in lazy loading

- Root Module
- Root Component
- Other Component

# Observable / RxJS Library

- Stream of events; events carry data
- Lazy, by default
- Cancel any time
- Both Async and Sync
- power operators

- Observable : pipe, subscribe
- Observer : next, error, complete

- subject : are both - Observables as well as Observer; next, error, complete, pipe, subscribe
- BehaviourSubject :

  > Always start with seed value
  > For the next subscription, the last emitted value becomes the seed value

- ReplaySubject

  > replays given last emitted values

- AsyncSubject
  > will provide last emitted value, once the observable is completed

> ng g c components/demo/observable-example

- User Input
- Navigating
- Rest API Call

---

# Http Calls

- GET
- POST
- DELETE
- PATCH

# Interceptors

# Routing / Navigation - SPA

# Creating JSON Server

- npm install json-server@0.17.4 -g
- json-server --version
- create db.json file
- data/> json-server --watch db.json

# Generating expenses service

> ng g s services/expenses
> ng g c components/expenses
> ng g c components/expenses/expense-form

# Interceptors

- intercepts outgoing request
- intercepts incoming responses
- Logging, Auth Token, Caching, Error Handling
- runs in the order of placement
- providers: [{provide : "", useClass : "", multi: true}] of Module
- ng g interceptor interceptors/logging

---

# Routing

> ng g c components/header
> ng g c components/page-not-found
> ng g s services/auth
> ng g guard guards/login

> app/guards/login.guard.ts

# SPA Advantage

- Better user experience
- Less server interaction
- less network bandwidth usage

# SPA Disadvantage

- Sends complete app in one go to the browser (lazy loading)

---

microservices
monorepos
micro-frontends

---

# Child Routing / Nested Routing

http://localhost:4200/products/99/overview
http://localhost:4200/products/99/specification

> ng g c components/demo/products
> ng g c components/demo/products/overview
> ng g c components/demo/products/specification

# Modules - lazy loading

> ng g m modules/eager
> ng g c modules/eager/components/i-am-eager

> ng g m modules/lazy
> ng g c modules/lazy/components/i-am-lazy

- Modules
- Debugging, Optimizing, Deployment preparation

- Standalone components / pipes / directivs
  > v14.x
  > v17.x
  > no modules required

> ng new my-app --no-standalone
> ng g c components/demo/standalone-example --standalone
> standalone : true

> with Modules
> standalone to standalone
> without Modules

> ng new standalone-app

- Signals : reactive programming

- Testing
