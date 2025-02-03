import { useNavigate } from "react-router-dom";

import Logo from "../img/logo.svg";

export default function LoginSuccessAdmin() {
  const nav = useNavigate();
  function buttonClickTransaction() {
    nav("/dashboard/transaction/sell-product");
  }

  function buttonClickCategories() {
    nav("/categories");
  }

  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen gap-12">
        <img src={Logo} alt="logo" className="w-[465px]" />
        <div className="flex flex-col gap-14">
          <div className=" flex flex-col gap-4 items-center">
            <h1 className="text-[28px]">Your Purchase Was Successful</h1>
            <div className="text-base flex flex-col items-center gap-2">
              <h2 className="flex gap-1">Please Wait For Confirmation</h2>
              <h3>From Admin</h3>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <button
              className="px-8 py-3 rounded-lg bg-[#33BEC5] text-white font-medium"
              onClick={buttonClickTransaction}
            >
              See Transactions
            </button>
            <button
              className="px-8 py-3 rounded-lg bg-[#F3F3F3] text-[#BBBBBB]"
              onClick={buttonClickCategories}
            >
              Back To Shopping
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center border-[#E4E4E4] border-t-2 text-[#979797] h-24">
        2024 Laris
      </div>
    </div>
  );
}
