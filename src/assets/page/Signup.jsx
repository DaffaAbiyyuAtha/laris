import React from "react";
import { useEffect } from "react";
import Navbar from "../component/Navbar";
import { FaFacebookF, FaEye } from "react-icons/fa6";
import { Link, useNavigate, useParams } from "react-router-dom";
import PopUpRegister from "../component/popUp/popUpRegister";

function Signup() {
  let [pass, setPassword] = React.useState("password");
  let [cPass, setCPassword] = React.useState("password");
  const [message, setMessage] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();
  const [popUpOpen, setPopUpOpen] = React.useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  function changePassword() {
    if (pass === "password") {
      setPassword("text");
    } else {
      setPassword("password");
    }
  }

  function changeCPassword() {
    if (cPass === "password") {
      setCPassword("text");
    } else {
      setCPassword("password");
    }
  }

  function handleLogin() {
    setLoading(true);
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  }
  
  useEffect(() => {
  if (message) {
      const timer = setTimeout(() => setMessage(""), 3000);
      return () => clearTimeout(timer);
  }
  }, [message]);

  // function popUpSubmit() {
  //   setPopUpOpen(!popUpOpen);
  // }

  async function regisUser(itemData) {
    itemData.preventDefault();
    setLoading(true);

    const fullName = itemData.target.fullName.value;
    const email = itemData.target.email.value;
    const roleId = 3;
    const password = itemData.target.password.value;
    const confirmPassword = itemData.target.confirmPassword.value;

    if (password !== confirmPassword) {
      setMessage("Password and confirm password must be the same.");
      setLoading(false);
      return;
    }

    setTimeout(async () => {
      const form = new URLSearchParams();
      form.append("fullName", fullName);
      form.append("email", email);
      form.append("roleId", roleId);
      form.append("password", password);

      try {
          const dataRegisInput = await fetch("http://localhost:8100/auth/register", {
              method: "POST",
              body: form,
          });

          const listData = await dataRegisInput.json();
          setMessage(listData.message);
          console.log(listData)

          if (listData.success) {
              navigate("/login");
          }
      } catch (error) {
          setMessage("Something went wrong. Please try again.");
      } finally {
          setLoading(false);
      }
    }, 2000);
  }


  return (
    <>
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="spinner"></div>
        </div>
      )}
      <div className="">
        <div className="mb-12">
          <Navbar />
        </div>
        {message && (
          <div
            className={`fixed top-20 right-1/2 transform translate-x-1/2 px-4 py-2 rounded-lg shadow-lg transition-opacity duration-500 ease-in-out ${
              typeof message === "object" && message.success === false ? "bg-red-500" : "bg-[#33BEC5]"
            } text-white`}
          >
            {typeof message === "object" ? message.message : message}
          </div>
        )}
        <div className="flex justify-center mb-44">
          <div className="w-[454px] border rounded-3xl bg-[#ECF6FF] shadow-lg">
            <div className="flex justify-between pt-6 px-8 mb-10">
              <div 
                className="text-[#0C0D36]/60 cursor-pointer"
                onClick={() => handleLogin()}
              >
                Old Customer
              </div>
              <button
                className="border-b-2 border-[#33BEC5] text-[#0C0D36]"
                disabled
              >
                New Customer
              </button>
            </div>
            <div className="text-center text-3xl mb-8">Sign Up</div>
            <div className="flex gap-8 mb-2 text-[#ECF6FF] justify-center items-center">
              <div className="bg-[#3D5A98] flex justify-center items-center gap-8 py-2 pl-4 pr-9 rounded">
                <FaFacebookF className="text-2xl" />
                <div className="text-xl">Continue With Facebook</div>
              </div>
            </div>
            <div className="text-center mb-1">
              We will not post on your behalf or share
            </div>
            <div className="text-center">
              any information without your consent.
            </div>
            <div className="flex items-center my-4 px-[48px] mb-4">
              <hr className="flex-grow border-t border-[#000]" />
              <span className="mx-2">atau</span>
              <hr className="flex-grow border-t border-[#000]" />
            </div>
            <div className="px-[48px]">
              <form onSubmit={regisUser}>
                <div className="mb-4">
                  <label htmlFor="fullName" className="text-[#0C0D36] mb-1">
                    Full name
                  </label>
                  <input
                    className="rounded-lg w-full h-11 p-4"
                    type="text"
                    name="fullName"
                    id="fullName"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="text-[#0C0D36] mb-1">
                    Email Address
                  </label>
                  <input
                    className="rounded-lg w-full h-11 p-4"
                    type="email"
                    name="email"
                    id="email"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="password" className="">
                    Password
                  </label>
                  <div className="flex w-full items-center rounded-lg bg-white h-11 p-4 overflow-hidden ">
                    <input
                      type={pass}
                      name="password"
                      id="password"
                      className="flex-1 outline-none"
                    />
                    <button
                      type="button"
                      onClick={changePassword}
                      className="text-[#33BEC5]"
                    >
                      <FaEye />
                    </button>
                  </div>
                </div>
                <div className="mb-2">
                  <label htmlFor="confirmPassword" className="">
                    Confirm Password
                  </label>
                  <div className="flex w-full items-center rounded-lg bg-white h-11 p-4 overflow-hidden ">
                    <input
                      type={cPass}
                      name="confirmPassword"
                      id="confirmPassword"
                      className="flex-1 outline-none"
                    />
                    <button
                      type="button"
                      onClick={changeCPassword}
                      className="text-[#33BEC5]"
                    >
                      <FaEye />
                    </button>
                  </div>
                </div>
                <div className="flex justify-between mb-4">
                  <div className="flex gap-2">
                    <input
                      type="checkbox"
                      name="keep"
                      id="keep"
                      className="accent-[#33BEC5]"
                    />
                    <label
                      htmlFor="keep"
                      className="text-xs font-medium text-black/60"
                    >
                      Keep me signed in
                    </label>
                  </div>
                  <div className="text-xs font-medium text-black/60">
                    Forget Password?
                  </div>
                </div>
                <div className="mb-3">
                  <button
                    type="submit"
                    className="text-[#ECF6FF] font-medium bg-[#33BEC5] w-full h-11 rounded-md"
                  >
                    Sign Up Now
                  </button>
                </div>
                <div className="text-xs text-center mb-14">
                  By creating or registering an account, you agree to the contents
                  of our Terms and Conditions & Privacy Policy.
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
