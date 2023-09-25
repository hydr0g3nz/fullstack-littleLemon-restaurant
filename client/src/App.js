import "./App.css";
import Main from "./components/Main";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import Login from "./page/Login";
import Menu from "./page/Menu";
import OrderOnline from "./page/OrderOnline";
import ReserveTable from "./page/ReserveTable";
import PrivateRoute from "./components/PrivateRoute";
import Register from './page/Register'
import Admin from "./page/Admin";
import { AuthProvider } from "./context/AuthContext";
function App() {
  const isAuthenticated = null;
  return (
    <div className="Container">
      <AuthProvider>
        <Nav className="nav"></Nav>
        <Main className="main">
          <Routes>
            {/* Public */}
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/menu" element={<Menu />}></Route>
            <Route path="/reserve-table" element={<ReserveTable />}></Route>
            <Route path="/order-online" element={<OrderOnline />}></Route>
            <Route path="/register" element={<Register></Register>}></Route>
            <Route
              path="/login"
              element={
                
                  <Login />
                
              }
            ></Route>

            {/* Private */}

            <Route
              path="/admin"
              element={
                <PrivateRoute>
                  <Admin />
                </PrivateRoute>
              }
            />
          </Routes>
        </Main>

        <Footer className="footer"></Footer>
      </AuthProvider>
    </div>
  );
}

export default App;
