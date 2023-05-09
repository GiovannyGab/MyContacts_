import styled from 'styled-components';

export const Container = styled.div`
& + &{
  margin-top: 16px;
}
small{
  font-size: 16px;
  display: block;
  margin-top: 8px;
  color: ${(props) => props.theme.danger.main};


}
`;
