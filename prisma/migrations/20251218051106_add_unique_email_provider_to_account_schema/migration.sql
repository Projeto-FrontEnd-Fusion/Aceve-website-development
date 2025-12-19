/*
  Warnings:

  - A unique constraint covering the columns `[accountId,providerId]` on the table `account` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "account_accountId_providerId_key" ON "account"("accountId", "providerId");
