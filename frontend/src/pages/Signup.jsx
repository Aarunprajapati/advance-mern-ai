import AuthBgImage from "../assets/authBg.png";

const Signup = () => {
  return (
    <div
      className="w-full h-screen bg-cover object-cover flex justify-center items-center mx-auto"
      style={{
        backgroundImage: `url(${AuthBgImage})`,
      }}
    >
      <div className="max-w-xl  max-h-96 w-[90%] h-[600px] backdrop-blur bg-black/30 border-none shadow-sm inset-0 outline-none rounded-2xl shadow-blue-500 "></div>
    </div>
  );
};

export default Signup;
