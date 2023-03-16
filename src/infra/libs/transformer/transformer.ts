//#region Imports

import { GetManyDefaultResponse } from '@rewiko/crud';
import { isGetMany } from '../../../common/utils/crud';

//#endregion

/**
 * O tipo que controla a lista de métodos para transformar os itens (proxy ou payload)
 */
export type EntityTransformerFunction<TITem> = (data: TITem) => Promise<TITem>;

/**
 * Métódo que aplica as transformações para cada item
 * @param transformers A lista de métodos para serem aplicados nos itens
 */
export function applyTransformersClousure<TItem>(
  transformers: EntityTransformerFunction<TItem>[],
): <TInput extends TItem | TItem[] | GetManyDefaultResponse<TItem>, >(data: TInput) => Promise<TInput> {
  return async <TInput,>(data: TInput) => {
    return await transformers.reduce(async (acc, transformer) => {
      return acc.then(async result => {
        if (Array.isArray(result)) {
          const newData: TItem[] = [];

          for (const item of result) {
            newData.push(
              await transformer(item),
            );
          }

          return newData;
        }

        if (isGetMany<TItem>(result)) {
          result.data = await Promise.all(result.data.map(value => transformer(value)));

          return result as GetManyDefaultResponse<TItem>;
        }

        return await transformer(result as unknown as TItem);
      });
    }, Promise.resolve(data)) as TInput;
  };
}

export function createBasicTransformer<TItem>(
  transformer: EntityTransformerFunction<TItem>,
): (data: TItem) => Promise<TItem>;

export function createBasicTransformer<TItem>(
  transformer: EntityTransformerFunction<TItem>,
): (data: TItem[]) => Promise<TItem[]>;

export function createBasicTransformer<TItem>(
  transformer: EntityTransformerFunction<TItem>,
): (data: GetManyDefaultResponse<TItem>) => Promise<GetManyDefaultResponse<TItem>>;

/**
 * Métódo que cria um ou mais métodos que serão aplicados aos itens (proxy ou payload)
 * @param transformer A referência que será utilizada após criação do método
 */
export function createBasicTransformer<TItem>(
  transformer: EntityTransformerFunction<TItem>,
): (data: TItem | TItem[] | GetManyDefaultResponse<TItem>) => Promise<TItem | TItem[] | GetManyDefaultResponse<TItem>> {
  return async (
    data,
  ) => {
    if (Array.isArray(data)) {
      const newData: TItem[] = [];

      for (const item of data) {
        newData.push(
          await transformer(item),
        );
      }

      return newData;
    }

    if (isGetMany<TItem>(data)) {
      data.data = await Promise.all(data.data.map(value => transformer(value)));

      return data;
    }

    return await transformer(data);
  };
}
