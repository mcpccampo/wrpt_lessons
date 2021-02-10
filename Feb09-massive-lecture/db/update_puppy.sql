UPDATE puppies
SET name = $1, breed = $2, age = $3
WHERE id = $4
returning *;