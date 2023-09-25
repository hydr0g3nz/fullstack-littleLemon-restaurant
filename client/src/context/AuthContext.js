import jwtDecode from "jwt-decode";
import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  let [token, setToken] = useState(() =>
    localStorage.getItem("authToken")
      ? JSON.parse(localStorage.getItem("authToken"))
      : null
  );
  let [user, setUser] = useState(() =>
    localStorage.getItem("authToken")
      ? jwtDecode(localStorage.getItem("authToken"))
      : null
  );
  let [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    let fourMinutes = 60 * 4 * 1000;
    if (loading) {
      if(localStorage.getItem("authToken"))
        updateToken();
    }
    let interval = setInterval(() => {
      if (token) {
        console.log("updatetoken");
        updateToken();
      }
    }, fourMinutes);
    return () => clearInterval(interval);
  }, [token, loading]);

  let loginUser = async (e) => {
    e.preventDefault();

    let response = await fetch("http://127.0.0.1:8000/api/token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: e.target.username.value,
        password: e.target.password.value,
      }),
    });
    let data = await response.json();
    console.log(response);

    if (response.status === 200) {
      setToken(data);
      setUser(jwtDecode(data.access));
      localStorage.setItem("authToken", JSON.stringify(data));
      navigate("/");
    } else {
      alert("Something went wrong");
    }
  };
  let registerUser = async (e) => {
    e.preventDefault();
    console.log(
      JSON.stringify({
        username: e.target.username.value,
        password: e.target.password.value,
        email: e.target.email.value,
      })
    );
    let response = await fetch("http://127.0.0.1:8000/api/users/register/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: e.target.username.value,
        password: e.target.password.value,
        email: e.target.email.value,
      }),
    });
    let data = await response.json();
    console.log(response);

    if (response.status === 201) {
      setToken(data);
      setUser(jwtDecode(data.access));
      localStorage.setItem("authToken", JSON.stringify(data));
      navigate("/");
    } else {
      alert("Something went wrong");
    }
  };
  let updateToken = async () => {
    let response = await fetch("http://127.0.0.1:8000/api/token/refresh/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        refresh: token?.refresh,
      }),
    });
    let data = await response.json();
    // console.log(response);

    if (response.status === 200) {
      setToken(data);
      setUser(jwtDecode(data.access));
      localStorage.setItem("authToken", JSON.stringify(data));
    } else {
      logoutUser();
    }
    if (loading) {
      setLoading(false);
    }
  };
  let logoutUser = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("authToken");
    navigate("/login");
  };
  let contextData = {
    user: user,
    authToken: token,
    loginUser: loginUser,
    logoutUser: logoutUser,
    registerUser: registerUser,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
