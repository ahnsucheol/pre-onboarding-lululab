-- migrate:up
create Table reservations (
  id int primary key auto_increment not null,
  hospital_id int,
  user_id int,
  reserve_type int,
  reserve_date date,
  reserve_time varchar(100),
  reserve_number varchar(100),
  created_at datetime DEFAULT NOW(),
  updatded_at datetime DEFAULT NOW() ON UPDATE NOW(),
  FOREIGN KEY (hospital_id) REFERENCES hospitals(id) ON UPDATE CASCADE,
  FOREIGN KEY (user_id) REFERENCES users(id) ON UPDATE CASCADE,
  FOREIGN KEY (reserve_type) REFERENCES reservation_type(id) ON UPDATE CASCADE
)

-- migrate:down
drop table reservations
