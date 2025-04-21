CREATE DATABASE IF NOT EXISTS tta_bdd;

USE tta_bdd;

CREATE USER 'administrateur'@'localhost' IDENTIFIED BY 'MotDePasseUltraSecure123!';

GRANT ALL PRIVILEGES ON tta_bdd.* TO 'admin'@'localhost';

FLUSH PRIVILEGES;

CREATE TABLE ville (
   Id_ville INT AUTO_INCREMENT,
   ville_nom VARCHAR(50) NOT NULL,
   PRIMARY KEY(Id_ville),
   UNIQUE(ville_nom)
);

CREATE TABLE categorie (
   Id_categorie INT AUTO_INCREMENT,
   categorie_libelle VARCHAR(50) NOT NULL,
   PRIMARY KEY(Id_categorie)
);

CREATE TABLE specialite (
   Id_specialite INT AUTO_INCREMENT,
   specialite_libelle VARCHAR(150) NOT NULL,
   Id_categorie INT NOT NULL,
   PRIMARY KEY(Id_specialite),
   FOREIGN KEY(Id_categorie) REFERENCES categorie(Id_categorie)
);

CREATE TABLE artisan (
   Id_artisan INT AUTO_INCREMENT,
   artisan_nom VARCHAR(250) NOT NULL,
   artisan_email VARCHAR(250) NOT NULL,
   artisan_site VARCHAR(250),
   artisan_apropos VARCHAR(1000) NOT NULL,
   artisan_note DECIMAL(2,1) NOT NULL,
   artisan_top BOOLEAN NOT NULL,
   Id_specialite INT NOT NULL,
   Id_ville INT NOT NULL,
   PRIMARY KEY(Id_artisan),
   UNIQUE(artisan_email),
   FOREIGN KEY(Id_specialite) REFERENCES specialite(Id_specialite),
   FOREIGN KEY(Id_ville) REFERENCES ville(Id_ville)
);

-- Créer des tables temporaires le temps de faire les relations

CREATE TABLE import_ville (
  ville_nom VARCHAR(50)
);

CREATE TABLE import_categorie (
  categorie_libelle VARCHAR(50)
);

CREATE TABLE import_specialite (
  specialite_libelle VARCHAR(150),
  categorie_libelle VARCHAR(50)
);

CREATE TABLE import_artisan (
  artisan_nom VARCHAR(250),
  artisan_email VARCHAR(250),
  artisan_site VARCHAR(250),
  artisan_apropos VARCHAR(1000),
  artisan_note DECIMAL(2,1),
  artisan_top BOOLEAN,
  specialite_libelle VARCHAR(150),
  ville_nom VARCHAR(50)
);

-- Insérer les datas dans les tables temporaires après l'exécution de ce script

SHOW VARIABLES LIKE 'secure_file_priv';

LOAD DATA INFILE 'C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/ville.csv'
INTO TABLE import_ville
CHARACTER SET latin1  
FIELDS TERMINATED BY ','  
LINES TERMINATED BY '\n';

LOAD DATA INFILE 'C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/categorie.csv'  
INTO TABLE import_categorie
CHARACTER SET latin1  
FIELDS TERMINATED BY ','  
LINES TERMINATED BY '\n';

LOAD DATA INFILE 'C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/specialite.csv'  
INTO TABLE import_specialite
CHARACTER SET latin1
FIELDS TERMINATED BY ','  
LINES TERMINATED BY '\n';

LOAD DATA INFILE 'C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/artisan.csv'
INTO TABLE import_artisan
CHARACTER SET latin1
FIELDS TERMINATED BY ','  
LINES TERMINATED BY '\n';

-- Créer les relations et importer dans les vraies tables

INSERT INTO ville (ville_nom)
SELECT DISTINCT ville_nom FROM import_ville;

INSERT INTO categorie (categorie_libelle)
SELECT DISTINCT categorie_libelle FROM import_categorie;

INSERT INTO specialite (specialite_libelle, Id_categorie)
SELECT i.specialite_libelle, c.Id_categorie
FROM import_specialite i
JOIN categorie c ON c.categorie_libelle = i.categorie_libelle;

INSERT INTO artisan (
  artisan_nom, artisan_email, artisan_site, artisan_apropos,
  artisan_note, artisan_top, Id_specialite, Id_ville
)
SELECT 
  i.artisan_nom, i.artisan_email, i.artisan_site, i.artisan_apropos,
  i.artisan_note, i.artisan_top,
  s.Id_specialite, v.Id_ville
FROM import_artisan i
JOIN specialite s ON s.specialite_libelle = i.specialite_libelle
JOIN ville v ON v.ville_nom = i.ville_nom;

-- Si toutes les datas ont été bien insérées alors effacer les tables temporaires

DROP TABLE IF EXISTS import_ville;
DROP TABLE IF EXISTS import_categorie;
DROP TABLE IF EXISTS import_specialite;
DROP TABLE IF EXISTS import_artisan;