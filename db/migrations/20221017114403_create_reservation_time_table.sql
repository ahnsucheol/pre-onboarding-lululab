-- migrate:up
create Table reservation_time (
  id int primary key auto_increment not null,
  time varchar(50)
)

-- migrate:down
drop table reservation_time
