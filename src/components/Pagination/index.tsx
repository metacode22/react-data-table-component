import styled from '@emotion/styled';

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import { color } from '../../utils/palette';

const INIT_PER_PAGE_UNITS = [5, 10, 20, 50];

interface PaginationProps {
  currentPage: number;
  perPage: number;
  totalLength: number;
  onSelect: (nextPerPage: number) => void;
  onChange: (nextPage: number) => void;
}

const Pagination = ({
  currentPage,
  perPage,
  totalLength,
  onSelect,
  onChange,
}: PaginationProps) => {
  const totalPage = Math.ceil(totalLength / perPage);

  const handleClickPrevPageButton = () => {
    if (currentPage === 0) return;
    onChange(currentPage - 1);
  };

  const handleClickNextPageButton = () => {
    if (currentPage === totalPage - 1) return;
    onChange(currentPage + 1);
  };

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onSelect(Number(event.target.value));
    onChange(0);
  };

  return (
    <Container>
      <div>Rows per Page: </div>
      <select
        onChange={event => {
          handleSelect(event);
        }}
        defaultValue={perPage}>
        {INIT_PER_PAGE_UNITS.map(unit => (
          <option key={unit} value={unit}>
            {unit}
          </option>
        ))}
      </select>
      <ButtonContainer>
        <Button onClick={handleClickPrevPageButton}>
          <FaArrowLeft />
        </Button>
        {Array.from({ length: totalPage }, (_, index) => index)
          .filter(index => {
            if (currentPage < 3) {
              return index < 5;
            } else if (currentPage > totalPage - 3) {
              return index >= totalPage - 5;
            }

            return currentPage - 2 <= index && index <= currentPage + 2;
          })
          .map(index => (
            <Button
              key={index}
              isCurrentPage={currentPage === index}
              onClick={() => {
                onChange(index);
              }}>
              {index + 1}
            </Button>
          ))}
        <Button onClick={handleClickNextPageButton}>
          <FaArrowRight />
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default Pagination;

const Container = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 1rem;

  margin-top: 1rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button<{ isCurrentPage?: boolean }>`
  all: unset;
  width: 2rem;
  height: 2rem;
  border: 1px solid ${color.shallowGray};
  border-radius: 50%;
  background-color: ${({ isCurrentPage }) =>
    isCurrentPage ? color.shallowGray : 'white'};

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${color.shallowGray};
  }
`;
