import React from "react";
import { Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import SignIn from "./pages/SignIn";

const App = () => {
  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  );
};

export default App;
