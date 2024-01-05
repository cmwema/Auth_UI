import React, { useState } from "react";
import Footer from "../Footer";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";

function LogIn() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <div className="flex flex-1 flex-col items-center justify-between p-3">
      <div className="bg-white flex flex-col gap-4 p-2 md:p-20 justify-center h-[80%]">
        <div className="w-full max-w-[500px] flex flex-col gap-4">
          <form
            method="POST"
            action=""
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 pt-20"
          >
            <div>
              <h1 className="text-3xl font-bold">Welcome Back!</h1>
              <p className="text-gray-400 font-medium">
                Please Sign in to continue.
              </p>
            </div>
            <input
              type="number"
              name="id"
              id="id"
              placeholder="Enter ID number"
              className="rounded-l p-2 w-full rounded bg-gray-100 border-transparent focus:border-transparent focus:ring-0 focus:outline-none"
            />

            <div className="flex items-center p-2 bg-gray-100 w-full justify-between rounded">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-gray-100 border-transparent focus:border-transparent focus:ring-0 focus:outline-none"
                placeholder="Enter password"
              />
              <button
                onClick={togglePasswordVisibility}
                className="password-toggle-button"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <FaEye className="text-gray-400" />
                ) : (
                  <FaEyeSlash className="text-gray-400" />
                )}
              </button>
            </div>

            <input
              className="w-full bg-[#FAD44F] rounded p-3 font-semibold"
              type="submit"
              value="Sign in"
            />
          </form>
          {/* sign in with */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-center">
              <p className="text-gray-400 font-medium text-xl">or</p>
            </div>
            <div className="flex flex-col md:flex-row gap-4 items-center justify-start">
              <button className="flex gap-2 items-center justify-start border border-gray-300 rounded-lg p-4 text-md font-semibold">
                <FcGoogle className="text-2xl" /> Sign in with Google
              </button>
              <button className="flex gap-2 items-center justify-start border border-gray-300 rounded-lg p-4 text-md font-semibold">
                <FaFacebookSquare className="text-2xl text-blue-800" />
                Sign in with Facebook
              </button>
            </div>
          </div>

          {/* forgot pass */}
          <div className="flex flex-col items-center justify-center gap-4 pt-4">
            <a
              href="/"
              className="forgot-password-link text-blue-600 hover:underline"
            >
              Forgot password?
            </a>
            <p className="text-gray-400">
              Don't have an account?
              <a href="/" className="registration-link px-2 hover:underline">
                Go to registration.
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LogIn;
