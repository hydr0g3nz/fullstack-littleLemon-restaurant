import React from "react";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Link, Navigate } from "react-router-dom";
import Logo from "../assets/header_logo.png";
function Login({ className }) {
  let { loginUser } = useContext(AuthContext);
  let { user } = useContext(AuthContext);
  return !user ? (
    <div className="w-8/12 mt-6 mb-56 mx-auto">
      {/* <h1>Login page</h1>
      <form onSubmit={loginUser}>
        <input type="text" name="username" placeholder="Enter username"></input>
        <input
          type="password"
          name="password"
          placeholder="Enter password"
        ></input>
        <input type="submit"></input>
      </form> */}

      
      {/* test */}
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-64 w-auto" src={Logo} alt="Little Lemon" />
          <h2 className="mt-10 text-center text-2xl leading-9 tracking-tight text-gray-900">
            Login in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={loginUser}>
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Username
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                {/* <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div> */}
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-ltlm-yellow text-lg  px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-ltlm-darkgreen focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ltlm-darkgreen focus-visible:text-white hover:text-white"
              >
                Login
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            
            <Link to="/register" className="font-semibold leading-6 text-ltlm-darkgrenen hover:text-tomato">Register</Link>
          </p>
        </div>
      </div>
    </div>
  ) : (
    <Navigate to="/"></Navigate>
  );
}

export default Login;
