//#region Imports


//#endregion

export type DefaultEmitteryEvents = 'create' | 'update' | 'delete';

export type DefaultChangeEntityCallback<TEntity> = [old: TEntity | null, latest: TEntity];

