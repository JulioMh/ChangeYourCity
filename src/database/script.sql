use ChangeYourCity;

create table user(
	email varchar(255) primary key,
  firstName varchar(255),
  lastName1 varchar(255),
  lastName2 varchar(255),
  municipality varchar(255),
  zipCode varchar(255),
  address varchar(255),
  phone integer,
  password varchar(255) not null
);

create table propuesta(
	id integer AUTO_INCREMENT primary key,
	titulo varchar(255),
  localidad varchar(255),
  informacion varchar(1000),
	creator varchar(255)
);
