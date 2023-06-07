-- CreateTable
CREATE TABLE `Commands` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `command` ENUM('WATER', 'FOOD') NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
