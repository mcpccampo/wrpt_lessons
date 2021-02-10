require('dotenv').config();
const express = require('express');
const massive = require('massive');
const puppiesCtrl = require('./puppiesCtrl');
const { CONNECTION_STRING, PORT } = process.env;

const app = express();
//express.json() parses req.body from json to js
app.use(express.json());

app.get('/api/puppies', puppiesCtrl.getAllPuppies);
app.get('/api/puppies/:id', puppiesCtrl.getPuppy);
app.post('/api/puppies', puppiesCtrl.addPuppy);
app.put('/api/puppies/:id', puppiesCtrl.updatePuppy);
app.delete('/api/puppies/:id', puppiesCtrl.deletePuppy);

massive({
  connectionString: CONNECTION_STRING,
  ssl: { rejectUnauthorized: false },
}).then((dbInstance) => {
  app.set('db', dbInstance);
  //This is identicalish to saying app.db = dbInstance

  app.listen(PORT, () => {
    console.log(`Woohoo! Server running on ${PORT}`);
  });
});
