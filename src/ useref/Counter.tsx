//! Immutable ref
import { useRef } from "react";
export default function Counter() {
  const counterRef = useRef<HTMLInputElement>(null!);
  const handleClick = () => {
    counterRef.current.focus();
  };
  return (
    <div>
      <h2>Immutable Ref Example </h2>
      <input type="text" ref={counterRef} />
      <button onClick={handleClick}>Focus</button>
    </div>
  );
}
