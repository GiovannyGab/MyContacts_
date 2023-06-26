import styled from 'styled-components';

export const Container = styled.header`
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
  button{
    .img-arrow{
      transform: ${({ orderBy }) => (orderBy === 'asc' ? 'rotate(180deg)' : 'rotate(0deg)')};
      transition: transform 0.2s ease-in;
      }
  }

`;
