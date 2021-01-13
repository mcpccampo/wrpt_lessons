const data = require('../data.json');
let id = data.length + 1;

module.exports = {
  getAllBooks: (req, res) => {
    console.log('reached getAllBooks EndPoint');
    res.status(200).send(data);
  },

  getBook: (req, res) => {
    console.log('reached Books EndPoint By ID');
    const { id } = req.params;
    const foundBook = data.find((element) => element.id === parseInt(id));
    if (foundBook) {
      res.status(200).send(foundBook);
    } else {
      res.status(400).send('No Book Found');
    }
  },

  getAllQuery: (req, res) => {
    console.log('reached getAllQuery EndPoint');
    const { genre } = req.query;
    let booksQuery = [];
    if (genre) {
      booksQuery = data.filter((element) => element.genre === genre);
    }
    res.status(200).send(booksQuery);
  },

  addBook: (req, res) => {
    console.log('reach addBook EndPoint');
    const { author, title, year, cover, genre } = req.body;
    const newBook = {
      id,
      author,
      title,
      year,
      cover,
      genre,
    };
    data.push(newBook);
    res.status(200).send(data);
    id++;
  },

  deleteBook: (req, res) => {
    const { id } = req.params;
    let index = data.findIndex((element) => element.id === +id);

    if (index >= 0) {
      data.splice(index, 1);
    } else {
      res.status(404).send('not found...');
    }
  },
};
