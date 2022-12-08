CREATE TABLE comments (
  `id` INT(11) unsigned PRIMARY KEY NOT NULL auto_increment,
  `date` DATE not null,
  `content` VARCHAR(280) NOT NULL
) engine=InnoDB default charset=latin1;

INSERT INTO item (title) VALUES ('Stuff'), ('Doodads');

CREATE TABLE article (
  id int(11) unsigned primary key not null auto_increment,
  title varchar(100) not null,
  content varchar(280) NOT NULL
) engine=InnoDB default charset=latin1;

INSERT INTO article (title, content) VALUES
  ('Titre Article', 
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt vel, perspiciatis tempore quae vitae animi doloremque perferendis dolore, expedita alias necessitatibus sequi accusantium facere quasi eius natus? Expedita, nemo animi');

  ('Titre Article', 
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt vel, perspiciatis tempore quae vitae animi doloremque perferendis dolore, expedita alias necessitatibus sequi accusantium facere quasi eius natus? Expedita, nemo animi');
INSERT INTO comments ('date', 'content') VALUES
  ('Date', 
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt vel, perspiciatis tempore quae vitae animi doloremque perferendis dolore, expedita alias necessitatibus sequi accusantium facere quasi eius natus? Expedita, nemo animi');

  ('Date', 
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt vel, perspiciatis tempore quae vitae animi doloremque perferendis dolore, expedita alias necessitatibus sequi accusantium facere quasi eius natus? Expedita, nemo animi');