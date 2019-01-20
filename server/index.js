require('dotenv').config();
// ***** Dependencies  ****
const express = require('express');
const massive = require('massive');
const { json } = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 3001;
// const session = require('express-session');
const app = express();
app.use(json());
app.use(cors());

// ***** Sessions Setup ****
// app.use(
// 	session({
// 		resave: false,
// 		saveUninitialized: true,
// 		secret: process.env.SESSION_SECRET,
// 		user: [],
// 		cookie: {
// 			maxAge: 1000 * 60 * 60 * 24 * 7 * 2 //2 weeks
// 		}
// 	})
// );

// ***** Massive Setup ****

// massive(process.env.CONNECTION_STRING)
// 	.then((dbInstance) => app.set('db', dbInstance))
//   .catch((err) => console.log(err));

  app.listen(port, () => {
    console.log(`Port ${port} is listening...`);
  });
