CREATE TABLE comments (
  `id` INT(11) unsigned PRIMARY KEY NOT NULL auto_increment,
  `date` DATE not null,
  `content` VARCHAR(280) NOT NULL
) engine=InnoDB default charset=latin1;

INSERT INTO comments ('date', 'content') VALUES
  ('Date', 
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt vel, perspiciatis tempore quae vitae animi doloremque perferendis dolore, expedita alias necessitatibus sequi accusantium facere quasi eius natus? Expedita, nemo animi');

  ('Date', 
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt vel, perspiciatis tempore quae vitae animi doloremque perferendis dolore, expedita alias necessitatibus sequi accusantium facere quasi eius natus? Expedita, nemo animi');