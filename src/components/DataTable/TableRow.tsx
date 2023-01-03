import styled from '@emotion/styled';

import { color } from '../../utils/palette';

const TableRow = styled.tr`
  padding: 0 1rem;
  border-bottom: 1px solid ${color.shallowGray};

  &:hover {
    background-color: aliceblue;
  }
`;

export default TableRow;
