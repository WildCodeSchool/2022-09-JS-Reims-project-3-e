CREATE TABLE item (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO item (title) VALUES ('Stuff'), ('Doodads');

create table article (
  id int(11) unsigned primary key not null auto_increment,
  title varchar(100) not null,
  content varchar(280) NOT NULL
) engine=InnoDB default charset=latin1;

insert into article (title, content) VALUES
  ('Lorem ipsum 1', 'Lorem content 1'),
  ('Lorem ipsum 2', 'Lorem content 2');
