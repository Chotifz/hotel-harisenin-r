import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);

  const handleSubmit = (e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();
    // set configurations
    const configuration = {
      method: "post",
      url: "http://localhost:2000/auth/login",
      data: {
        email,
        password,
      },
    };
    axios(configuration)
      .then((result) => {
        setLogin(true);
      })
      .catch((error) => {
        error = new Error();
      });
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-8 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-black dark:text-white"
        >
          <img
            className="w-8 h-8 mr-2"
            src="https://images.glints.com/unsafe/180x0/glints-dashboard.s3.amazonaws.com/company-logo/25f6ffcefbac1f1d53d01f97f7a264da.png"
            alt="logo"
          />
          Hotel-Harisenin
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-black md:text-2xl dark:text-white">
              Log in to Your account
            </h1>
            <form
              onSubmit={(e) => handleSubmit(e)}
              className="space-y-4 md:space-y-6"
              action="#"
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-black dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@email.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-black dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="text-gray-700 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium text-blue-700 hover:underline"
                >
                  Forgot password?
                </a>
              </div>
              <button
                onSubmit={(e) => handleSubmit(e)}
                type="submit"
                className="my-6 bg-blue-600 w-full text-white font-medium rounded-lg p-2 text-center"
              >
                Log in
              </button>

              <p className="text-sm font-light text-black">
                Don’t have an account yet?
                <Link
                  to="/auth/signup"
                  className="font-medium text-blue-700 hover:underline"
                >
                  &nbsp;Sign up
                </Link>
              </p>
              {/* display success message */}
              {login ? (
                <p className="text-success">You Are Logged in Successfully</p>
              ) : (
                <p className="text-danger">You Are Not Logged in</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
