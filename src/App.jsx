import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import MasterPin from "./Pages/MasterPin";
import SignUp from "./Pages/SignUp";
import Verify from "./Pages/Verify";

function App() {
  return (
    <div className="bg-main bg-cover py-[80px] bg-center bg-no-repeat w-full min-h-screen flex justify-center items-center flex-col">
      <Routes>
        <Route element={<Login />} path="/" />
        <Route element={<SignUp />} path="/sign-up" />
        <Route element={<Verify />} path="/verify" />
        <Route element={<MasterPin />} path="/master-pin" />
      </Routes>
    </div>
  );
}

export default App;
