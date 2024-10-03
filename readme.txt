
Setup
1. open empty directory
2. run "npm init"
3. run "npx express-generator --view=hbs"

   install dependencies:
     > npm install

   run the app:
     > SET DEBUG=unfallia-net-backend:* & npm start

4. npm install nodemon // to allow updates to the js to reflect live
5. copy over files from David Miller's bootstrap templates
6. npm install bootstrap
7. it was also necessary for me to run "Set-ExecutionPolicy Unrestricted" in powershell
  to reverse, "Set-ExecutionPolicy Restricted"
8. npm install mongoose mongodb

9. installing Angular CLI: "npm install -g @angular/cli"
10. Go to frontend folder. 
11. creating a new Angular app: ng new unfallia-net (or ng new unfallia-net --standalone false)
12. creating a new Angular application: ng serve -o
13. create new components like "ng generate component about" or "ng g c about"


Also install these:
npm install helmet --save //this is needed for x-frame-options / frameguard