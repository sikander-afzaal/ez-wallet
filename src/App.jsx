import { Route, Routes } from "react-router-dom";
import Connected from "./Pages/Dashboard/Connected";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Home from "./Pages/Dashboard/Home";
import Referral from "./Pages/Dashboard/Referral";
import Rewards from "./Pages/Dashboard/Rewards";
import Topup from "./Pages/Dashboard/Topup";
import Login from "./Pages/Login";
import MasterPin from "./Pages/MasterPin";
import SignUp from "./Pages/SignUp";
import Verify from "./Pages/Verify";

function App() {
  return (
    <div className="bg-main bg-cover  bg-center bg-no-repeat w-full min-h-screen flex justify-center items-center flex-col">
      <Routes>
        <Route element={<Login />} path="/" />
        <Route element={<SignUp />} path="/sign-up" />
        <Route element={<Verify />} path="/verify" />
        <Route element={<MasterPin />} path="/master-pin" />
        <Route element={<Dashboard />} path="/dashboard">
          <Route element={<Home />} index path="" />
          <Route element={<Connected />} path="connected" />
          <Route element={<Topup />} path="top-up" />
          <Route element={<Referral />} path="referral" />
          <Route element={<Rewards />} path="rewards" />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
