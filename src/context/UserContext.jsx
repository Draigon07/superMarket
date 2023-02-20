/* eslint-disable no-unused-vars */
import { createContext } from "react";
import App from "../App.jsx";
import Menu from "../components/menu/Menu.jsx";
import useFetchData from "../hooks/useFetchData.jsx";
export const UserContext = createContext({
  data: {},
  avatar: {},
});

function UserProvider() {
  const token = document.cookie.replace("token=", "");
  const { login, userInfo } = useFetchData(token);

  return (
    <UserContext.Provider value={userInfo}>
      {login ? <Menu /> : null}
      {userInfo.data ? <App /> : null}
    </UserContext.Provider>
  );
}

export default UserProvider;
