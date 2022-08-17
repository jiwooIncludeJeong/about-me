import { useState } from 'react';
import { ThemeEnum } from '@enums/Layout/theme';

const useTheme = () => {
  const [theme, setTheme] = useState<ThemeEnum>(ThemeEnum.Dark);
  const changeThemeToOpposite = () => {
    setTheme(prev => {
      if (prev === ThemeEnum.Dark) {
        return ThemeEnum.Light;
      } else {
        return ThemeEnum.Dark;
      }
    });
  };
  const changeThemeTo = (to: ThemeEnum) => {
    setTheme(to);
  };

  return {
    theme,
    changeThemeToOpposite,
    changeThemeTo,
  };
};

export default useTheme;
