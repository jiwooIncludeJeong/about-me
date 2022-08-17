import React from 'react';
import Typo from '@components/UI/Typo/Typo';
import DarkColor from '@assets/darkColor';
import { ThemeEnum } from '@enums/Layout/theme';
import { Btn } from '@styles/default-styles';
import styled from 'styled-components';

interface Props {
  handleTheme: () => void;
  theme: ThemeEnum;
}

const ThemeChangeButton: React.FC<Props> = props => {
  const { handleTheme, theme } = props;

  return (
    <Button onClick={handleTheme}>
      <Typo fontType={'EN/Button/S/Medium'} color={DarkColor.white}>
        {theme === ThemeEnum.Dark ? 'LIGHT MODE' : 'DARK MODE'}
      </Typo>
    </Button>
  );
};

const Button = styled(Btn)`
  position: fixed;
  right: 24px;
  bottom: 24px;
  padding: 12px;
  background-color: ${({ theme }) => theme.color.gray};
  z-index: 1;
  border-radius: 4px;
  filter: drop-shadow(0px 0px 7px ${({ theme }) => `${theme.color.white}40`});
`;

export default ThemeChangeButton;
