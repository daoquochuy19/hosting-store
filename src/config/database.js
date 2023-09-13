const mysql = require('mysql2');

const connection = mysql.createConnection({
	host : 'localhost',
	database : 'hosting-store',
	user : 'root',
	password : ''
});

connection.connect(function(error){
	if(error)
	{
		throw error;
	}
	else
	{
		console.log('MySQL Database is connected Successfully');
	}
});
// connection.query(
//     'select * from user',
//     function(err, results, fields) {
//       console.log(results); // results contains rows returned by server
//     }
//   );

module.exports = connection;