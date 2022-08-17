import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.WHITE};
  justify-content: center;
  padding: 0 20px;
`;

export const Label = styled.Text`
  /* color: '#4d4d4d'; */
  font-size: 15px;
  font-weight: bold;
`;
