# mean-upload
Sample project of a full stack application. 

See working demo here: http://mean-upload.herokuapp.com

### Summary
This project demonstrates my knowledge of creating full stack web applications using current front-end technologies
including AngularJS, NodeJS, and Express.js.

MEAN-Upload is a sample web application that allows users to upload files. Currently the files are persisted in temporary file system storage. Information for each file is also added to a JSON object which is returned to the front end by consuming the data through a RESTful API developed using Express.js and NodeJS on the backend. The JSON data is then used to populated the table with the "uploaded files". 

**_(Note: This application is hosted on a free dyno on Heroku. The files uploaded are kept in temp file system storage 
and will not persist between uses of the application.)_**

Unit test using Karma/Jasmine were done to demonstrate my knowledge of writing unit test and testing Javascript code.

![Alt text](/public/images/karma_console.png?raw=true "Karma Console Output")

### To Dos

* Store file information in a mySQL database

### Credits
* **CSS Framework**-  Bulma https://github.com/jgthms/bulma
* **Front-End File Upload**- https://github.com/nervgh/angular-file-upload
