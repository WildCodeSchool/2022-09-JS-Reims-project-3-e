DROP TABLE IF EXISTS article;
CREATE TABLE article (
  id int primary key NOT NULL AUTO_INCREMENT,
  title VARCHAR(100)NOT NULL,
  content VARCHAR(280) NOT NULL
) engine=InnoDB default charset=latin1;

INSERT INTO article (title, content) 
VALUES 
  ("Titre Article", 
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt vel, perspiciatis tempore quae vitae animi doloremque perferendis dolore, expedita alias necessitatibus sequi accusantium facere quasi eius natus? Expedita, nemo animi"),

  ("Titre Article", 
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt vel, perspiciatis tempore quae vitae animi doloremque perferendis dolore, expedita alias necessitatibus sequi accusantium facere quasi eius natus? Expedita, nemo animi");

DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    admin boolean not null default false,
    email varchar(255) UNIQUE NOT NULL,
    firstname varchar(255) NOT NULL,
    lastname varchar(255) NOT NULL,
    login varchar(255) DEFAULT NULL,
    city varchar(255) NOT NULL,
    hashedPassword varchar(255) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

INSERT INTO users (admin, email, firstname, lastname, login, city, hashedPassword)
VALUES
  (
    true,
    "farid@mail.fr",
    "Farid",
    "Himeur",
    "farid13",
    "Chalons en Champagne",
    "123"
  ),
   (
    true,
    "simon@mail.fr",
    "Simon",
    "Boullado",
    "simon13",
    "Chalons en Champagne",
    "123"
  ),
   (
    true,
    "olivier@mail.fr",
    "Olivier",
    "Nou",
    "olivier13",
    "Reims",
    "123"
  ),
   (
    true,
    "adnan@mail.fr",
    "Adnan",
    "Bakaev",
    "adnan13",
    "Reims",
    "123"
  ), 
  (
    true,
    "pierre-yves@mail.fr",
    "Pierre-Yves",
    "Beaugosse",
    "pierre-yves13",
    "Reims",
    "123"
  );