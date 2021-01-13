const express = require('express');
const app = express();

app.use(express.json());

//book endpoint
const bookCtrl = require('./bookCtrl');
app.get('/api/books', bookCtrl.getAllBooks);
app.get('/api/books/:id', bookCtrl.getBook);
app.get('/api/booksQuery', bookCtrl.getAllQuery)
app.post('/api/addBooks', bookCtrl.addBook)

app.listen(3050, () => {
  console.log('App listening on port 3050!');
});
