import { BaseEntity } from "src/common/crud/base.entity";
import { ProjectCategoryEnum } from "src/common/enum/project-category.enum";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('project')
export class ProjectEntity extends BaseEntity {

  //#region Public Properties

  @Column({ nullable: false })
  public name!: string;

  @Column({ nullable: null })
  public description!: string;

  @Column({ nullable: null })
  public englishDescription!: string;

  @Column({ nullable: null })
  public imageUrl!: string;

  @Column({ nullable: null, enum: ProjectCategoryEnum, default: ProjectCategoryEnum.WEB_APP })
  public category!: ProjectCategoryEnum;

  @Column()
  public gitRepositoryUrl!: string;

  @Column()
  public projectLinkUrl!: string;

  @Column({ nullable: null, default: false })
  public isConfidential!: boolean;

  //#endregion

  //#region Relation

  // @OneToMany(() => SubjectContractEntity, subjectContract => subjectContract.contract)
  // public subjectsContracts?: SubjectContractEntity[];

  //#endregion

}