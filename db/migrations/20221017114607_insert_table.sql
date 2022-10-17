-- migrate:up
INSERT INTO `users` (`id`,`name`,`phone_number`,`email`,`noshow`,`password`) VALUES (1,'user1','01011111111','user1@gmail.com',0,'$2b$10$6shpA3LLEplrBJKEHTaQEOQN5hGobbfOyDwM4hOfxocoD43Yrj8Vi');
INSERT INTO `users` (`id`,`name`,`phone_number`,`email`,`noshow`,`password`) VALUES (2,'user2','01022222222','user2@gmail.com',0,'$2b$10$CC6S48Y36cjvZJNDyIUIeOq46DiQ1C3jPSFEKl7nGywZ0oXs6NUbK');
INSERT INTO `users` (`id`,`name`,`phone_number`,`email`,`noshow`,`password`) VALUES (3,'user3','01033333333','user3@gmail.com',0,'$2a$10$GTUEXt0lc/JqAQPDUedg9u4gwZGOlQwvSo4Ido739FMFIPuhPTsea');
INSERT INTO `users` (`id`,`name`,`phone_number`,`email`,`noshow`,`password`) VALUES (4,'user4','01033333333','user4@gmail.com',0,'$2a$10$yuVVcoCCLkMXAiFUaR9kH.Qg73v7ksUUJknxspj8bxRF6OG.wCUWi');
INSERT INTO `users` (`id`,`name`,`phone_number`,`email`,`noshow`,`password`) VALUES (5,'user5','01033333333','user5@gmail.com',0,'$2a$10$D1DFa6s0OszdzTvM2666XudZMMOiXEfoCb2rxD9d3LRJTdRqBNxKK');
INSERT INTO `users` (`id`,`name`,`phone_number`,`email`,`noshow`,`password`) VALUES (6,'user7','01033333333','user7@gmail.com',0,'$2a$10$UE4yMw0/.nXxcD3bX7DHSOSin7jjQTVzB6e0VWY1bqcPzJyOmtefG');
INSERT INTO `users` (`id`,`name`,`phone_number`,`email`,`noshow`,`password`) VALUES (7,'user8','01033333333','user8@gmail.com',0,'$2a$10$ek0hJuWso4wGL6.GSxs9mO4g/rrWrwIFENe0GJWYYFbdtGpMN3xuq');

INSERT INTO `hospitals` (`id`,`name`,`phone_number`) VALUES (1,'1번병원','11111111');
INSERT INTO `hospitals` (`id`,`name`,`phone_number`) VALUES (2,'2번병원','2222222');
INSERT INTO `hospitals` (`id`,`name`,`phone_number`) VALUES (3,'3번병원','3333333');

INSERT INTO `reservation_type` (`id`,`type`) VALUES (1,'진료');
INSERT INTO `reservation_type` (`id`,`type`) VALUES (2,'검진');
INSERT INTO `reservation_type` (`id`,`type`) VALUES (3,'수술');

INSERT INTO `reservations` (`id`,`hospital_id`,`user_id`,`reserve_type`,`reserve_date`,`reserve_time`,`reserve_number`,`created_at`,`updatded_at`) VALUES (5,2,2,1,'2022-10-17','11:00','22022-10-1711:0012','2022-10-17 17:05:01','2022-10-17 17:05:01');
INSERT INTO `reservations` (`id`,`hospital_id`,`user_id`,`reserve_type`,`reserve_date`,`reserve_time`,`reserve_number`,`created_at`,`updatded_at`) VALUES (6,3,3,1,'2022-10-17','11:00','32022-10-1711:0013','2022-10-17 17:35:36','2022-10-17 17:35:36');
INSERT INTO `reservations` (`id`,`hospital_id`,`user_id`,`reserve_type`,`reserve_date`,`reserve_time`,`reserve_number`,`created_at`,`updatded_at`) VALUES (7,2,5,1,'2022-10-19','11:00','52022-10-1710:0012','2022-10-17 17:39:19','2022-10-17 18:13:17');
INSERT INTO `reservations` (`id`,`hospital_id`,`user_id`,`reserve_type`,`reserve_date`,`reserve_time`,`reserve_number`,`created_at`,`updatded_at`) VALUES (8,2,6,1,'2022-10-19','10:00','62022-10-1710:0012','2022-10-17 20:18:39','2022-10-17 20:22:15');

INSERT INTO `reservation_time` (`id`,`time`) VALUES (1,'09:00');
INSERT INTO `reservation_time` (`id`,`time`) VALUES (2,'09:30');
INSERT INTO `reservation_time` (`id`,`time`) VALUES (3,'10:00');
INSERT INTO `reservation_time` (`id`,`time`) VALUES (4,'10:30');
INSERT INTO `reservation_time` (`id`,`time`) VALUES (5,'11:00');
INSERT INTO `reservation_time` (`id`,`time`) VALUES (6,'11:30');

INSERT INTO `availableTimeByHospital` (`id`,`hospital_id`,`time_id`) VALUES (23,1,1);
INSERT INTO `availableTimeByHospital` (`id`,`hospital_id`,`time_id`) VALUES (24,1,2);
INSERT INTO `availableTimeByHospital` (`id`,`hospital_id`,`time_id`) VALUES (25,1,3);
INSERT INTO `availableTimeByHospital` (`id`,`hospital_id`,`time_id`) VALUES (26,1,4);
INSERT INTO `availableTimeByHospital` (`id`,`hospital_id`,`time_id`) VALUES (27,1,5);
INSERT INTO `availableTimeByHospital` (`id`,`hospital_id`,`time_id`) VALUES (28,1,6);
INSERT INTO `availableTimeByHospital` (`id`,`hospital_id`,`time_id`) VALUES (29,2,3);
INSERT INTO `availableTimeByHospital` (`id`,`hospital_id`,`time_id`) VALUES (30,2,4);
INSERT INTO `availableTimeByHospital` (`id`,`hospital_id`,`time_id`) VALUES (31,2,5);
INSERT INTO `availableTimeByHospital` (`id`,`hospital_id`,`time_id`) VALUES (32,3,5);
INSERT INTO `availableTimeByHospital` (`id`,`hospital_id`,`time_id`) VALUES (33,3,6);
-- migrate:down
delete from users, hospitals, reservation_type, reservation_time, reservations, availableTimeByHospital, reservation_type_id, reservation_time_id, unavailable;
