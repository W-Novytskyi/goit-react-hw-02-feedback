import styled from '@emotion/styled';

export const ContainerBtn = styled.div`
  display: flex;
  gap: 10px;
`;

export const Button = styled.button`
  cursor: pointer;
  background-color: #ffffff;
  color: #000000;
  padding: 5px 10px;
  border: 1px solid #000000;
  border-radius: 3px;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.25);

  &:active {
    background-color: #1b8bcd;
    color: #ffffff;
    border: none;
  }
`;

export const ButtonText = styled.span`
  text-transform: capitalize;
`;

export const ContainerStat = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
