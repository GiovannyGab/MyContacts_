import styled, { css, keyframes } from 'styled-components';

const messageIn = keyframes`
0%{
  opacity: 0;
  transform: translateY(100px);
}
100%{
  opacity: 1;
  transform: translateY(0px);
}
`;

const messageOut = keyframes`
0%{
  opacity: 1;
  transform: translateY(0px);
}
100%{
  opacity: 0;
  transform: translateY(100px);
}
`;

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
cursor: pointer;
color: #fff;
border-radius: 4px;
${({ type }) => containerVariants[type] || containerVariants.default}
box-shadow: 0px 20px 20px -16px rgba(0, 0, 0, 0.25);
display: flex;
align-items:  center;
justify-content: center;
animation: ${messageIn} 0.3s;
& + & {
  margin-top: 12px;
}
img{
  margin-right: 8px;
}
${({ isLeaving }) => isLeaving && css`animation: ${messageOut} 0.2s`}
`;
