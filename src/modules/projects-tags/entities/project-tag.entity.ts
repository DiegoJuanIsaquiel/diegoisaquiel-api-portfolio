import { BaseEntity } from "src/common/crud/base.entity";
import { ToProxy } from "src/common/proxies/to-proxy";
import { ProjectEntity } from "src/modules/projects/entities/project.entity";
import { TagEntity } from "src/modules/tags/entities/tag.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";
import { ProjectTagProxy } from "../models/project-tag.proxy";

@Entity('projects_tags')
@Unique(['projectId', 'tagId'])
export class ProjectTagEntity extends BaseEntity implements ToProxy<ProjectTagProxy> {

  //#region Constructor

  /**
   * Construtor padrão
   */
  constructor(
    partial: Partial<ProjectTagEntity> | ProjectTagEntity,
  ) {
    super();

    Object.assign(this, { ...partial });
  }

  //#endregion

  //#region Public Properties

  @Column({ nullable: false })
  public projectId!: number;

  @Column({ nullable: null })
  public tagId!: number;

  @ManyToOne(() => TagEntity, tag => tag.projectTags, {
    onDelete: 'CASCADE',
  })
  public tag?: TagEntity;

  @ManyToOne(() => ProjectEntity, project => project.projectTags, {
    onDelete: 'CASCADE',
  })
  public project?: ProjectEntity;


  //#endregion

    //#region Public Methods

  /**
   * Método que retorna um proxy da entidade
   */
   public toProxy(): ProjectTagProxy {
    return new ProjectTagProxy(this);
  }

  //#endregion

}