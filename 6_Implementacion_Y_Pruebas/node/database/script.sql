use ChangeYourCity;

create table user(
	email varchar primary key,
    firstName varchar,
    lastName1 varchar,
    lastName2 varchar,
    municipality varchar,
    zipCode varchar,
    address varchar,
    phone integer,
    password varchar not null
)