import { ThemeContext } from "./themecontext";
import { useContext } from "react";

export default function Box() {
  const theme = useContext(ThemeContext);

  return <h2 style={theme.primary}>Hello world</h2>;
}
