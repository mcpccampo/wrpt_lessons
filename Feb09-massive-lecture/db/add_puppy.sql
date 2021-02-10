INSERT INTO puppies
  (breed, age, name)
VALUES
  ($3, $2, $1);
-- returning *;
SELECT *
FROM puppies; 