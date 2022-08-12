import React from 'react';
import { useThemeChangeContext } from '@components/Layout/ThemeChange/index';
import styled from 'styled-components';
import { Btn } from '@styles/default-styles';

interface Props {}

const ThemeChangeButton: React.FC<Props> = props => {
  const {} = props;
  const { click } = useThemeChangeContext();
  return <Button onClick={click} />;
};

const Button = styled(Btn)`
  position: fixed;
  right: 24px;
  bottom: 24px;
  width: 48px;
  height: 48px;
  background-color: ${({ theme }) => theme.color.white};
  z-index: 11;
`;

export default ThemeChangeButton;
