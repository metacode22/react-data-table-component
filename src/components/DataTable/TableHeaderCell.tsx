import styled from '@emotion/styled';

const TableHeaderCell = styled.th`
  padding: 0.5rem;
  text-align: start;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.6);

  &:first-of-type {
    width: 100px;
    padding-left: 0.5rem;
    padding-right: 2rem;
  }
`;

export default TableHeaderCell;
