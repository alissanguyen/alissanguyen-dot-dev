import * as React from "react";
import { SupportedTheme } from "~/types";

export type ThemeContextValue = {
  theme: SupportedTheme;
  updateTheme: (newTheme: SupportedTheme) => void;
};

const ThemeContext = React.createContext<ThemeContextValue | undefined>(
  undefined
);

export const useTheme = (): ThemeContextValue => {
  const contextValue = React.useContext(ThemeContext);

  if (!contextValue) {
    throw new Error(
      "You are trying to use useGlobalContext without rendering a ThemeContext.Provider somewhere above this component in the component tree. Render a ThemeContext.Provider somewhere above this component in the component tree to resolve this issue."
    );
  }

  return contextValue;
};

export const ThemeContextProvider: React.FC = (props) => {
  const [theme, setTheme] = React.useState<SupportedTheme>(SupportedTheme.DARK);

  const updateTheme = (newTheme: SupportedTheme) => {
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        updateTheme
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};
