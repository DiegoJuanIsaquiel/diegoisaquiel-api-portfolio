import { BaseEntity } from "src/common/crud/base.entity";
import { ProjectCategoryEnum } from "src/common/enum/project-category.enum";
import { ProjectTagEntity } from "src/modules/projects-tags/entities/project-tag.entity";
import { ProjectEntity } from "src/modules/projects/entities/project.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { TagProxy } from "../models/tag.proxy";

@Entity('tag')
export class TagEntity extends BaseEntity {
  //#region Constructor

  /**
   * Construtor padrão
   */
  constructor(
    partial: Partial<TagEntity> | TagEntity,
  ) {
    super();

    Object.assign(this, { ...partial });
  }

  //#endregion

  //#region Public Properties

  @Column({ nullable: false })
  public name!: string;

  @Column({ nullable: null })
  public backgroundColor!: string;

  //#endregion

  //#region Relations

  @OneToMany(() => ProjectTagEntity, projectTags => projectTags.tag)
  public projectTags?: ProjectTagEntity[];

  //#endregion

  //#region Public Methods

  /**
   * Método que retorna um proxy da entidade
   */
  public toProxy(): TagProxy {
    return new TagProxy(this);
  }

  //#endregion

}