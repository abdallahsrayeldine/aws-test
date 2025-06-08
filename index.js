const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 80;

const connection = mysql.createConnection({
  host: 'my-db.ctouaoi6amkx.us-east-1.rds.amazonaws.com',
  user: 'admin',
  password: 'password',
  database: 'db'
});

connection.connect(error => {
  if (error) throw error;
  console.log('Successfully connected to the database.');
});

app.get('/', (req, res) => {
  res.send('Hello from Node.js app connected to MySQL!');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
