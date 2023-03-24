import { BaseEntity } from "src/common/crud/base.entity";
import { ProjectCategoryEnum } from "src/common/enum/project-category.enum";
import { ProjectTagEntity } from "src/modules/projects-tags/entities/project-tag.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ProjectProxy } from "../models/project.proxy";

@Entity('project')
export class ProjectEntity extends BaseEntity {

  //#region Constructor

  /**
   * Construtor padrão
   */
  constructor(
    partial: Partial<ProjectEntity> | ProjectEntity,
  ) {
    super();

    Object.assign(this, { ...partial });
  }

  //#endregion


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

  //#region Relations

  @OneToMany(() => ProjectTagEntity, projectTags => projectTags.project)
  public projectTags?: ProjectTagEntity[];

  //#endregion

  //#region Public Methods

  /**
   * Método que retorna um proxy da entidade
   */
  public toProxy(): ProjectProxy {
    return new ProjectProxy(this);
  }

  //#endregion

}