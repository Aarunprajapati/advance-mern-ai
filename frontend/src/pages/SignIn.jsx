import AuthBgImage from "../assets/authBg.png";
const SignIn = () => {
  return (
    <div
      className="w-full h-screen"
      style={{
        backgroundImage: `url(${AuthBgImage})`,
      }}
    >
      SignIn
    </div>
  );
};

export default SignIn;
