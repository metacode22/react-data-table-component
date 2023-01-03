import styled from '@emotion/styled';

import Search from './Search';

import { color } from '../../utils/palette';

interface HeaderProps {
  header?: string;
  searchable?: boolean | undefined;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Header = ({ header, searchable, onChange }: HeaderProps) => {
  return (
    <Container>
      <h3>{header}</h3>
      {searchable ? <Search onChange={onChange} /> : null}
    </Container>
  );
};

export default Header;

const Container = styled.div`
  padding: 1rem 0.5rem;
  height: 2rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;
  background-color: ${color.white};
  overflow-x: auto;
  overflow-y: hidden;
`;
