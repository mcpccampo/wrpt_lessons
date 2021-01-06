const data = require('../data.json');

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
    console.log('reached getAllQuery Query');
    const { genre } = req.query;
    let booksQuery = [];
    if (genre) {
      booksQuery = data.filter((element) => element.genre === genre);
    }
    res.status(200).send(booksQuery);
  },
};
