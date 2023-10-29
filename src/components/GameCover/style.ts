import styled from 'styled-components';
import { IGameCover } from './type';

export const VerticalCard = styled.div<IGameCover>(
  ({ image }) => `
  width: 25%;
  min-width: 360px;
  height: 500px;
  background-image: url(${image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: calc(var(--border-radius) + 10px);
`,
);

export const HorizontalCard = styled.div<IGameCover>(
  ({ image }) => `
  width: 60%;
  min-width: 460px;
  height: 230px;
  background-image: url(${image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: calc(var(--border-radius) + 10px);
`,
);
