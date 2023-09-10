const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const MongoStore = require('connect-mongo');
require('dotenv').config();
const cors = require('cors');
const port = process.env.PORT;

// EXPRESS CONFIG
app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());


app.use(session({
    cookie: { maxAge: (1000 * 60 * 40) },
    resave: false,
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    store: MongoStore.create({
        mongoUrl: "mongodb://localhost:27017/server-khoa-hoc",
    }),
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