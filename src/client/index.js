import getCal from './json_schema/calendar'
import getUser from './json_schema/user'
import getUser_Calendar from './json_schema/user-calendar'

import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

var app = express()



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();

router.get('/user', cors(), function(req, res) {
    res.json(getUser());
});
router.get('/calendar', cors(), function(req, res) {
    res.json(getCal());
});
router.get('/user-calendar', cors(), function(req, res) {
    res.json(getUser_Calendar());
});

// REGISTER OUR ROUTES -------------------------------
app.use('/avatar', router);
//Start the server
app.listen(port);
console.log('Port:'+port)
console.log('Base URL:','localhost:'+port + '/avatar')
console.log('Routes:','/user','/calendar','/user-calendar')
