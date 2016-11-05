var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var db_pw = require('./secrets');

var mysql = require('mysql'); // what is best practice for this? within module or outside?
// var sql = require('./sql');

app.use('/*', function (req, res, next) {

  // var allowedOrigins = ['http://bewildered-eye.surge.sh'];
  // var origin = req.headers.origin;
  // if(allowedOrigins.indexOf(origin) > -1){
  //      res.setHeader('Access-Control-Allow-Origin', origin);
  // }
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://supriyapandya.com');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', false);

  // Pass to next layer of middleware
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : db_pw,
  database : 'heat_templates_testdb'
});


app.get('/entries', function(req, res, next) {
	// console.log(sql.getAllTemplates())
  // res.send(sql.getAllTemplates());

	connection.connect();

	connection.query('SELECT * FROM templates', function(err, rows, fields) {
	  if (err) throw err;
    res.send(JSON.stringify(rows))
	  console.log(JSON.stringify(rows))

	  connection.end(function(err) {
	    // The connection is terminated now
      // Don't need this? Should close automatically? http://stackoverflow.com/questions/880885/is-closing-the-mysql-connection-important
	  }); 
	})
})

app.post('/new_entry', function(req, res, next) {
	const entryItems = {
		EntryId: req.body.id,
		EntryTime: new Date(),
		Entry: req.body.entry,
		EntryTags: req.body.tags
	}; 

	connection.connect();

	connection.query('INSERT INTO templates SET ?', entryItems, function(err, result) {
	  if (err) throw err;
	  console.log(result);
    res.send(result);
	  connection.end(function(err) {
	    // The connection is terminated now
	  });    
	})
})

app.post('/delete_entry', function(req, res, next) {

  const deleteId = req.body.id;

  connection.connect();

  connection.query('DELETE FROM TEMPLATES WHERE EntryId=?', deleteId, function(err, result) {
    if (err) throw err;
    console.log(result);
    res.send(result);
    connection.end(function(err) {
      // The connection is terminated now
    });    
  })
})


app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
