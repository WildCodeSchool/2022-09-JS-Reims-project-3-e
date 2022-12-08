CREATE TABLE article (
  id INT(11) unsigned PRIMARY KEY NOT NULL auto_increment,
  title VARCHAR(100)NOT NULL,
  content VARCHAR(280) NOT NULL
) engine=InnoDB default charset=latin1;

INSERT INTO article (date, content) VALUES
  ('Lorem Title 1', 
  'Lorem Content 1');

  ('Lorem Title 2', 
  'Lorem Content 2');

  ('Lorem Title 3', 
  'Lorem Content 3');