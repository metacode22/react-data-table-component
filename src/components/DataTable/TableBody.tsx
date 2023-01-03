import styled from '@emotion/styled';

import TableRow from './TableRow';
import TableDataCell from './TableDataCell';

import { Columns } from '../../data/dummyColumns';
import { Data } from '../../data/dummyData';

const EXCEPTED_COLUMN_KEY = 'id';

interface TableBodyProps {
  data: Data[];
  columns: Columns[];
}

const TableBody = ({ data, columns }: TableBodyProps) => {
  return (
    <Container>
      {data.map(element => (
        <TableRow key={element.id}>
          {columns
            .filter(({ name }) => name !== EXCEPTED_COLUMN_KEY)
            .map(({ name }) => (
              <TableDataCell key={element.id + name}>
                {element[name] || element[name] === 0 ? element[name] : '-'}
              </TableDataCell>
            ))}
        </TableRow>
      ))}
    </Container>
  );
};

export default TableBody;

const Container = styled.tbody``;
