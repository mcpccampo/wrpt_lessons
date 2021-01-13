// Data import
const data = require('../data.json');
let id = data.length + 1;

module.exports = {
  getUsers: (req, res) => {
    console.log('~> Reached Users Endpoint..');

    const { email } = req.query;
    let users = [...data];

    if (email) {
      let filteredUsers = users.filter((e) => {
        return e.email.includes(email);
      });

      if (filteredUsers && filteredUsers.length) {
        return res.status(200).send(filteredUsers);
      } else {
        return res.sendStatus(404);
      }
    }

    res.status(200).send(data);
  },

  getUser: (req, res) => {
    console.log('~> Reached users By/ID EndPoint');
    const { id } = req.params;
    let users = [...data];
    let user = users.find((e) => e.id === parseInt(id));
    if (id) {
      res.status(200).send(user);
    } else {
      res.sendStatus(404);
    }
  },

  addUser: (req, res) => {
    console.log('~> Reached AddUser Endpoint..');
    console.log('request body', req.body);

    let { name, email } = req.body;
    let user = { name, email, id };

    data.push(user);
    id++;

    console.log(`Added User ... ${data[data.length - 1]}`);
    res.status(200).send(data);
  },

  editUser: (req, res) => {
    console.log('~> Reached editUser Endpoint');
    console.log('Request Body', req.body);

    const { id } = req.params;
    const { email, name } = req.body;

    let index = data.findIndex((e) => e.id === +id);

    let updatedUser = {
      id: data[index].id,
      email: email || data[index].email,
      name: name || data[index].name,
    };

    data[index] = updatedUser;

    res.status(200).send(data);
  },

  deleteUser: (req, res) => {
    console.log(`~> Reached Delete User Route`);
    const { id } = req.params;

    let index = data.findIndex((e) => e.id === +id);

    if (index === -1) {
      res.status(404).send('Account not Found');
    }

    data.splice(index, 1);
    res.status(200).send(data);
  },
};
