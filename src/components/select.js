import styled from 'styled-components';

const Select = styled.select`

background-color: #fff;
width: 100%;
height: 52px;
box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
border-radius: 4px;
border: none;
outline: none;
padding: 0px 16px;
font-size: 16px;
border: 2px solid #fff;
transition: border-color 0.2s ease-in;
appearance: none;
& +&{
    margin-top: 16px;
  }
&:hover{
  border-color: ${(props) => props.theme.colors.primary.main};
}
&[disabled]{
  background-color:${(props) => props.theme.gray.g100} ;
  border-color:${(props) => props.theme.gray.g200} ;
}
`;
export default Select;
