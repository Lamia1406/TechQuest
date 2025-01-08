CREATE TABLE `User` (
  `id` uuid PRIMARY KEY COMMENT 'Primary key',
  `email` varchar(255) UNIQUE COMMENT 'User email',
  `username` text COMMENT 'Username of the user',
  `score` integer DEFAULT 0 COMMENT 'Score of the user in the game',
  `game_id` integer COMMENT 'Foreign key to games table, on delete cascade',
  `level_id` bigint COMMENT 'Foreign key to levels table',
  `encrypted_password` varchar(255),
  `email_confirmed_at` timestamp,
  `last_sign_in_at` timestamp,
  `created_at` timestamp,
  `updated_at` timestamp
);

CREATE TABLE `Levels` (
  `id` bigint PRIMARY KEY AUTO_INCREMENT COMMENT 'Primary key',
  `created_at` timestamp DEFAULT (now()) COMMENT 'Timestamp of creation',
  `number` smallint DEFAULT 0 COMMENT 'Level number',
  `title` varchar(255) COMMENT 'Title of the level',
  `description` text COMMENT 'Description of the level',
  `greeting` text COMMENT 'Greeting message for the level'
);

CREATE TABLE `Game` (
  `id` bigint PRIMARY KEY AUTO_INCREMENT COMMENT 'Primary key',
  `created_at` timestamp DEFAULT (now()) COMMENT 'Timestamp of creation',
  `level` bigint COMMENT 'Foreign key to levels table',
  `game_number` bigint DEFAULT 1 COMMENT 'Game number',
  `instruction` text COMMENT 'Game instructions'
);

CREATE TABLE `Game_Components` (
  `id` bigint UNIQUE PRIMARY KEY AUTO_INCREMENT COMMENT 'Primary key',
  `created_at` timestamp DEFAULT (now()) COMMENT 'Timestamp of creation',
  `game_id` bigint COMMENT 'Foreign key to games table',
  `name` varchar(255) UNIQUE COMMENT 'Name of the component',
  `description` text COMMENT 'Description of the component',
  `image_url` text COMMENT 'Image URL for the component',
  `hint` text COMMENT 'Hint for the component'
);

ALTER TABLE `User` ADD FOREIGN KEY (`game_id`) REFERENCES `Game` (`id`);

ALTER TABLE `User` ADD FOREIGN KEY (`level_id`) REFERENCES `Levels` (`id`);

ALTER TABLE `Game` ADD FOREIGN KEY (`level`) REFERENCES `Levels` (`id`);

ALTER TABLE `Game_Components` ADD FOREIGN KEY (`game_id`) REFERENCES `Game` (`id`);
