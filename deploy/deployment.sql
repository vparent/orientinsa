
CREATE DATABASE IF NOT EXISTS orientinsa_db;
use orientinsa_db;

CREATE TABLE User (
    ID int NOT NULL AUTO_INCREMENT,
    GRP int,
    Nom varchar(20),
    Prenom varchar(20),
    Login varchar(10),
    Password varchar(64),
    PRIMARY KEY(ID)
);

CREATE TABLE Teacher (
    ID int NOT NULL,
    FOREIGN KEY (ID) REFERENCES User(ID),
    PRIMARY KEY (ID)
);

CREATE TABLE Tag (
    ID int NOT NULL AUTO_INCREMENT,
    GPS int,
    PRIMARY KEY (ID)
);

CREATE TABLE Course (
    ID int NOT NULL AUTO_INCREMENT,
    TID int NOT NULL,
    ORD int,
    EveryBodyMustValidate int,
    PRIMARY KEY(ID, TID),
    FOREIGN KEY (TID) REFERENCES Tag(ID)
);

CREATE TABLE Race(
    ID int NOT NULL AUTO_INCREMENT,
    CID int,
    Day DATETIME,
    Start DATETIME,
    Finish DATETIME,
    PRIMARY KEY (ID),
    FOREIGN KEY (CID) REFERENCES Course(ID)
);

CREATE TABLE Groups (
    GID int NOT NULL AUTO_INCREMENT,
    UID int NOT NULL,
    FOREIGN KEY (UID) REFERENCES User(ID),
    PRIMARY KEY (GID, UID)
);

CREATE TABLE Participate(
    GID int NOT NULL,
    RID int NOT NULL,
    FOREIGN KEY (GID) REFERENCES Groups(GID),
    FOREIGN KEY (RID) REFERENCES Race(ID),
    PRIMARY KEY (GID, RID)
);

CREATE TABLE Auth_device (
    ID int NOT NULL AUTO_INCREMENT,
    Auth_key int NOT NULL,
    PRIMARY KEY (ID, Auth_key)
);

CREATE TABLE Validation (
    UID int NOT NULL,
    TID int NOT NULL,
    RID int NOT NULL,
    Auth_device_ID int NOT NULL,
    Val_time DATETIME NOT NULL,
    FOREIGN KEY (UID) REFERENCES User(ID),
    FOREIGN KEY (RID) REFERENCES Race(ID),
    FOREIGN KEY (TID) REFERENCES Tag(ID),
    FOREIGN KEY (Auth_device_ID) REFERENCES Auth_device(ID),
    PRIMARY KEY (UID, TID, RID, Auth_device_ID, Val_time)
);

CREATE USER IF NOT EXISTS 'orientinsa'@'localhost' IDENTIFIED BY 'Azerty';
GRANT SELECT, INSERT, UPDATE, DELETE ON orientinsa_db.* TO 'orientinsa'@'localhost';
