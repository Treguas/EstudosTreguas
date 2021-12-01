const express = require('express');
const app     = express();
const routes  = require('routes');


app.listen(3000, function () {

});





// const express = require('express');
// const cors = require('cors');
// const routes = require('./src/routes');
// const bodyParser = require('body-parser');
// require('dotenv').config();
// const session = require('express-session');
// var MemoryStore = require('memorystore')(session);

// const app = express();

// app.use(session({
//   cookie: { maxAge: 7200000 },
//   store: new MemoryStore({
//     checkPeriod: 7200000
//   }),
//   resave: false,
//   secret: process.env.SESSION_SECRET,
//   name: process.env.SESSION_NAME
// }));

// app.use(bodyParser.urlencoded({
//   extended: true
// }));
// app.use(cors());
// app.use(express.json());
// app.use(routes);

// app.listen(process.env.PORT, function () {
//   console.log(`App listening on port ${process.env.PORT}!`);
// });
