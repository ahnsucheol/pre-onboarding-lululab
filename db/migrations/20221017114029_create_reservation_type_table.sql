-- migrate:up
create Table reservation_type (
  id int primary key auto_increment not null,
  type varchar(50)
)

-- migrate:down
drop table reservation_type
