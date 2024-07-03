var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb",
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");

    var sql = "INSERT INTO Customers (name, address) VALUES ?";
    var values = [
        ['Jason','Highway 37'],
        ['Sulaiman', 'Pattani'],
        ['Ris', 'Satun'],
        ['Anas', 'Songkla'],
        ['Dee', 'Songkla']
    ];

    con.query(sql, [values], function(err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
    });

    con.end(); 
});