// src/shared/utils/lib/ThemeContext.tsx
import React, { createContext, useContext } from 'react';
import { createTheme, Theme } from '@shared/utils/lib/createTheme';
import { ThemeTokensInterface } from './themeToken';

// 기본 테마
const defaultThemeResult = createTheme({});

// 테마 컨텍스트 타입
type ThemeContextValue = {
  theme: Theme;
};

// 컨텍스트 생성
const ThemeContext = createContext<ThemeContextValue>({
  theme: defaultThemeResult.theme,
});

// 테마 훅
export const useTheme = () => useContext(ThemeContext);

// 테마 프로바이더
export const ThemeProvider: React.FC<{
  themes?: ThemeTokensInterface;
  children: React.ReactNode;
}> = ({ themes = {}, children }) => {
  const themeResult = createTheme({ tokens: themes });

  return (
    <ThemeContext.Provider value={{ theme: themeResult.theme }}>
      {children}
    </ThemeContext.Provider>
  );
};
