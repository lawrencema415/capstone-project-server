//  -- packages --
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 4000;
const routes = require('./routes');
const session = require('express-session');


// -- Middleware --

// BodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Session
app.use(session({
  secret: "...",
  resave: false,
  saveUninitialized: false
}))

const corsOptions = {
  origin: ['http://localhost:3000'],
  credentials: true,
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions));

// -- Routes --

app.get('/', (req,res) => res.send(`<h1>Welcome to Musiq</h1>`));


// -- Server --
app.listen(PORT , ()=> console.log(`Muisq server is running.`));
