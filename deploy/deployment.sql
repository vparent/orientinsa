
CREATE DATABASE IF NOT EXISTS orientinsa_db;
use orientinsa_db;

CREATE TABLE User (
    ID int NOT NULL AUTO_INCREMENT,
    Login varchar(10),
    GRP int,
    Nom varchar(20),
    Prenom varchar(20),
    Password varchar(64),
    PRIMARY KEY(ID, Login)
);

CREATE TABLE Teacher (
    ID int NOT NULL,
    FOREIGN KEY (ID) REFERENCES User(ID),
    PRIMARY KEY (ID)
);

CREATE TABLE Tag (
    ID int NOT NULL AUTO_INCREMENT,
    Nb int,
    LatDeg int,
    LatMin int,
    LatSec int,
    LongDeg int,
    LongMin int,
    LongSec int,
    Seed varchar(10),
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
    Duration int,
    PRIMARY KEY (ID),
    FOREIGN KEY (CID) REFERENCES Course(ID)
);

CREATE TABLE Groups (
    GID int NOT NULL AUTO_INCREMENT,
    UID int NOT NULL,
    StartTime int,
    FOREIGN KEY (UID) REFERENCES User(ID),
    PRIMARY KEY (GID, UID)
);

CREATE TABLE Auth_device (
    ID int NOT NULL AUTO_INCREMENT,
    Seed varchar(10) NOT NULL,
    PRIMARY KEY (ID, Seed)
);

CREATE TABLE Participate(
    UID int NOT NULL,
    RID int NOT NULL,
    Auth_device_ID int NOT NULL,
    FOREIGN KEY (RID) REFERENCES Race(ID),
    FOREIGN KEY (Auth_device_ID) REFERENCES Auth_device(ID), 
    PRIMARY KEY (UID, RID)
);

CREATE TABLE Validation (
    UID int NOT NULL,
    TID int NOT NULL,
    RID int NOT NULL,
    Auth_device_ID int NOT NULL,
    Code int NOT NULL,
    Val_time DATETIME NOT NULL,
    FOREIGN KEY (UID) REFERENCES User(ID),
    FOREIGN KEY (RID) REFERENCES Race(ID),
    FOREIGN KEY (TID) REFERENCES Tag(ID),
    FOREIGN KEY (Auth_device_ID) REFERENCES Auth_device(ID),
    PRIMARY KEY (UID, TID, RID, Auth_device_ID, Val_time, Code)
);

CREATE USER IF NOT EXISTS 'orientinsa'@'10.0.0.1' IDENTIFIED BY 'Azerty';
GRANT SELECT, INSERT, UPDATE, DELETE ON orientinsa_db.* TO 'orientinsa'@'10.0.0.1';
