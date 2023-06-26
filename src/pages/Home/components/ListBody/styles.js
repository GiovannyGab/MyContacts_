import styled from 'styled-components';

export const Body = styled.div`
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
