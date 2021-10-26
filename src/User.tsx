import { UserContext } from "./usecontext/UserContext";
import { useContext } from "react";
export default function User() {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <h2>User NAme:{user?.name}</h2>
      <h3>User Email:{user?.email}</h3>

      <button
        onClick={() => {
          setUser({
            name: "arkar",
            email: "arkar@gmail.com",
          });
        }}
      >
        Login
      </button>
    </div>
  );
}
