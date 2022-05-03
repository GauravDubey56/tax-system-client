import { createContext, useState } from "react";

const UserContext = createContext({
  userName: "",
  token: "",
  setToken: (token) => {},
  logout: () => {},
  setUsername: (username) => {},
  isLoggedIn: () => false,
});

export function UserContextProvider(props) {
  const res = localStorage.getItem('user');
  const data = JSON.parse(res);
  const [userName, setUsername] = useState(res ? data.username: "");
  const [token, setToken] = useState(res ? data.token : "");
  
  function logoutHandler() {
    localStorage.clear();
    setUsername("");
    setToken("");
  }

  function isLoggedIn() {
    return userName !== "";
  }

  const context = {
    userName: userName,
    token: token,
    setToken: setToken,
    setUsername: setUsername,
    logout: logoutHandler,
    isLoggedIn: isLoggedIn,
  };

  return (
    <UserContext.Provider value={context}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContext;