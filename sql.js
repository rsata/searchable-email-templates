var mysql = require('mysql');


var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'FallClassic!',
  database : 'heat_templates_testdb'
});

connection.connect();

// CREATE DATABASE heat_templates_db

// connection.query('CREATE TABLE templates (EntryId varchar(255),EntryTime timestamp,Entry longtext,EntryTags varchar(255))', function(err, resp) {
//   if (err) throw err;
//   console.log(resp);
//   connection.end(function(err) {
//     // The connection is terminated now
//   });
// })


connection.query('SELECT * FROM templates', function(err, rows, fields) {
  if (err) throw err;
  console.log(rows)
  
  connection.end(function(err) {
      // The connection is terminated now
    });
})



// const EntryId = 'qporghqo31'; // this would be generated
// const EntryTime = '2016-01-01 00:00:01'; // this would be generated
// const Entry = 'Hi Peter,\n \nThanks for your message and I trust you are well.  My name is Reid and I work on your dedicated team supporting Greenville Consolidated School.  We took a look at your system and you have an account in Atlas.  Since you are not receiving the email, I went ahead and hard-reset your password.  Please head to https://ghslakers.rubiconatlas.org/ and enter your school email (Peter.McGuire@ghslakers.org).  After clicking next, you’ll be asked to enter your current password and set a new one.  In the current password field, use the password “values”\n \nThanks again Peter and please let us know if you experience any further difficulty logging in.","EntryTags":"login, log in, password"},{"EntryId":"5d1e4222-a870-4dfb-ab94-fa61399711c6","EntryTime":"2016-10-15T20:40:47.000Z","Entry":"Hi Lauren and Greg,\n \nThanks for your call the other day and I trust this message finds you well.  I wanted to let you know that we finished the requested changes to the standards in your system:\n·         Removed the MA VTE standards that don’t have 2014 in the name\n·         Removed all non-high school MA standards\n·         Removed “Science and Technology Engineering (2006)”\n·         Removed “Science and Technology Engineering Standards Draft (2013)”\n \nTeachers that had these standards in their units will not lose their work.  Rather, there will be a notification next to the standards notifying them to either update or change them. \n \nThanks again to you both, and please let us know if you have any questions.\n \nBest,\nReid';
// const EntryTags = 'tag2, tag6';

// const entryItems = {
//   EntryId: EntryId,
//   EntryTime: EntryTime,
//   Entry: Entry,
//   EntryTags: EntryTags
// }; 

// connection.query('INSERT INTO TEMPLATES SET ?', entryItems, function(err, result) {
//   if (err) throw err;

//   console.log(result);

//   connection.end(function(err) {
//     // The connection is terminated now
//   });
// })

// const deleteId = '1f6002e9-8fd9-465b-a214-e0435496de1f';


// connection.query('DELETE FROM TEMPLATES WHERE EntryId=?', deleteId, function(err, result) {
//   if (err) throw err;
//   console.log(result);
//   connection.end(function(err) {
//     // The connection is terminated now
//   });    
// })

