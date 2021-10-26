import { UserType } from "../type";
import { useState } from "react";
export default function User() {
  const [user, setUser] = useState<UserType>({});
  const handleLogin = () => {
    setUser({
      name: "arkar",
      email: "arkar@gmail.com",
    });
  };

  const handleLogout = () => {
    setUser({});
  };

  return (
    <div>
      <h1 style={{ fontSize: "70px" }}>Use state Hook</h1>
      <h1>Username :{user.name}</h1>
      <h2>Email :{user.email}</h2>
      <button onClick={() => handleLogin()}>Login</button>
      <button onClick={() => handleLogout()}>logout</button>
    </div>
  );
}
