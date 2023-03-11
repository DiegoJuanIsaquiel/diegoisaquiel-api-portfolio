import { Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export class BaseEntity {

    /**
     * A identificação da entidade
     */
    @PrimaryGeneratedColumn()
    public id!: number;

    /**
     * Diz quando foi criado essa entidade
     */
    @CreateDateColumn()
    public createdAt!: Date;

    /**
     * Diz quando foi atualizado essa entidade
     */
    @UpdateDateColumn()
    public updatedAt!: Date;

    /**
     * Diz se está ativo
     */
    @Column({ default: true })
    public isActive!: boolean;


}