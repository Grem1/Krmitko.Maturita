/*
  Warnings:

  - Added the required column `type` to the `TimeTable` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `timetable` ADD COLUMN `type` ENUM('DOG', 'CAT') NOT NULL;
