import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 100px);
  justify-content: center;
  gap: 17px;
  margin: 40px 0;

  @media (min-width: 550px) {
    gap: 30px;
  }
`;

export default Grid;
