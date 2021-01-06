// Module Import
const express = require('express');
const usersController = require('./usersController');
const userCtr = require('./usersController');

// config
const PORT = 3050;

// Setup Server
const app = express();
app.use(express.json());

// API Routes
app.get('/api/users', userCtr.getUsers);
app.get('/api/users/:id', userCtr.getUser);
app.post('/api/users', userCtr.addUser);
app.put('/api/users/:id', userCtr.editUser);
app.delete('/api/users/:id', userCtr.deleteUser);

app.get('*', (req, res) => {
  res.status(404).send('Route not found');
});

app.listen(PORT, () => {
  console.log(`Node Server Started on Port ${PORT}`);
});
