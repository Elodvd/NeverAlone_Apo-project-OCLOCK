BEGIN;

INSERT INTO "user" ("id", "email", "first_name", "last_name", "pseudo", "password", "birthday", "postal_code", "image") VALUES
(1, 'test@test.test', 'test', 'test', 'toto', 'password', '1991-02-26 18:50:00', '93310', 'https://www.fillmurray.com/g/200/300');


INSERT INTO "event" ("id", "title", "description", "date", "capacity", "price", "adress", "city","category", "user_id" ) VALUES
(1,'Match de foot à la télé', 'Soiree match Lille/PSG et apéro dans un bar à Paris XVII (lieu à définir ensemble)', '2022-02-28T14:00:00.000Z', '10', 'GRATUIT','rue du parc', 'Paris','sport', 1),
(2,'Balade en montagne', 'Je vous propose de faire une randonnée au Pic du Montcalm, niveau intermédiaire, avec pique-nique. Covoiturage possible ! ', '2022-02-28T14:00:00.000Z', '8', 'GRATUIT','rue des gravillons', 'Toulouse','rencontre', 1),
(3,'Tennis en double', 'Match de tennis en double (niveau débutant) dans la commune de Saint Gilles', '2022-02-28T14:00:00.000Z', '4', 'PAYANT', 'rue des papillons','Saint Gilles', 'autre', 1);

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


COMMIT;