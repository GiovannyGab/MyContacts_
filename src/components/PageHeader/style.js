import styled from 'styled-components';

export const Container = styled.header`
display: flex;
flex-direction: column;
margin-bottom: 24px;
a {

display: flex;
 text-decoration: none;
 align-items: center;

  span{
    color: ${(props) => props.theme.colors.primary.main};
    margin-left: 8px;
    font-size: 16px;
    font-weight: bold;
  }
  img{
    transform: rotate(270deg);
  }
}
.title{
  font-size: 20px;
  font-weight: bold;
  color: #222222;
}
`;
