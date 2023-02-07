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
    "$argon2id$v=19$m=16,t=2,p=1$emVmZXpmemZlemVmZWR6ZXplZg$rqZkhxu5YbqCGHPNrjJZpQ"
  ),
   (
    true,
    "simon@mail.fr",
    "Simon",
    "Bullado",
    "simon13",
    "Chalons en Champagne",
    "$argon2id$v=19$m=16,t=2,p=1$emVmZXpmemZlemVmZWR6ZXplZg$rqZkhxu5YbqCGHPNrjJZpQ"
  ),
   (
    true,
    "olivier@mail.fr",
    "Olivier",
    "Nou",
    "olivier13",
    "Reims",
    "$argon2id$v=19$m=16,t=2,p=1$emVmZXpmemZlemVmZWR6ZXplZg$rqZkhxu5YbqCGHPNrjJZpQ"
  ),
   (
    true,
    "adnan@mail.fr",
    "Adnan",
    "Bakaev",
    "adnan13",
    "Reims",
    "$argon2i$v=19$m=16,t=2,p=1$RWJ0ZFRGUkZGSWpqcjNiRA$0obQ10g+qgCx0VDKNqILfg"
  ), 
  (
    true,
    "pierre-yves@mail.fr",
    "Pierre-Yves",
    "Beaugosse",
    "pierre-yves13",
    "Reims",
    "$argon2id$v=19$m=16,t=2,p=1$emVmZXpmemZlemVmZWR6ZXplZg$rqZkhxu5YbqCGHPNrjJZpQ"
  );

  DROP TABLE IF EXISTS article;
CREATE TABLE communication_plans (
  id int primary key NOT NULL AUTO_INCREMENT,
  title VARCHAR(100)NOT NULL,
  content VARCHAR(560) NOT NULL,
  fk_author_id INT NOT NULL, 
  FOREIGN KEY (fk_author_id) REFERENCES users(id )
) engine=InnoDB default charset=utf8;

INSERT INTO communication_plans (title, content, fk_author_id) 
VALUES 
  ("Identifier la cible", 
  "Un plan de communication ne s’adresse jamais à tout le monde. Sinon, il ne peut pas être efficace. Il doit donc être ciblé de manière précise, ce qui permettra d’atteindre les objectifs préalablement fixés. Cette étape permet d’identifier les segments ou les sous-segments de clientèle à atteindre.", "3"),

  ("Trouver l’axe de communication", 
  "C’est la clé de voûte de la stratégie de communication. Il oriente la ligne éditoriale des communications et donne le ton. Il permet que l’ensemble des actions soient cohérentes. Il découle de l’objet de la communication, de l’audience cible et des objectifs.", "2"),

  ("Déterminer le message",
  "Le message est le cœur même de la communication. Il doit être précis, cohérent et réalisé avec rigueur. Il doit également s’adapter au canal choisi. Par exemple, il ne sera pas diffusé de la même manière si la marque communique à la radio ou sur ses réseaux sociaux.", "1"),

  ("Fixer le budget", 
  "Il est essentiel de penser au budget alloué à la communication dès le départ. Pour cela, il faut évaluer les ressources matérielles, humaines et financières nécessaires pour les différentes actions de communication définies. Cela permet de fixer certaines barrières et de gagner du temps au moment de collaborer avec les différents fournisseurs.", "4"),

  ("Passer à l’action", 
  "Après avoir établi le plan de communication à l’aide d’un tableau, il est temps de passer à l’action en déterminant le rôle de chaque collaborateur dans l’exécution du mandat, en créant les différents supports de communication, toujours en adaptant le message selon les canaux", '1');

CREATE TABLE comments (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    comment varchar(560) NOT NULL,
    author_id INT NOT NULL,
    communication_plan_id INT NOT NULL,
    FOREIGN KEY (author_id) REFERENCES users(id ),
    FOREIGN KEY (communication_plan_id) REFERENCES communication_plans(id )
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

INSERT INTO comments (comment, author_id, communication_plan_id )
VALUES
  ("Merci pour l'information !",'1', '1'),
  ("Merci pour l'information !",'2', '1'),
  ("Merci pour l'information !",'3', '2'),
  ("Merci pour l'information !",'4', '2'),
  ("Merci pour l'information !",'1', '3'),
  ("Merci pour l'information !",'2', '3'),
  ("Merci pour l'information !",'1', '4'),
  ("Merci pour l'information !",'2', '4');
