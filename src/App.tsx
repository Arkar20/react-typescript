import "./App.css";

import Box from "./usecontext/Box";
import Brief from "./Brief";
import Counter from "./ useref/Counter";
import Greet from "./Greet";
import Header from "./Header";
import MutableRef from "./ useref/MutableRef";
import React from "react";
import Theme from "./usecontext/themecontext";
import User from "./User";
// import User from "./usestate/User";
import UserProvider from "./usecontext/UserContext";

function App() {
  return (
    <div className="App">
      <Header title="hello world" message="Say hi" />
      <Header title="helo arkar" />
      <Brief>
        <Greet
          greet={(event, number) => {
            alert("Greeting humans");
            console.log(event);
            console.log(number);
          }}
        />
      </Brief>
      {/* <User /> */}
      <Theme>
        <Box />
      </Theme>
      <UserProvider>
        <User />
      </UserProvider>
      <Counter />
      <MutableRef />
    </div>
  );
}

export default App;
