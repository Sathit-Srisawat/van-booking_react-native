//Run node of Customer
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const connection = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'van_booking'
});
const app = express();
app.get('/table_queue', function (req, res) {
    connection.getConnection(function (err, connection) {
    connection.query('SELECT * FROM table_queue', function (error, results, fields) {
      if (error) throw error;
      res.send(results)
    });
  });
});

app.get('/profile', function (req, res) {
  connection.getConnection(function (err, connection) {
  connection.query('SELECT * FROM profile', function (error, results, fields) {
    if (error) throw error;
    res.send(results)
  });
});
});

app.get('/comment', function (req, res) {
  connection.getConnection(function (err, connection) {
  connection.query('SELECT * FROM comment', function (error, results, fields) {
    if (error) throw error;
    res.send(results)
  });
});
});

app.get('/chart', function (req, res) {
  connection.getConnection(function (err, connection) {
  connection.query('SELECT * FROM chart', function (error, results, fields) {
    if (error) throw error;
    res.send(results)
  });
});
});

app.listen(3001, () => {
 console.log('Go to http://localhost:3001/chart so you can see the data.');
});

app.listen(3001, () => {
 console.log('Go to http://localhost:3001/table_queue so you can see the data.');
});

app.listen(3002, () => {
  console.log('Go to http://localhost:3001/profile so you can see the data.');
 });

 app.listen(3003, () => {
  console.log('Go to http://localhost:3001/comment so you can see the data.');
 });