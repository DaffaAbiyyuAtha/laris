import { useNavigate } from "react-router-dom";

export default function PopUpLogin() {
  const nav = useNavigate();
  function buttonClick() {
    nav("/login/login-success");
  }
  return (
    <div className="flex items-center justify-center bg-black/20 w-screen absolute h-full  ">
      <div>
        <div className="bg-[#ECF6FF] flex flex-col px-32 justify-center items-center pt-9 pb-16 rounded-3xl gap-12">
          <h1 className="text-[#33BEC5] text-2xl font-bold">
            Login successful
          </h1>

          <button
            className="bg-[#33BEC5] text-white  px-4 py-3 rounded-lg text-sm font-bold"
            onClick={buttonClick}
          >
            Go to Home Page
          </button>
        </div>
      </div>
    </div>
  );
}
