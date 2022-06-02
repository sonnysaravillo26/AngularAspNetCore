# AngularAspNetCore
 Building Applications with Angular, ASP.NET Core, and Entity Framework Core

## Note 
* has child components (e.g show/delete, add/edit)
* has shared service for centralized communication (send/recieved) to API 

# Guide
## Initial Setup
- create folder for angular package 
- verify angular if installed using command line `ng --version`
- setup,create angular package `ng new web-ui`. Add angular routing 'Yes', Default styling 'CSS'
- cd `<AngularPackageFolder>` (e.g cd web-ui/), to go inside the folder
- run angular package `ng serve`
- creating components `ng generate component <nameofcomponent>` (e.g ng generate component people)
- creating child component under maincomponent `ng generate component <maincomponent>/show-ppl` (e.g ng generate component people/show-ppl), can create another for edit component
- now creating service file `ng generate service <nameofservice>` (e.g ng generate service shared)
- from the 'app.module.ts' file, the created or generated components are listed down inside
- adding or import service inside 'app.module.ts' and indicate under 'providers' line
 
## Register and Import Modules
- import httpclient to app.module.ts file `import {HttpClientModule} from <modulepath>` (e.g import {HttpClientModule} from '@angular/common/http';)
- the following modules import HttpClientModule, FormsModule, ReactiveFormsModule from 'app.module.ts' file
- import the following HttpClient, Observable from 'shared.services.ts' file 

## Integration to API
- running backend code (API) and get the URL (e.g https://localhost:5001/)
- insert line code from 'shared.service.ts' file ( readonly API Url = ... )
- next is to instantiate the httpclient int the constructor from 'shared.service.ts' file

## Routing to communicate components
- update 'app-routing.module.ts' file by inserting the components (e.g PeopleComponent)
- update the route line of code with path (e.g {path: 'people', component:PeopleComponent} )
- from the component .html file (e.g people.component.html) add the following selector line inside `<router-outlet></router-outlet>`
- update 'app.component.html' by using routerlink code to call the page (e.g  button routerLink="people"...)

## Component Enhancement - API Response Handling
- update 'show-ppl.component.ts' file to grab the API response and view on the page 
- import SharedService to the component 'show-ppl.component.ts' file (e.g import { SharedService } from 'src/app/shared.service';) 
- instantiated into the constructor from 'show-ppl.component.ts' file (e.g constructor(private service:SharedService) { })
- update html component 'show-ppl.component.html', to show the list of values from the page
- use the component selector from the update file (e.g selector: 'app-show-ppl',), put the selector 'app-show-ppl' to the Main People Component html 'people.component.html' (e.g <app-show-ppl></app-show-ppl>)


## Edit Method
- using input directive and import from 'edit-ppl.component.ts' file (e.g import { Component, OnInit, Input } from '@angular/core';)
- 

## Additional Libraries installed and used
- Bootstrap using CDN 

## Definition Folder 
- ANGULARASPNETCORE - the parent/main folder of the project 
- WebUi - the Angular package development integration to .NET C#(API) DevApi package
-  s


## Reference(s)
- Angular guide `https://angular.io/guide/setup-local`