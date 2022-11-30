-- CreateTable
CREATE TABLE "User" (
    "userId" TEXT NOT NULL,
    "avatarUrl" TEXT,
    "password" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "Donation" (
    "donationId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "typeDonation" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "donationAmount" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UUID" TEXT NOT NULL,

    CONSTRAINT "Donation_pkey" PRIMARY KEY ("donationId")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Donation" ADD CONSTRAINT "Donation_UUID_fkey" FOREIGN KEY ("UUID") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;
