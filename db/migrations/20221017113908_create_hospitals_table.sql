-- migrate:up
create table hospitals (
  id int primary key auto_increment not null,
  name varchar(50),
  phone_number varchar(50)
)


-- migrate:down
drop table hospitals;
