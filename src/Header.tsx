import { HeaderTypes } from "./type";
function Header({ title, message }: HeaderTypes) {
  return (
    <div>
      <h2>{title}</h2>
      <h3>{message}</h3>
    </div>
  );
}

export default Header;
