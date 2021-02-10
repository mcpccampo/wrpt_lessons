module.exports = {
  getAllPuppies: (req, res) => {
    const db = req.app.get('db');

    db.get_all_puppies()
      .then((puppies) => {
        res.status(200).send(puppies);
        return;
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send(err);
        return;
      });
  },
  getPuppy: (req, res) => {
    const db = req.app.get('db');
    const { id } = req.params;

    db.get_puppy([id])
      .then((puppy) => {
        if (puppy.length) {
          return res.status(200).send(puppy);
        } else {
          res.sendStatus(404);
          return;
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send(err);
        return;
      });
  },
  addPuppy: (req, res) => {
    const db = req.app.get('db');
    const { breed, age, name } = req.body;

    db.add_puppy([name, age, breed])
      .then((response) => {
        res.status(200).send(response);
        return;
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send(err);
        return;
      });
  },

  updatePuppy: (req, res) => {
    const db = req.app.get('db');
    const { id } = req.params;
    let originalPuppy;

    db.get_puppy([id])
      .then((puppy) => {
        if (puppy.length) {
          originalPuppy = puppy[0];
        } else {
          res.sendStatus(400);
          return;
        }
        const {
          name = originalPuppy.name,
          breed = originalPuppy.breed,
          age = originalPuppy.age,
        } = req.body;

        db.update_puppy([name, breed, age, id])
          .then((updatedPuppy) => {
            res.status(200).send(updatedPuppy);
            return;
          })
          .catch((err) => {
            console.log(err);
            res.status(500).send(err);
            return;
          });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send(err);
        return;
      });
  },
  deletePuppy: (req, res) => {
    const db = req.app.get('db');
    const { id } = req.params;

    db.delete_puppy([id])
      .then((response) => {
        res.sendStatus(200);
        return;
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send(err);
      });
  },
};
