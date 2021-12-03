import React, { useState } from "react";
import List from "./Components/List";
import LoginForm from "./Components/LoginForm";
import Navbar from "./Components/Navbar";

function App() {
  const [showcase, setShowcase] = useState(true);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [Addmessagesucessfully, setAddmessagesuccessfully] = useState(false);
  const [list, setList] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username) {
      setUsernameError(true);
    }
    if (!password) {
      setPasswordError(true);
    }

    if (username && password) {
      setList(() => [
        ...list,
        {
          username: username,
          password: password,
        },
      ]);

      setAddmessagesuccessfully(true);
      setTimeout(() => {
        setAddmessagesuccessfully(false);
      }, 2000);
    }
  };
  return (
    <>
      {showcase ? (
        <LoginForm
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
          usernameError={usernameError}
          setUsernameError={setUsernameError}
          passwordError={passwordError}
          setPasswordError={setPasswordError}
          Addmessagesucessfully={Addmessagesucessfully}
          handleSubmit={handleSubmit}
        />
      ) : (
        <List List={list} />
      )}

      <Navbar setShowcase={setShowcase} />
    </>
  );
}

export default App;
