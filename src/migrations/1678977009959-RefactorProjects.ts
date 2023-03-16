import {MigrationInterface, QueryRunner} from "typeorm";

export class RefactorProjects1678977009959 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "project" RENAME COLUMN "name" TO "projectName"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "project" RENAME COLUMN "projectName" TO "name"`);
    }

}
