import styled from 'styled-components';

export const ErrorContainer = styled.div`
margin-top: 16px;
display: flex;
flex-direction: row;
align-items: center;
.details{
display: flex;
flex-direction: column;
padding-left: 24px;
Button{
  width: 181px;
  height: 52px;
}
span{
 color: ${(props) => props.theme.danger.main};
 font-weight:bold;
 font-size: 22px;
 padding-bottom: 8px;
}
}
`;
