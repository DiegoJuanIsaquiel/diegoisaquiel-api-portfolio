/**
 * A classe que representa as informações básicas de toda entidade que será enviada para o usuário
 */
export class GetManyDefaultResponseProxy {

  /**
   * A contagem de quantos items veio nessa busca limitado pelo pageCount
   */

  public count!: number;

  /**
   * O total de itens que essa busca pode retornar
   */

  public total!: number;

  /**
   * A página na qual está essa busca
   */

  public page!: number;

  /**
   * A quantidade de itens que deve retornar por página
   */

  public pageCount!: number;

}
