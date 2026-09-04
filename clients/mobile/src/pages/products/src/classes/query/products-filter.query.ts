import { Query } from '@sellgar/app';

@Query()
export class ProductsFilterQuery {
  search: string;
}
