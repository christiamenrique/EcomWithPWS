
// loads environment variables from a .env file into process.env. Password protection
require('dotenv').config();
// provides a robust set of features to develop web and mobile applications.
const express = require('express');
// will get you a PATH with all of the executables available to npm scripts
const path = require("path");
//Provide loggins
const morgan = require('morgan');
// secure HTTP headers returned by your Express apps
const helmet = require('helmet');
// responsible for all the asynchronous or synchronous file I/O operations.
const fs = require('fs');
// refers to how an application’s endpoints (URIs) respond to client requests.
const mongoose = require('mongoose');
let uri = ""



const app = express();
const PORT = process.env.PORT || 5050;


const accessLogStream = fs.createWriteStream(path.join(__dirname, 'morgan.log'), { flags: 'a' })

//   instantiate middleware  
app.use(morgan('dev', { stream: accessLogStream }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet());
app.use(express());

// Serve up static assets (heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  uri = process.env.ATLAS_URI  // connection string for Atlas here  
} else {
  // uri = process.env.LOCAL_URI  // connection string for localhost mongo here 
  uri = process.env.ATLAS_URI 
}

// connection to database
mongoose.connect(uri, {
   useNewUrlParser: true, 
  useCreateIndex: true, 
  useUnifiedTopology: true})


const connection = mongoose.connection;
connection.once('open', () => {
console.log("MongoDB connection is live");
})

// api
const usersRoutes = require('./Routes/User')
const contactRouter = require('./Routes/contact');
const productsRouter = require('./Routes/products');
// const signUpRouter = require('./Routes/signUp');

app.get('/api', (req, res) => {
	res.json({message: "API root"})
})
app.use('/api/users', usersRoutes)
app.use('/api/contacts', contactRouter);
app.use('/api/products',productsRouter);

// Creating live connection to reactjs app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

//Launch Server
app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}!`)
})

module.exports = app;