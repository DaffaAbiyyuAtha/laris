import { useNavigate } from "react-router-dom";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { datasProfile } from "../redux/reducers/profile";

import Logo from "../img/logo.svg";

export default function LoginSuccess() {
  const [loading, setLoading] = React.useState(false);
  const data = useSelector((state) => state.profile.dataProfile);
  const nav = useNavigate();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  function handleDashboard() {
    setLoading(true);
    setTimeout(() => {
      nav("/dashboard");
    }, 2000);
  }

  function handleHome() {
    setLoading(true);
    setTimeout(() => {
      nav("/");
    }, 2000);
  }

  return (
    <>
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="spinner"></div>
        </div>
      )}
      <div className="flex flex-col h-screen justify-between">
        <div className="flex flex-col h-screen w-full justify-center items-center">
          <div className="mb-12">
            <img src={Logo} alt="" />
          </div>
          <div className="text-2xl text-[#0C0D36] font-semibold mb-4">Login Successful</div>
          <div className="text-[#525252] text-base mb-1">Welcome</div>
          <div className="text-lg text-[#0C0D36] font-semibold mb-1">{data.profile.fullName}</div>
          <div className="text-[#525252] text-base mb-12">Have a Nice Day</div>
          <div 
            onClick={handleDashboard}
            className="text-white cursor-pointer text-center w-[180px] py-4 rounded-lg mb-4 bg-[#33BEC5]">
              My Dashboard
          </div>
          <div 
            onClick={handleHome}
            className="text-[#BBBBBB] cursor-pointer text-center w-[180px] py-4 rounded-lg bg-[#F3F3F3]">
              Go to Home
          </div>
        </div>
        <div className="flex justify-center text-lg text-[#BBBBBB] p-5 border-[#F3F3F3] border-t-2">2025 Laris Toko</div>
      </div>
    </>
  );
}
