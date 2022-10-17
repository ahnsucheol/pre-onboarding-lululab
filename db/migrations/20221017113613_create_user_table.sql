-- migrate:up
create Table users (
  id int primary key auto_increment not null,
  name varchar(50),
  phone_number varchar(50),
  email varchar(100) unique,
  password varchar(255),
  noshow tinyint default 0
)

-- migrate:down
drop table users