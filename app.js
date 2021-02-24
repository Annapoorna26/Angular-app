var express = require('express');
var path = require('path');
var http = require('http');

var indexRouter = require('./server/routes/index');
var usersRouter = require('./server/routes/users');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, './dist/my-app')));
app.get('/', function (req,res) {
  res.sendFile('./dist/my-app/index.html', { root: __dirname });
});
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

var port  = process.env.PORT || 3000;
app.set('port', port);
var server = http.createServer(app);

server.listen(port);
server.on('listening', function() {
  console.log(`server listening on port ${port}`)
})
