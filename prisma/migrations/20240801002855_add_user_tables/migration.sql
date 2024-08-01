/*
  Warnings:

  - You are about to alter the column `date` on the `booking` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.

*/
-- AlterTable
ALTER TABLE `booking` MODIFY `date` TIMESTAMP NOT NULL;
