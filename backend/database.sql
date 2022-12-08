CREATE TABLE article (
  id INT(11) unsigned PRIMARY KEY NOT NULL auto_increment,
  title VARCHAR(100)NOT NULL,
  content VARCHAR(280) NOT NULL
) engine=InnoDB default charset=latin1;

INSERT INTO article (title, content) VALUES
  ('Titre Article', 
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt vel, perspiciatis tempore quae vitae animi doloremque perferendis dolore, expedita alias necessitatibus sequi accusantium facere quasi eius natus? Expedita, nemo animi'),

  ('Titre Article', 
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt vel, perspiciatis tempore quae vitae animi doloremque perferendis dolore, expedita alias necessitatibus sequi accusantium facere quasi eius natus? Expedita, nemo animi');
