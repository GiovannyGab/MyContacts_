import styled, { css } from 'styled-components';

const containerVariants = {
  default: css`
  background: ${(props) => props.theme.colors.primary.main};
  `,
  sucess: css`
  background: ${(props) => props.theme.sucess.main};
  `,
  error: css`
  background: ${(props) => props.theme.danger.main};
  `,

};

export const Container = styled.div`
padding: 16px 32px;

color: #fff;
border-radius: 4px;
${({ type }) => containerVariants[type] || containerVariants.default}
box-shadow: 0px 20px 20px -16px rgba(0, 0, 0, 0.25);
display: flex;
align-items:  center;
justify-content: center;
& + & {
  margin-top: 12px;
}
img{
  margin-right: 8px;
}

`;
