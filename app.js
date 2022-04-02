const express = require('express');
const app = express();

const data = require('./data.json');

app.get('/', (req, res) => {
  res.send(data);
});

app.get('/country=:cntry', (req, res) => {
  const { cntry } = req.params;

  const people = data.filter((person) => person.country.toLowerCase() === cntry.toLowerCase());

  if (people.length === 0) {
    res.status(404);
    res.send('No data found!');
  }

  res.send(people);
});

app.listen(5000, () => {
  console.log(`Serving on Port 5000`);
});
