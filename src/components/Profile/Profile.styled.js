import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  width: 250px;
  height: max-content;
  border: 1px solid #c2c2c2;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  &:hover,
  &:focus {
    transform: scale(1.1);
  }
  img {
    disply: block;
    heigth: 100px;
    width: 100px;
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  }
`;

export const Description = styled.div`
  display: grid;
  place-items: center;
`;
export const Name = styled.div`
  margin: 0;
  font-weight: bold;
  font-size: 1.5px;
`;

export const Stats = styled.ul`
  margin-block: 0;
  padding: 0;
  display: grid;
  list-style: none;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: auto;
  place-items: center;
  background-color: lightgrey;
  li {
    display: grid;
    place-items: center;
    padding-top: 15px;
    padding-bottom: 15px;
    grid-gap: 5px;
    min-width: 100%;
    border-top: 0.5px solid #c2c2c2;
    border-left: 0.5px solid #c2c2c2;
  }
`;

export const Quantity = styled.span`
  display: block;
  font-weight: bold;
`;
