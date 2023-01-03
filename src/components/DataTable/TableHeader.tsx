import styled from '@emotion/styled';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';

import TableRow from './TableRow';
import TableHeaderCell from './TableHeaderCell';

import { Columns } from '../../data/dummyColumns';

import { color } from '../../utils/palette';
import { SORT_STATUS } from '../../utils/constants';

interface TableHeaderProps {
  columns: Columns[];
  fixedColumnKeys?: boolean;
  scrollHeight?: string;
  sortStatuses?: any;
  onClick?: (columnName: string) => void;
}

const TableHeader = ({
  columns,
  fixedColumnKeys,
  scrollHeight,
  sortStatuses,
  onClick,
}: TableHeaderProps) => {
  return (
    <Container fixedColumnKeys={fixedColumnKeys} scrollHeight={scrollHeight}>
      <TableRow>
        {columns.map(({ name, text }) => (
          <TableHeaderCell
            key={name}
            scope="col"
            onClick={() => {
              onClick && onClick(name);
            }}>
            <CategoryContainer sortStatus={sortStatuses[name]}>
              {text ? text : name}
              {sortStatuses[name] === SORT_STATUS.ASCENDING && <FaArrowUp />}
              {sortStatuses[name] === SORT_STATUS.DESCENDING && <FaArrowDown />}
            </CategoryContainer>
          </TableHeaderCell>
        ))}
      </TableRow>
    </Container>
  );
};

export default TableHeader;

const Container = styled.thead<{
  fixedColumnKeys?: boolean;
  scrollHeight?: string;
}>`
  width: 100%;
  background-color: ${color.white};
  top: 0rem;
  position: ${({ fixedColumnKeys, scrollHeight }) =>
    fixedColumnKeys && scrollHeight ? 'sticky' : 'static'};
`;

const CategoryContainer = styled.div<{ sortStatus: string }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${color.gray};
  transition: color 0.2s ease-out;
  cursor: ${({ sortStatus }) =>
    sortStatus !== SORT_STATUS.IMPOSSIBLE ? 'pointer' : 'not-allowed'};

  &:hover {
    color: ${({ sortStatus }) =>
      sortStatus !== SORT_STATUS.IMPOSSIBLE ? color.black : 'auto'};
  }
`;
