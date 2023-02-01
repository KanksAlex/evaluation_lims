/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
//import Routes from 'routes';
import ThemeRoutes from "./routes";

import { Provider as ReduxProvider } from "react-redux";
import { store } from "store";
import ThemeCustomization from "themes";
import { AuthContextProvider } from "context/AuthContext";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:5000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          console.log("hey man i got a user");
          console.log(resObject.user);
          console.log("=============");
          setUser(resObject.user);
          localStorage.setItem("user", JSON.stringify(resObject.user));
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);

  return (
    <ReduxProvider store={store}>
      <BrowserRouter>
        <ThemeCustomization>
          <AuthContextProvider>
            <ThemeRoutes />
          </AuthContextProvider>
        </ThemeCustomization>
      </BrowserRouter>
    </ReduxProvider>
  );
}

export default App;
