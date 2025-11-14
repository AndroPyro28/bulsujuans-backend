/*
  Warnings:

  - The values [OPEN,IN_PROGRESS,CLOSED,CANCELLED] on the enum `TicketStatusEnum` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `complaint_status` on the `complaint` table. All the data in the column will be lost.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "TicketStatusEnum_new" AS ENUM ('PENDING', 'RESOLVED', 'REJECTED');
ALTER TABLE "public"."ticket" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "ticket" ALTER COLUMN "status" TYPE "TicketStatusEnum_new" USING ("status"::text::"TicketStatusEnum_new");
ALTER TYPE "TicketStatusEnum" RENAME TO "TicketStatusEnum_old";
ALTER TYPE "TicketStatusEnum_new" RENAME TO "TicketStatusEnum";
DROP TYPE "public"."TicketStatusEnum_old";
ALTER TABLE "ticket" ALTER COLUMN "status" SET DEFAULT 'PENDING';
COMMIT;

-- AlterTable
ALTER TABLE "complaint" DROP COLUMN "complaint_status";

-- AlterTable
ALTER TABLE "ticket" ALTER COLUMN "status" SET DEFAULT 'PENDING';

-- DropEnum
DROP TYPE "public"."ComplaintStatus";
