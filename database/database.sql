CREATE DATABASE firstapi;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name varchar (40),
    email text
);

insert into users (name, email) values
('Elthon', 'elthon@gmail.com'),
('Elthon Ferreira', 'elthonferreira@gmail.com');