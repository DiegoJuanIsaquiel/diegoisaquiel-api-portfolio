import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateProjectTag1678988507102 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE TABLE "projects_tags" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "isActive" boolean NOT NULL DEFAULT true, "projectId" integer NOT NULL, "tagId" integer NOT NULL, CONSTRAINT "PK_4d68b1358bb5b766d3e78f32f57" PRIMARY KEY ("id"))');
        await queryRunner.query('ALTER TABLE "projects_tags" ADD CONSTRAINT "FK_6b8b07ad9bd6ef448cbdf02319c" FOREIGN KEY ("projectId") REFERENCES "project"("id") ON DELETE NO ACTION ON UPDATE NO ACTION');
        await queryRunner.query('CREATE UNIQUE INDEX "UQ_eef47538f6bb2077277c5666d83" ON "projects_tags" ("projectId", "tagId") ');
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('ALTER TABLE "projects_tags" DROP CONSTRAINT "FK_6b8b07ad9bd6ef448cbdf02319c"');
        await queryRunner.query('DROP TABLE "projects_tags"');
        await queryRunner.query('DROP INDEX "public"."UQ_eef47538f6bb2077277c5666d83"');
    }

}
