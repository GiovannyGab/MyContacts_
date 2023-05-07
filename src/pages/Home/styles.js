import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 39px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  strong {
    font-size: 24px;
    color: #222222;
  }
  a {
    font-family: "Sora";
    font-style: normal;
    color: ${(props) => props.theme.colors.primary.main};
    text-decoration: none;
    border: 2px solid ${(props) => props.theme.colors.primary.main};
    font-size: 16px;
    padding: 8px 16px;
    border-radius: 4px;
    transition: all 0.2s ease-in-out;

    &:hover {
      background: ${(props) => props.theme.colors.primary.main};
      color: #fff;
    }
  }
`;
export const ListContainer = styled.div`
  margin-top: 24px;

  .sort-button {
    background: transparent;
    display: flex;
    border: none;
    align-items: center;
  }
  span {
    color: ${(props) => props.theme.colors.primary.main};
    width: 50px;
    height: 20px;
    font-size: 16px;
    margin-right: 8px;
    font-weight: bold;
  }
`;

export const ListBody = styled.div`
  margin-top: 8px;
`;
export const Card = styled.div`
  background-color: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  padding: 16px;
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & +&{
    margin-top: 16px;
  }
  .info {
    .contact-header {
      display: flex;
      align-items: center;
      small {
        background: ${(props) => props.theme.colors.primary.lighter};
        color: ${(props) => props.theme.colors.primary.main};
        text-transform: uppercase;
        font-weight: bold;
        padding: 4px;
        border-radius: 4px;
        margin-left: 8px;
      }

    }
    .contact-info {
      span{
        color: #BCBCBC;
        display: block;
        font-size: 14px;

      }
    }
  }

  .actions {
    display: flex;
    align-items: center;
    justify-content: center;
    button{
      background: transparent;
      border: none;
      margin-left: 8px;
    }
  }
`;
export const InputSeachContainer = styled.div`

 width: 100%;
 margin-bottom: 32px;
 input {

  width: 100%;
  background-color: #fff;
  border: none;
  border-radius: 25px;
  height: 50px;
  filter: drop-shadow(0px 4px 10px rgba(0,0,0,0.04));
  outline: 0;
  padding: 0 16px;

  &::placeholder{
    color: #BCBCBC;
  }
 }

`;
