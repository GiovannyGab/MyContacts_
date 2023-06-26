import styled from 'styled-components';

export const Container = styled.div`

display: flex;
align-items: flex-start;
justify-content: center;
margin-top: 16px;
span{
  margin-left: 24px;
  color:  ${(props) => props.theme.gray.g200};
  word-break: break-word;
}
`;
