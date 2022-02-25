BEGIN;

INSERT INTO "user" ("id", "email", "first_name", "last_name", "pseudo", "password", "birthday", "postal_code", "image") VALUES
(1, 'test@test.test', 'test', 'test', 'toto', 'password', '1991-02-26 18:50:00', '93310', 'https://www.fillmurray.com/g/200/300'),
(2, 'raf@raf.raf', 'rafal', 'honig', 'rafou', 'rafifou', '1995-05-28 18:50:00', '75020', 'https://www.fillmurray.com/g/200/300'),
(3, 'far@far.far', 'Johnny', 'Alidé', 'firebase', 'optic2000', '1953-01-10 18:50:00', '69000', 'https://thumbs.dreamstime.com/b/vecteur-d-ic%C3%B4ne-homme-affaires-image-masculine-de-profil-avatar-m%C3%A2le-182095609.jpg');


INSERT INTO "event" ("id", "title", "description", "date_hour", "capacity", "price", "adress","image", "user_id" ) VALUES
(1,'Match de foot à la télé', 'Soiree match Lille/PSG et apéro dans un bar à Paris XVII (lieu à définir ensemble)', '2022-02-26 18:50:00', '10', 'GRATUIT','PARIS XVII','https://images.indianexpress.com/2018/07/football-reuters-m.jpg?w=759&h=422&imflag=true', 3),
(2,'Balade en montagne', 'Je vous propose de faire une randonnée au Pic du Montcalm, niveau intermédiaire, avec pique-nique. Covoiturage possible ! ', '2022-02-28 15:00:00', '8', 'GRATUIT','Marc 09240 ','https://www.survoldefrance.fr/photos/highdef/41/41027.jpg', 2),
(3,'Tennis en double', 'Match de tennis en double (niveau débutant) dans la commune de Saint Gilles', '2022-03-02 11:00:00', '4', 'PAYANT','Saint Gilles', 'https://www.fillmurray.com/g/200/300', 1);

INSERT INTO "category" ("id", "name", "color", "image") VALUES 
(1, 'Jeu', '#cd6155', '/src/Doc/Image-Cat/jeu.svg'),
(2, 'Bien-être', ' #af7ac5 ', '/src/Doc/Image-Cat/bienetre.svg'),
(3, 'Cuisine', '#5499c7', '/src/Doc/Image-Cat/cuisine.svg'),
(4, 'Culture', '#48c9b0', '/src/Doc/Image-Cat/culture.svg'),
(5, 'Musique', ' #52be80', '/src/Doc/Image-Cat/musique.svg'),
(6, 'Manuel', '#f4d03f', '/src/Doc/Image-Cat/manuel.svg'),
(7, 'Rencontre', ' #eb984e ', '/src/Doc/Image-Cat/rencontre.svg'),
(8, 'Sport', '#aab7b8', '/src/Doc/Image-Cat/sport.svg'),
(9, 'Plein Air', ' #34495e', '/src/Doc/Image-Cat/pleinair.svg'),
(10, 'Voyage', '#8B4513', '/src/Doc/Image-Cat/voyage.svg'),
(11, 'Noctambule', '#FF69B4', '/src/Doc/Image-Cat/noctambule.svg'),
(12, 'Autre', '#00BFFF', '/src/Doc/Image-Cat/autre.svg');

INSERT INTO "event_has_user" ("user_id", "event_id", "comment") VALUES
(3, 3, 'Voici mon numéro : 06 78 88 88 88, les participants peuvent me contacter pour voir ensemble les modalités'),
(1, 3, 'Ok super m''essage envoyé ! J''attends ton retour! ');

INSERT INTO "event_has_category" ("event_id", "category_id") VALUES
(1, 3),
(2, 3),
(2, 5),
(3, 2),
(3, 5);

COMMIT;