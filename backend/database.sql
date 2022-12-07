CREATE TABLE item (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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