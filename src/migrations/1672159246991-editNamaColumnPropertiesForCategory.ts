import { MigrationInterface, QueryRunner } from "typeorm";

export class editNamaColumnPropertiesForCategory1672159246991 implements MigrationInterface {
    name = 'editNamaColumnPropertiesForCategory1672159246991'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "properties" DROP CONSTRAINT "FK_1947d7d596ac4f17841d03197df"`);
        await queryRunner.query(`ALTER TABLE "properties" RENAME COLUMN "categoriId" TO "categoryId"`);
        await queryRunner.query(`ALTER TABLE "properties" ADD CONSTRAINT "FK_a82b56d3d456c30b8c630cba0c6" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "properties" DROP CONSTRAINT "FK_a82b56d3d456c30b8c630cba0c6"`);
        await queryRunner.query(`ALTER TABLE "properties" RENAME COLUMN "categoryId" TO "categoriId"`);
        await queryRunner.query(`ALTER TABLE "properties" ADD CONSTRAINT "FK_1947d7d596ac4f17841d03197df" FOREIGN KEY ("categoriId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
