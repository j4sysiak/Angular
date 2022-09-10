https://www.youtube.com/watch?v=PNngOjoHvzQ&t=18s


Angular: https://github.com/shameed1910/angular8-crud-demo
Springboot: https://github.com/shameed1910/springboot-crud-api



Angular 8 + Spring Boot CRUD API + Data Table Example
36 021 wyświetleń  22 sie 2020  In this tutorial, we will learn how to build a full stack Angular 8 + Spring Boot example with a CRUD App with data table. The back-end server uses Spring Boot and Front-end side is made with Angular 8.

Spring Boot GitHub Link: https://github.com/shameed1910/spring...
Angular GitHub Link: https://github.com/shameed1910/angula...
-------------------------------------------------------------------------------------------------------------------------------
Boot strap installation:
npm install jquery --save
npm install ngx-bootstrap bootstrap --save

Add the below lines code to Angular.json file

 "styles": [
              "src/styles.css",
              "node_modules/bootstrap/dist/css/bootstrap.min.css"
            ],
            "scripts": [
              "node_modules/jquery/dist/jquery.min.js",
              "node_modules/bootstrap/dist/js/bootstrap.min.js"
            ]
-------------------------------------------------------------------------------------------------------------------------------
Angular Data table setup:

npm install datatables.net --save
npm install datatables.net-dt --save
npm install angular-datatables --save
npm install @types/jquery --save-dev
npm install @types/datatables.net --save-dev

Add the below lines code into Angular.json file

 "node_modules/datatables.net-dt/css/jquery.dataTables.css"
 "node_modules/datatables.net/js/jquery.dataTables.js"

Add the below lines code into app.modules.ts file
import { DataTablesModule } from 'angular-datatables';

imports: [
    DataTablesModule
  ]



