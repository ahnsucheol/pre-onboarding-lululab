-- migrate:up
create Table availableTimeByHospital (
  id int primary key auto_increment not null,
  time_id int,
  hospital_id int,
  FOREIGN KEY (time_id) REFERENCES reservation_time(id) ON UPDATE CASCADE,
  FOREIGN KEY (hospital_id) REFERENCES hospitals(id) ON UPDATE CASCADE
)

-- migrate:down
drop table availableTimeByHospital