import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: center;
  border-bottom: 2px solid ${(props) => props.theme.gray.g100};
  padding-bottom: 16px;
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
