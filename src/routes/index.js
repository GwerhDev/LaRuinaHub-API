const router = require('express').Router();

const auth = require('../controllers/auth');
const admin = require('../controllers/admin');
const user = require('../controllers/get-user');
const account = require('../controllers/account');
const innerLogin = require('../controllers/login-inner');
const googlLogin = require('../controllers/login-google');
const innerSignup = require('../controllers/signup-inner');
const googleSignup = require('../controllers/signup-google');

const mercadopago = require("../integrations/mercadopago.js");
const yt = require('../controllers/yt');

router.use("/auth", auth);
router.use("/user", user);
router.use("/account", account);
router.use("/login-inner", innerLogin);
router.use("/login-google", googlLogin);
router.use("/signup-inner", innerSignup);
router.use("/signup-google", googleSignup);

router.use("/mercadopago", mercadopago);

module.exports =  router;