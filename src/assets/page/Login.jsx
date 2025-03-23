import React from "react";
import Navbar from "../component/Navbar";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaFacebookF, FaEye } from "react-icons/fa6";
import { login } from "../redux/reducers/auth"
import { datasProfile } from "../redux/reducers/profile";
import PopUpLogin from "../component/popUp/popUpLogin";
import { useDispatch, useSelector } from "react-redux";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let [pass, setPassword] = React.useState("password");
  // const [popUpOpen, setPopUpOpen] = React.useState(false);
  // function popUpSubmit() {
  //   setPopUpOpen(!popUpOpen);
  // }
  function processLogin(dataLogin) {
    dataLogin.preventDefault();
    const email = dataLogin.target.email.value;
    const password = dataLogin.target.password.value;
    const form = new URLSearchParams();

    form.append("email", email);
    form.append("password", password)

    fetch("http://localhost:8100/auth/login", {
      method: "POST",
      body: form,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success === true) {
          dispatch(login(data.pageInfo.token));
          async function profile() {
            const dataProfile = await fetch("http://localhost:8100/profile", {
              headers: {
                Authorization: "Bearer " + data.pageInfo.token,
              }
            });
            const listData = await dataProfile.json();
            dispatch(datasProfile(listData.result))
            navigate("/")
          }
          profile();
        } else {
          console.log(data.message)
        }
      })
      .catch((err) => {
        console.log("Error:", err.message);
      });
  }

  function changePassword() {
    if (pass === "password") {
      setPassword("text");
    } else {
      setPassword("password");
    }
  }

  return (
    <div className="">
      {/* {popUpOpen ? "" : <PopUpLogin />} */}
      <div className="mb-12">
        <Navbar />
      </div>
      <div className="flex justify-center">
        <div className="w-[454px] border rounded-3xl bg-[#ECF6FF] shadow-lg">
          <div className="flex justify-between pt-6 px-8 mb-10">
            <button
              className="border-b-2 border-[#33BEC5] text-[#0C0D36]"
              disabled
            >
              Old Customer
            </button>
            <Link to="/sign-up" className="text-[#0C0D36]/60">
              New Customer
            </Link>
          </div>
          <div className="text-center text-3xl mb-8">Login</div>
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
            <form onSubmit={processLogin}>
              <div className="mb-4">
                <div className="text-[#0C0D36] mb-1">Email Address</div>
                <input
                  className="rounded-lg w-full h-11 p-4"
                  type="email"
                  name="email"
                  id="email"
                />
              </div>
              <div className="mb-2">
                <div className="">Password</div>
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
              <div className="flex justify-between mb-4">
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    name="keep"
                    id="keep"
                    className="accent-[#33BEC5]"
                  />
                  <label htmlFor="keep" className="text-xs font-medium text-black/60">
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
                  Login
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
  );
}

export default Login;
