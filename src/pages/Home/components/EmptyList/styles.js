import styled from 'styled-components';

export const NoContactsContainer = styled.div`
display: flex;
align-items:  center;
justify-content: center;
margin-top: 16px;
flex-direction: column;
span{
  margin-top: 8px;
  font-size: 16px;
  color:  ${(props) => props.theme.gray.g200};
 text-align: center;
  strong{
    color: ${(props) => props.theme.colors.primary.main};
  }
}
`;
