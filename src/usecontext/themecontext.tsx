import { createContext } from "react";

const theme = {
  primary: {
    background: "blue",
    color: "white",
  },
  dark: {
    background: "black",
    color: "red",
  },
};

export const ThemeContext = createContext(theme);
type ThemeTypes = {
  children: React.ReactNode;
};
export default function Theme({ children }: ThemeTypes) {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}
