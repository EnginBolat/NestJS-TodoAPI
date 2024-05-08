-- CreateTable
CREATE TABLE "Log" (
    "id" SERIAL NOT NULL,
    "log" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "date" TEXT NOT NULL,

    CONSTRAINT "Log_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Log" ADD CONSTRAINT "Log_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
