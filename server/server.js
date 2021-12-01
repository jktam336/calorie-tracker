const express = require('express')
const app = express()
const port = 3000
const path = require('path');
const apiRouter = require('./routes/api');
const cors = require('cors');

// enable all CORS requests
app.use(cors());

// handle parsing request body
app.use(express.json());
//  app.use(express.urlencoded({ extended: true })); // might not need this

// define route handlers
app.use('/api', apiRouter);

// statically serve everything in the build folder on the route '/public'
app.use('/build', express.static(path.join(__dirname, '../public')));

// // serve index.html on the route '/'
// app.get('/', (req, res) => {
//   return res.status(200).sendFile(path.join(__dirname, '../index.html'));
// });

// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.status(404).send('This is not the page you\'re looking for...'));

// express error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(port);