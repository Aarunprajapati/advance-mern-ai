import { useState } from "react";
import AuthBgImage from "../assets/authBg.png";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../config/axios";
import { APIS } from "../../config/httpConfig";

const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axiosInstance.post(APIS.signup, user);
  };
  const handleBtnClick = () => {
    return navigate("/signin", { replace: true });
  };

  return (
    <div
      className="w-full h-screen bg-cover flex justify-center items-center mx-auto"
      style={{
        backgroundImage: `url(${AuthBgImage})`,
      }}
    >
      <div className="max-w-xl w-[90%] backdrop-blur bg-black/30 shadow-blue-500 shadow-sm rounded-2xl">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center gap-10 p-6 w-full"
        >
          <h1 className="text-blue-300 text-3xl font-semibold text-center w-full tracking-tight">
            Register{" "}
            <span className="bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">
              Virtual Assistant
            </span>
          </h1>

          <div className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={user.name}
              onChange={handleInputChange}
              className="border border-blue-300 outline-none shadow-blue-500 shadow-sm transition-all p-4 text-white rounded-lg bg-transparent"
            />

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={user.email}
              onChange={handleInputChange}
              className="border border-blue-300 outline-none shadow-blue-500 shadow-sm transition-all  p-4 text-white rounded-lg bg-transparent"
            />

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={user.password}
              onChange={handleInputChange}
              className="border border-blue-300 outline-none shadow-blue-500 transition-all shadow-sm p-4 text-white rounded-lg bg-transparent"
            />

            <button
              type="submit"
              className="text-white px-4 py-2 mt-4 my-2 border border-blue-500 shadow-sm outline-none bg-gradient-to-r from-pink-600 to-blue-600 w-24 rounded-xl cursor-pointer transition transform active:scale-95 active:shadow-inner "
            >
              Signup
            </button>
            <div className="text-neutral-200 text-center w-full">
              Already Have an account ?{" "}
              <button
                className="text-blue-200 decoration-1 underline cursor-pointer transition transform active:scale-95"
                onClick={handleBtnClick}
              >
                SignIn
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
