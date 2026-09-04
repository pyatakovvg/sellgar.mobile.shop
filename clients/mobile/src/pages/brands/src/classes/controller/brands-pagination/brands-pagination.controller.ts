import { Controller, Inject, RouteQueryServiceInterface } from '@sellgar/app';

import { delay } from '../../../../../../shared/runtime/delay';
import { BrandsPaginationQuery } from '../../query/brands-pagination.query.ts';
import {
  BrandsPaginationControllerInterface,
  type BrandsPaginationLoaderData,
} from './brands-pagination-controller.interface.ts';

const PAGE_SIZE = 12;
const INITIAL_COUNT = 24;
const LAST_PAGE = 4;

@Controller()
export class BrandsPaginationController extends BrandsPaginationControllerInterface {
  constructor(
    @Inject(RouteQueryServiceInterface)
    private readonly query: RouteQueryServiceInterface,
  ) {
    super();
  }

  async action({ signal }: Parameters<BrandsPaginationControllerInterface['action']>[0]): Promise<void> {
    await delay(700, signal);
    const current = this.query.get(BrandsPaginationQuery);
    const page = Number(current.page ?? 0);

    if (page >= LAST_PAGE) return;

    return this.query.set(BrandsPaginationQuery, { page: String(page + 1) });
  }

  loader(): BrandsPaginationLoaderData {
    const current = this.query.get(BrandsPaginationQuery);
    const page = Number(current.page ?? 0);

    return Object.freeze({ count: INITIAL_COUNT + page * PAGE_SIZE });
  }
}
