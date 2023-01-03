import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';

import Header from './Header';
import Table from './Table';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import Pagination from '../Pagination';

import { Data } from '../../data/dummyData';
import { Columns } from '../../data/dummyColumns';

import { sortBy } from 'lodash';
import { hasTextInName } from '../../utils/validation';
import { color } from '../../utils/palette';
import { createInitSortStatuses } from '../../utils/helpers';
import { SORT_STATUS } from '../../utils/constants';

const INIT_CURRENT_PAGE = 0;
const INIT_PER_PAGE = 5;

interface DataTableProps {
  initialData: Data[];
  columns: Columns[];
  header?: string;
  fixedColumnKeys?: boolean;
  scrollHeight?: string;
  width?: string;
  searchable?: boolean;
  pagination?: boolean;
}

const DataTable = ({
  initialData,
  columns,
  header,
  fixedColumnKeys = false,
  scrollHeight,
  width,
  searchable = false,
  pagination = false,
}: DataTableProps) => {
  const INIT_SORT_STATUSES = createInitSortStatuses<Columns>(columns);
  const [sortStatuses, setSortStatuses] = useState(INIT_SORT_STATUSES);
  const [data, setData] = useState(initialData || []);
  const [enteredText, setEnteredText] = useState('');
  const [currentPage, setCurrentPage] = useState(INIT_CURRENT_PAGE);
  const [perPage, setPerPage] = useState(INIT_PER_PAGE);
  const offset = currentPage * perPage;

  const handleChangeInputValue = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setEnteredText(event.target.value);
  };

  const handleClickPageButton = (nextPage: number) => {
    setCurrentPage(nextPage);
  };

  const handleSelect = (nextPerPage: number) => {
    setPerPage(nextPerPage);
  };

  const handleClickTableHeaderCell = (columnName: string) => {
    if (sortStatuses[columnName] === SORT_STATUS.IMPOSSIBLE) return;

    if (sortStatuses[columnName] === SORT_STATUS.INIT) {
      const sortedData = sortBy([...data], columnName);
      setData(sortedData);
      setSortStatuses({
        ...INIT_SORT_STATUSES,
        [columnName]: SORT_STATUS.DESCENDING,
      });
    }

    if (sortStatuses[columnName] === SORT_STATUS.DESCENDING) {
      const sortedData = sortBy([...data], columnName).reverse();
      setData(sortedData);
      setSortStatuses({
        ...INIT_SORT_STATUSES,
        [columnName]: SORT_STATUS.ASCENDING,
      });
    }

    if (sortStatuses[columnName] === SORT_STATUS.ASCENDING) {
      setData(initialData);
      setSortStatuses({
        ...INIT_SORT_STATUSES,
        [columnName]: SORT_STATUS.INIT,
      });
    }
  };

  useEffect(() => {
    if (enteredText === '') {
      setData(initialData);
      setCurrentPage(INIT_CURRENT_PAGE);
      return;
    }

    const filteredData = [...initialData].filter(({ name }) =>
      hasTextInName(name, enteredText),
    );
    setData(filteredData);
    setCurrentPage(INIT_CURRENT_PAGE);
  }, [enteredText]);

  return (
    <Container width={width}>
      {header || searchable ? (
        <Header
          header={header}
          searchable={searchable}
          onChange={handleChangeInputValue}
        />
      ) : null}

      <TableContainer
        fixedColumnKeys={fixedColumnKeys}
        scrollHeight={scrollHeight}>
        <Table>
          <TableHeader
            fixedColumnKeys={fixedColumnKeys}
            scrollHeight={scrollHeight}
            columns={columns}
            sortStatuses={sortStatuses}
            onClick={handleClickTableHeaderCell}
          />
          <TableBody
            data={pagination ? data.slice(offset, offset + perPage) : data}
            columns={columns}
          />
        </Table>
      </TableContainer>

      {pagination ? (
        <Pagination
          currentPage={currentPage}
          perPage={perPage}
          totalLength={data.length}
          onSelect={handleSelect}
          onChange={handleClickPageButton}
        />
      ) : null}
    </Container>
  );
};

export default DataTable;

const Container = styled.div<{ width?: string }>`
  border: 1px solid ${color.shallowGray};
  border-radius: 4px;
  padding: 1rem;
  box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.2);
  width: ${({ width }) => (width ? width : 'auto')};
`;

const TableContainer = styled.div<{
  fixedColumnKeys?: boolean;
  scrollHeight?: string;
}>`
  font-family: 'Noto Sans KR', sans-serif;
  font-family: 'Roboto', sans-serif;
  user-select: none;

  height: ${({ fixedColumnKeys, scrollHeight }) =>
    fixedColumnKeys && scrollHeight ? scrollHeight : 'auto'};
  overflow: auto;

  &::-webkit-scrollbar {
    background-color: ${color.white};
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${color.black};
    border-radius: 4px;

    &:hover {
      background-color: ${color.gray};
    }
  }
`;
