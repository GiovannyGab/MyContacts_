import styled from 'styled-components';

export const Overlay = styled.div`

background: rgba(0, 0, 0, 0.6);
backdrop-filter: blur(5px);
position: fixed;
width: 100%;
height: 100%;
left: 0;
top: 0;
display: flex;
align-items: center;
justify-content: center;
z-index: 10;
`;

export const Container = styled.div`
background-color: #fff;
border-radius: 4px;
max-width: 454px;
width: 100%;
height: 250px;
padding: 24px;
box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
.modal-body{
  margin-top: 32px;
}
h1{
  font-size: 22px;
  font-weight: bold;
  color: ${(props) => (
    props.danger ? '#FC5050' : '#222222'
  )};
}
p{
  color: #222222;
  margin-top: 8px;
}
`;
export const Footer = styled.footer`
display: flex;
margin-top: 32px;
justify-content: flex-end;
align-items: center;
.button-back{
  color: #BCBCBC;
 background-color: #fff;
   border: none;
   font-size: 16px;
   margin-right: 28px;
}

.button-action{
  background-color: ${(props) => (
    props.danger ? props.theme.danger.main : props.theme.colors.primary.main
  )};
  &:hover{
  background-color: ${(props) => (
    props.danger ? props.theme.danger.light : props.theme.colors.primary.light
  )}

}
&:active{
  background-color: ${(props) => (
    props.danger ? props.theme.danger.dark : props.theme.colors.primary.dark
  )}
}

border-radius: 4px;
color: #fff;
font-weight: bold;
font-size: 16px;
width: 94px;
height: 40px;

border: none;
}
`;
