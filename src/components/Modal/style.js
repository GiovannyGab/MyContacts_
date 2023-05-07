import styled from 'styled-components';

export const Overlay = styled.div`
background: rgba(0, 0, 0, 0.6);
backdrop-filter: blur(5px);
position: absolute;
width: 100%;
height: 100%;
left: 0;
top: 0;
display: flex;
align-items: center;
justify-content: center;
`;

export const Container = styled.div`
background-color: #fff;
border-radius: 4px;
max-width: 454px;
width: 100%;
height: 204px;
padding: 24px;
box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
h1{
  font-size: 22px;
  font-weight: bold;
  color: #FC5050;
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
   margin-right: 8px;
}
.button-action{
  background: #FC5050;
border-radius: 4px;
color: #fff;
font-weight: bold;
font-size: 16px;
width: 94px;
height: 40px;

border: none;
}
`;
