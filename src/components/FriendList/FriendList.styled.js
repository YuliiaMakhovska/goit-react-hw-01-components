import styled from '@emotion/styled';

export const FriendContainer = styled.ul`
  margin-top: 40px;
  width: 300px;
  padding: 0;
  display: flex;
  flex-direction: column;
  list-style: none;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  margin-top: 10px;
  padding: 20px;
  border: 1px solid #c2c2c2;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0px 0px 11px 1px rgba(0, 0, 0, 0.14),
    0px 0px 19px 6px rgba(0, 0, 0, 0.03), 0px 0px 26px 12px rgba(0, 0, 0, 0.14),
    0px 0px 29px 12px rgba(0, 0, 0, 0.14);
  &:hover,
  &:focus {
    background-color: teal;
    color: #ffffff;
  }
`;
export const OnLine = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${p => (p.isOnline ? 'green' : 'red')};
  border-radius: 50%;
`;
export const Avatar = styled.img`
  object-fit: cover;
  border-radius: 50%;
  margin-left: 30px;
  width: 40px;
`;
export const Title = styled.p`
  margin-left: 10px;
`;
