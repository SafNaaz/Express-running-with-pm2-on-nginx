npm install express
npm install pm2 -g

install nginx -linux needed

------------------------------------

Command : npm start

Browser : localhost:6700/products

Control-C to stop development server

----------------------------------------------

Running Production Server

Command : pm2 start app.js / npm start
Command : nginx

Browser : localhost:8082/products

Command : nginx -s stop
Command : pm2 stop all  / npm stop


-----------------------

see current nginx  -  $ sudo nginx -T