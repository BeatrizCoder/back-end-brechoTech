-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "typeHard" TEXT NOT NULL,
    "modelHard" TEXT NOT NULL,
    "priceHard" TEXT NOT NULL,
    "yearuseHard" INTEGER NOT NULL,
    "productPhotosHard" TEXT NOT NULL,
    "videoHard" TEXT NOT NULL,
    "usedHard" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Categorias" (
    "id" TEXT NOT NULL,
    "hardwerEntrada" TEXT,
    "hardwerSaida" TEXT,
    "hardwerProcessamento" TEXT,
    "hardwerArmazenamento" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Categorias_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vendedor" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "region" TEXT NOT NULL,
    "reputation" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Vendedor_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Vendedor_email_key" ON "Vendedor"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Vendedor_cpf_key" ON "Vendedor"("cpf");
