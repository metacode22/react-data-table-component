import { SORT_STATUS } from './constants';

export const createInitSortStatuses = <
  T extends { name: string; sortable?: boolean },
>(
  columns: T[],
) =>
  Object.assign(
    {},
    ...columns.map(column => ({
      [column.name]: column.sortable
        ? SORT_STATUS.INIT
        : SORT_STATUS.IMPOSSIBLE,
    })),
  );
