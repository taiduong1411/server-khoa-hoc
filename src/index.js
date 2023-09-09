const express = require('express')
const app = express();
const bodyParser = require('body-parser');

const port = 3000;

// EXPRESS CONFIG
app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


// DATABASE
const database = require('./config/database');
const Account = require('./controller/AccountController');
database.connect();
// CONTROLLER
const AccountController = require('./controller/AccountController');
// ROUTER
const AccountRouter = require('./router/AccountRouter');

app.use('/api/account', AccountRouter);










app.listen(port, () => {
    console.log(`server is running in port ${port}`)
})