import styled from '@emotion/styled';
import { useEffect, useRef } from 'react';

import { FaSearch } from 'react-icons/fa';

import { color } from '../../utils/palette';

interface SearchProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search = ({ onChange }: SearchProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef?.current?.focus();
  }, [inputRef]);

  return (
    <Container>
      <Input ref={inputRef} onChange={onChange} />
      <FaSearch />
    </Container>
  );
};

export default Search;

const Container = styled.div`
  display: flex;
  align-items: center;
  color: ${color.shallowGray};
`;

const Input = styled.input`
  all: unset;
  border-bottom: 1px solid ${color.shallowGray};
  padding: 0.25rem 0;
  font-weight: 400;
  color: black;

  &:focus {
    outline: none;
    border-bottom: 2px solid ${color.shallowGray};
  }
`;
