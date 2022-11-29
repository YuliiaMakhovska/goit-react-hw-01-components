import styled from '@emotion/styled';

export const TransactionBox = styled.div`
  margin-top: 40px;
`;
export const TransactionTable = styled.table`
  width: 1000px;
  border: 1px solid #c2c2c2;
  border-collapse: collapse;
  th {
  padding-block: 20px;
  text-align: center;
  font-size: 1.5rem;
  background-color: lightblue;
`;
export const Thead = styled.thead`
  border: 1px solid #c2c2c2;
  border-left: 0.5px solid #c2c2c2;
`;
export const Tbody = styled.tbody`
  width: 100%;
  border-collapse: collapse;
  tr{ 
    text-align: center;
    height: 50px;
    :nth-of-type(2n) {
  border: 1px solid #c2c2c2;
  border-top: none;
  background-color: lightgrey;
  }`;
