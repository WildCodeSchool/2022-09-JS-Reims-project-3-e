DROP TABLE IF EXISTS article;
DROP TABLE IF EXISTS communication_plans;
CREATE TABLE communication_plans (
  id int primary key NOT NULL AUTO_INCREMENT,
  title VARCHAR(100)NOT NULL,
  content VARCHAR(560) NOT NULL,
  image_url VARCHAR(255) NOT NULL
) engine=InnoDB default charset=utf8;

INSERT INTO communication_plans (title, content, image_url) 
VALUES 
  ("Identifier la cible", 
  "Un plan de communication ne s’adresse jamais à tout le monde. Sinon, il ne peut pas être efficace. Il doit donc être ciblé de manière précise, ce qui permettra d’atteindre les objectifs préalablement fixés. Cette étape permet d’identifier les segments ou les sous-segments de clientèle à atteindre.", "https://remeng.rosselcdn.net/sites/default/files/dpistyles_v2/ena_16_9_extra_big/2018/12/10/node_20755/530170/public/2018/12/10/B9717886568Z.1_20181210094232_000%2BGERCIOLFT.1-0.jpg?itok=t6jVgxVZ1544431361"),

  ("Trouver l’axe de communication", 
  "C’est la clé de voûte de la stratégie de communication. Il oriente la ligne éditoriale des communications et donne le ton. Il permet que l’ensemble des actions soient cohérentes. Il découle de l’objet de la communication, de l’audience cible et des objectifs.", "https://www.enedis.fr/sites/default/files/styles/image_full/public/images/2022-01/enedis-notre-histoire.jpg?itok=0cK77Jh0"),

  ("Déterminer le message",
  "Le message est le cœur même de la communication. Il doit être précis, cohérent et réalisé avec rigueur. Il doit également s’adapter au canal choisi. Par exemple, il ne sera pas diffusé de la même manière si la marque communique à la radio ou sur ses réseaux sociaux.", "https://www.creads.com/wp-content/uploads/2021/05/nouveau-logo-erdf-enedis-1024x682-1.jpg"),

  ("Fixer le budget", 
  "Il est essentiel de penser au budget alloué à la communication dès le départ. Pour cela, il faut évaluer les ressources matérielles, humaines et financières nécessaires pour les différentes actions de communication définies. Cela permet de fixer certaines barrières et de gagner du temps au moment de collaborer avec les différents fournisseurs.", "https://media.lesechos.com/api/v1/images/view/5d96cae73e454674b96053c5/1280x720/0601987664512-web-tete.jpg"),

  ("Passer à l’action", 
  "Après avoir établi le plan de communication à l’aide d’un tableau, il est temps de passer à l’action en déterminant le rôle de chaque collaborateur dans l’exécution du mandat, en créant les différents supports de communication, toujours en adaptant le message selon les canaux", "https://t4.ftcdn.net/jpg/03/72/67/23/360_F_372672331_idaVL5JtVPgfeUOEJkdrXBe8qgV3rOaQ.jpg");

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
    "$argon2id$v=19$m=16,t=2,p=1$emVmZXpmemZlemVmZWR6ZXplZg$rqZkhxu5YbqCGHPNrjJZpQ"
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