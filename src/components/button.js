import styled from 'styled-components';

export const Button = styled.button`
width: 100%;
height: 52px;
border: none;
background-color: ${(props) => props.theme.colors.primary.main};
color: #fff;
box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
border-radius: 4px;
font-size: 16px;
font-weight: bold;
transition: background 0.2s ease-in;

&:hover{
  background-color: ${(props) => props.theme.colors.primary.light};

}
&:active{
  background-color: ${(props) => props.theme.colors.primary.dark};
}

&[disabled]{
  background-color: #ccc;
  cursor: default;
}

`;
