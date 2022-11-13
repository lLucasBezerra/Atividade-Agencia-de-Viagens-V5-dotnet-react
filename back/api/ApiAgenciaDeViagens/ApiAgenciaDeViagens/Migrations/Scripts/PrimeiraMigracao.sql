CREATE TABLE IF NOT EXISTS `__EFMigrationsHistory` (
    `MigrationId` varchar(150) CHARACTER SET utf8mb4 NOT NULL,
    `ProductVersion` varchar(32) CHARACTER SET utf8mb4 NOT NULL,
    CONSTRAINT `PK___EFMigrationsHistory` PRIMARY KEY (`MigrationId`)
) CHARACTER SET=utf8mb4;

START TRANSACTION;

ALTER DATABASE CHARACTER SET utf8mb4;

CREATE TABLE `clientes` (
    `Id` int NOT NULL AUTO_INCREMENT,
    `cpf` VARCHAR(11) CHARACTER SET utf8mb4 NULL,
    `origem` VARCHAR(30) CHARACTER SET utf8mb4 NULL,
    `dataIda` DATE NOT NULL,
    `dataVolta` DATE NOT NULL,
    CONSTRAINT `PK_clientes` PRIMARY KEY (`Id`)
) CHARACTER SET=utf8mb4;

CREATE TABLE `Promocoes` (
    `Id` int NOT NULL AUTO_INCREMENT,
    `nomePromocao` VARCHAR(25) CHARACTER SET utf8mb4 NULL,
    `desconto` TINYINT NOT NULL,
    CONSTRAINT `PK_Promocoes` PRIMARY KEY (`Id`)
) CHARACTER SET=utf8mb4;

CREATE TABLE `Voos` (
    `Id` int NOT NULL AUTO_INCREMENT,
    `companhiaAerea` VARCHAR(30) CHARACTER SET utf8mb4 NULL,
    `preco` DECIMAL(10,2) NOT NULL,
    CONSTRAINT `PK_Voos` PRIMARY KEY (`Id`)
) CHARACTER SET=utf8mb4;

CREATE TABLE `Destinos` (
    `Id` int NOT NULL AUTO_INCREMENT,
    `pais` VARCHAR(50) CHARACTER SET utf8mb4 NULL,
    `cidade` VARCHAR(50) CHARACTER SET utf8mb4 NULL,
    `obraRelacionada` VARCHAR(100) CHARACTER SET utf8mb4 NULL,
    `PromocaoId` int NULL,
    CONSTRAINT `PK_Destinos` PRIMARY KEY (`Id`),
    CONSTRAINT `FK_Destinos_Promocoes_PromocaoId` FOREIGN KEY (`PromocaoId`) REFERENCES `Promocoes` (`Id`)
) CHARACTER SET=utf8mb4;

CREATE TABLE `Escolhas` (
    `ClienteId` int NOT NULL,
    `DestinoId` int NOT NULL,
    `vooId` int NOT NULL,
    CONSTRAINT `PK_Escolhas` PRIMARY KEY (`ClienteId`, `DestinoId`, `vooId`),
    CONSTRAINT `FK_Escolhas_clientes_ClienteId` FOREIGN KEY (`ClienteId`) REFERENCES `clientes` (`Id`) ON DELETE CASCADE,
    CONSTRAINT `FK_Escolhas_Destinos_DestinoId` FOREIGN KEY (`DestinoId`) REFERENCES `Destinos` (`Id`) ON DELETE CASCADE,
    CONSTRAINT `FK_Escolhas_Voos_vooId` FOREIGN KEY (`vooId`) REFERENCES `Voos` (`Id`) ON DELETE CASCADE
) CHARACTER SET=utf8mb4;

INSERT INTO `Destinos` (`Id`, `cidade`, `obraRelacionada`, `pais`, `PromocaoId`)
VALUES (1, 'Cinque-Terre', 'Luca', 'Itália', NULL);
INSERT INTO `Destinos` (`Id`, `cidade`, `obraRelacionada`, `pais`, `PromocaoId`)
VALUES (2, 'París', 'Ratatoulle', 'Itália', NULL);
INSERT INTO `Destinos` (`Id`, `cidade`, `obraRelacionada`, `pais`, `PromocaoId`)
VALUES (3, 'Sicília', 'Poderoso Chefão', 'Itália', NULL);
INSERT INTO `Destinos` (`Id`, `cidade`, `obraRelacionada`, `pais`, `PromocaoId`)
VALUES (4, 'Condado de Down', 'Game of Thrones', 'Irlanda', NULL);
INSERT INTO `Destinos` (`Id`, `cidade`, `obraRelacionada`, `pais`, `PromocaoId`)
VALUES (6, 'Los Angeles', 'Sitcoms em geral', 'Estados Unidos', NULL);

INSERT INTO `Promocoes` (`Id`, `desconto`, `nomePromocao`)
VALUES (1, 20, 'Promo Inaugural');
INSERT INTO `Promocoes` (`Id`, `desconto`, `nomePromocao`)
VALUES (2, 35, 'Novo Destino');
INSERT INTO `Promocoes` (`Id`, `desconto`, `nomePromocao`)
VALUES (3, 40, 'Black Friday');

INSERT INTO `Voos` (`Id`, `companhiaAerea`, `preco`)
VALUES (1, 'LATAM Airlines', 2500.0);
INSERT INTO `Voos` (`Id`, `companhiaAerea`, `preco`)
VALUES (2, 'Delta Airlines', 3100.0);
INSERT INTO `Voos` (`Id`, `companhiaAerea`, `preco`)
VALUES (3, 'Avianca', 5000.0);
INSERT INTO `Voos` (`Id`, `companhiaAerea`, `preco`)
VALUES (4, 'Azul', 2700.0);

INSERT INTO `Destinos` (`Id`, `cidade`, `obraRelacionada`, `pais`, `PromocaoId`)
VALUES (5, 'Atlanta', 'Stranger Things', 'Georgia', 1);

INSERT INTO `Destinos` (`Id`, `cidade`, `obraRelacionada`, `pais`, `PromocaoId`)
VALUES (7, 'Londres', 'Sandman', 'Inglaterra', 2);

CREATE INDEX `IX_Destinos_PromocaoId` ON `Destinos` (`PromocaoId`);

CREATE INDEX `IX_Escolhas_DestinoId` ON `Escolhas` (`DestinoId`);

CREATE INDEX `IX_Escolhas_vooId` ON `Escolhas` (`vooId`);

INSERT INTO `__EFMigrationsHistory` (`MigrationId`, `ProductVersion`)
VALUES ('20221113202444_PrimeiraMigracao', '6.0.10');

COMMIT;

