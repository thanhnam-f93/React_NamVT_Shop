export const metadata = {
  title: "Sign In - Simple",
  description: "Page description",
};
import { useCookies } from "react-cookie";
import React, { startTransition, useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CONSTANTS } from "../../utils/constant";
import { callAPIFetch } from "../../service/api";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
// import "./styles.css";
export default function SignIn() {
  const navigate = useNavigate();
  const [cookie, setCookie] = useCookies(["data"]);
  const [formData, setFormData] = useState({
    username: CONSTANTS.EMPTY,
    password: CONSTANTS.EMPTY,
  });
  const [checked, setChecked] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const login = (e) => {
    e.preventDefault();
    // Validation data
    startTransition(() => {
      if (validationData()) {
        callApiLogin();
      }
    });
  };
  const validationData = () => {
    const { username, password } = formData;

    let message = "";
    let regularExpression =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (username == "" || password == "") {
      message = "data input not Empty";
    } else if (username.length < 5) {
      message = "username must have 5 character up";
    } else if (!regularExpression.test(password)) {
      message =
        "Password must has at least one number and least one special character";
    }
    // if (message) {

    return true;
  };
  const callApiLogin = () => {
    callAPIFetch(
      CONSTANTS.URL.USER +
        `?username=${formData.username}&password=${formData.password}`,
      CONSTANTS.METHOD.GET,
      CONSTANTS.NULL
    )
      .then((response: { ok: any; status: any; json: () => any }) => {
        if (!response.ok && response.status == CONSTANTS.STATUS.NOT_FOUND) {
          navigate(CONSTANTS.PAGE[404]);
        } else if (response.status == CONSTANTS.STATUS.ERR_SERVER) {
          throw new Error(`Net work error`);
        }
        return response.json();
      })
      .then((data) => {
        if (data.length > 0) {
          localStorage.setItem("username", data[0].username);
          localStorage.setItem("userId", data[0].id);
          localStorage.setItem("role", data[0].role);
          Swal.fire({
            position: "center",
            icon: "success",
            title: `Well come back ${data[0].name}`,
            showConfirmButton: false,
            timer: 1500,
          });
          navigate(CONSTANTS.PAGE.MOVIE);
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Username or Password wrong, Please input again",
            footer: '<NavLink to="#">Check problem?</NavLink>',
          });
        }
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err,
          footer: '<NavLink to="#">Check problem?</NavLink>',
        });
      });
  };
  const saveDataCookie = () => {
    let update = !checked;
    setChecked(update);
    document.cookie = `username=${formData.username}`;
    document.cookie = `password=${formData.password}`;
  };
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1 rounded bg-orange-950">{`Well come...`}</h1>
          </div>

          {/* Form */}
          <div className="max-w-sm mx-auto">
            <form onSubmit={login}>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label
                    className="block text-gray-800 text-sm font-medium mb-1"
                    htmlFor="email"
                  >
                    Username
                  </label>
                  <input
                    id="user"
                    type="text"
                    name="username"
                    className="form-input w-full text-gray-800"
                    placeholder="Enter username or email address"
                    required
                    defaultValue={formData.username}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <div className="flex justify-between">
                    <label
                      className="block text-gray-800 text-sm font-medium mb-1"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <Link
                      to="/reset-password"
                      className="text-sm font-medium text-blue-600 hover:underline"
                    >
                      Having trouble signing in?
                    </Link>
                  </div>
                  <input
                    id="password"
                    type="password"
                    name="password"
                    className="form-input w-full text-gray-800"
                    placeholder="Enter your password"
                    required
                    defaultValue={formData.password}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <div className="flex justify-between">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        defaultChecked={checked}
                        onClick={saveDataCookie}
                        className="form-checkbox"
                      />
                      <span className="text-gray-600 ml-2">
                        Keep me signed in
                      </span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                  <button
                    type="submit"
                    className="btn text-white bg-blue-600 hover:bg-blue-700 w-full"
                  >
                    Sign in
                  </button>
                </div>
              </div>
            </form>
            <div className="flex items-center my-6">
              <div
                className="border-t border-gray-300 grow mr-3"
                aria-hidden="true"
              ></div>
              <div className="text-gray-600 italic">Or</div>
              <div
                className="border-t border-gray-300 grow ml-3"
                aria-hidden="true"
              ></div>
            </div>
            <form>
              <div className="flex flex-wrap -mx-3 mb-3">
                <div className="w-full px-3">
                  <button className="btn px-0 text-white bg-gray-900 hover:bg-gray-800 w-full relative flex items-center">
                    <svg
                      className="w-4 h-4 fill-current text-white opacity-75 shrink-0 mx-4"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7.95 0C3.578 0 0 3.578 0 7.95c0 3.479 2.286 6.46 5.466 7.553.397.1.497-.199.497-.397v-1.392c-2.187.497-2.683-.993-2.683-.993-.398-.895-.895-1.193-.895-1.193-.696-.497.1-.497.1-.497.795.1 1.192.795 1.192.795.696 1.292 1.888.895 2.286.696.1-.497.298-.895.497-1.093-1.79-.2-3.578-.895-3.578-3.975 0-.895.298-1.59.795-2.087-.1-.2-.397-.994.1-2.087 0 0 .695-.2 2.186.795a6.408 6.408 0 011.987-.299c.696 0 1.392.1 1.988.299 1.49-.994 2.186-.795 2.186-.795.398 1.093.199 1.888.1 2.087.496.596.795 1.291.795 2.087 0 3.08-1.889 3.677-3.677 3.875.298.398.596.895.596 1.59v2.187c0 .198.1.497.596.397C13.714 14.41 16 11.43 16 7.95 15.9 3.578 12.323 0 7.95 0z" />
                    </svg>
                    <span className="flex-auto pl-16 pr-8 -ml-16">
                      Continue with GitHub
                    </span>
                  </button>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3">
                <div className="w-full px-3">
                  <button
                    onClick={() => {}}
                    className="btn px-0 text-white bg-red-600 hover:bg-red-700 w-full relative flex items-center"
                  >
                    <svg
                      className="w-4 h-4 fill-current text-white opacity-75 shrink-0 mx-4"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z" />
                    </svg>
                    <span className="flex-auto pl-16 pr-8 -ml-16">
                      Continue with Google
                    </span>
                  </button>
                </div>
              </div>
            </form>
            <div className="text-gray-600 text-center mt-6">
              Don't you have an account?{" "}
              <Link
                to="/signup"
                className="text-blue-600 hover:underline transition duration-150 ease-in-out"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
