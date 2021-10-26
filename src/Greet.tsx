import { GreetTypes } from "./type";

function Greet(props: GreetTypes) {
  return <button onClick={(event) => props.greet(event, 10000)}>Greet</button>;
}
export default Greet;
