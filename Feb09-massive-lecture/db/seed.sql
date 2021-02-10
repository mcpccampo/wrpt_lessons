-- Delete Table
drop table if exists puppies

-- Create
CREATE TABLE puppies (
  id SERIAL PRIMARY KEY,
  breed VARCHAR(200) NOT NULL,
  age INTEGER NOT NULL,
  name VARCHAR(50) NOT NULL
);

-- Insert
insert INTO puppies(breed,age,name)
values('German Shepard',2,'Shadow')

insert INTO puppies(breed,age,name)
values('Pomski',4,'Yoggie')

insert INTO puppies(breed,age,name)
values('Great Dane',1,'Scooby.')