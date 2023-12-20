require('dotenv').config();
const express = require('express');
const session = require('express-session'); 
const createError = require('http-errors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const methodOverride = require('method-override');
const cors = require('cors')
const checkCookie = require('./middlewares/cookieCheck');
const SpotifyWebApi = require('spotify-web-api-node');



const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');
const authRouter = require('./routes/auth');


const albumsApiRouter = require('./routes/api/albumsRouter');
const bandsApiRouter = require('./routes/api/bandsRouter');
const merchsApiRouter = require('./routes/api/merchsRouter');
const cartApiRouter = require('./routes/api/cartRouter');


const localsCheck = require('./middlewares/localsCheck'); 

const passport = require('passport');
const {loginGoogleInitialize} = require('./services/passport')

loginGoogleInitialize();


const app = express();

const spotifyWebApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  redirectUri: process.env.SPOTIFY_REDIRECT_URL
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use(methodOverride('_method'))
.use(cors())


// Configuracion de express-session
app.use(session({
  secret: 'elbichosiuu', 
  resave: false,
  saveUninitialized: true,
 // cookie: {
  //  maxAge: 300000}
}));

// recordar usuario
app.use(checkCookie);
app.use(localsCheck);

app.use(passport.initialize())
app.use(passport.session())

app.use('/', indexRouter);
app.use('/users', usersRouter)
app.use('/products', productsRouter)
app.use('/auth', authRouter)

app.use('/api/albums', albumsApiRouter)
app.use('/api/bands', bandsApiRouter)
app.use('/api/merchs', merchsApiRouter)
app.use('/api/cart', cartApiRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
