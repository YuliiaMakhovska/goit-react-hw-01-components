import styled from '@emotion/styled';

export const StatisticsCard = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-top: 40px;
  width: 300px;
  heigth: 130px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;
export const Title = styled.h2`
  text-aline: center;
`;
export const StatList = styled.ul`
  display: flex;
  width: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
`;
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
export const StatisticsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: ${getRandomHexColor};
`;
export const StatText = styled.span`
  color: #212121;
  font-size: 18px;
`;
