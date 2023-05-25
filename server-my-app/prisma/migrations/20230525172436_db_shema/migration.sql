-- CreateTable
CREATE TABLE `Food` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `type` ENUM('DOG', 'CAT') NOT NULL,
    `animalWeight` INTEGER NOT NULL,
    `daylyFood` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Water` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `type` ENUM('DOG', 'CAT') NOT NULL,
    `animalWeight` INTEGER NOT NULL,
    `daylyWater` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TimeTable` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `foodId` INTEGER NOT NULL,
    `waterId` INTEGER NOT NULL,
    `doses` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `TimeTable` ADD CONSTRAINT `TimeTable_foodId_fkey` FOREIGN KEY (`foodId`) REFERENCES `Food`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TimeTable` ADD CONSTRAINT `TimeTable_waterId_fkey` FOREIGN KEY (`waterId`) REFERENCES `Water`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
