//  -- packages --
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 4000;
const routes = require('./routes');
const session = require('express-session');


// -- Middleware --
app.use((req,res,next) => {
  const url = req.url;
  const method = req.method;
  const requestedAt = new Date().toLocaleString();
  console.table({url, method, requestedAt});
  next();
})

// BodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Session
app.use(session({
  secret: "beep beep...",
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
// Auth Route
app.use('/auth', routes.auth);

app.use('/artist', routes.artist);




// -- Server --
app.listen(PORT , ()=> console.log(`Muisq server is running.`));
