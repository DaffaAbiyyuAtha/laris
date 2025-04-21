import React from "react";
import Sidebar from "../component/Sidebar";
import NavbarDashboard from "../component/NavbarDashboard";
import product1 from "../img/product1.svg"
import product2 from "../img/product2.svg"
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { datasProfile } from "../redux/reducers/profile";
import { useNavigate } from "react-router-dom";

function DashboardAccount() {
    const tokens = useSelector((state) => state.auth.token);
    const data = useSelector((state) => state.profile.dataProfile);
    const navigate = useNavigate();
    const [message, setMessage] = React.useState(false);
    console.log(message)
    const dispatch = useDispatch();

    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => setMessage(""), 3000);
            return () => clearTimeout(timer);
        }
    }, [message]);

    async function updateProfile(profile) {
        profile.preventDefault();
        const fullname = profile.target.fullname.value.trim() || "";
        const province = profile.target.province.value.trim() || "";
        const city = profile.target.city.value.trim();
        const postalCode = profile.target.postalCode.value.trim() || null;
        const gender = profile.target.gender.value.trim() || null;
        const country = profile.target.country.value.trim() || "";
        const mobile = profile.target.mobile.value.trim() || null;
        const address = profile.target.address.value.trim() || "";

        const form = new URLSearchParams();

        form.append("fullname", fullname);
        form.append("province", province);
        form.append("city", city === "" ? "" : city);
        if (postalCode !== null) form.append("postalCode", postalCode);
        if (gender !== null) form.append("gender", gender);
        if (mobile !== null) form.append("mobile", mobile);
        form.append("country", country);
        form.append("address", address);

        const dataProfile = await fetch("http://localhost:8100/profile/update", {
            method: "PATCH",
            headers: {
                Authorization: "Bearer " + tokens,
            },
            body: form,
        });
        const listData = await dataProfile.json();
        setMessage(listData);
        if (listData.success) {
            await fetchProfile();
        }
    }

    async function fetchProfile() {
        const dataProfile = await fetch("http://localhost:8100/profile", {
            headers: {
                Authorization: "Bearer " + tokens,
            }
        });
        const listData = await dataProfile.json();
        dispatch(datasProfile(listData.result));
    }

    useEffect(() => {
        fetchProfile();
    }, []);

    return (
        <div className="flex h-screen text-[#0C0D36]">
            <div className="w-1/5">
                <Sidebar />
            </div>
            <div className="bg-[rgb(245,245,251)] w-4/5 p-10 flex flex-col h-screen">
                <div className="flex justify-between">
                    <div className="text-2xl text-[#0C0D36]">
                        My Account
                    </div>
                    <div className="">
                        <NavbarDashboard />
                    </div>
                </div>
                <div className="text-[#9191A9] mb-6">
                    Update your current profile
                </div>
                {message && (
                    <div
                    className={`fixed top-20 right-1/2 transform translate-x-1/2 px-4 py-2 rounded-lg shadow-lg transition-opacity duration-500 ease-in-out ${
                        message.success === false ? "bg-red-500" : "bg-[#33BEC5]"
                    } text-white`}
                    >
                    {message.message}
                    </div>
                )}
                <form onSubmit={updateProfile} className="bg-white p-10 rounded-lg text-[#0C0D36] h-screen relative">
                    <div className="flex flex-col justify-between h-full">
                        <div className="">
                            <div className="flex gap-6 w-full mb-5">
                                <div className="w-full">
                                    <div className="mb-1">Full Name</div>
                                    <input 
                                        type="text" 
                                        name="fullname" 
                                        id="fullname"
                                        defaultValue={data?.profile?.fullName || ""}
                                        className="p-2 bg-[#F3F3F3] w-full rounded-lg" />
                                </div>
                            </div>
                            <div className="flex gap-6 w-full mb-5">
                                <div className="w-1/3">
                                    <div className="mb-1">Province</div>
                                    <input 
                                        type="text" 
                                        name="province" 
                                        id="province"
                                        defaultValue={data?.profile?.province || ""}
                                        className="p-2 bg-[#F3F3F3] w-full rounded-lg" />
                                </div>
                                <div className="w-1/3">
                                    <div className="mb-1">City</div>
                                    <input 
                                        type="text" 
                                        name="city" 
                                        id="city"
                                        defaultValue={data?.profile?.city ?? ""}
                                        className="p-2 bg-[#F3F3F3] w-full rounded-lg" />
                                </div>
                                <div className="w-1/3">
                                    <div className="mb-1">Postal Code</div>
                                    <input 
                                        type="text" 
                                        name="postalCode" 
                                        id="postalCode"
                                        defaultValue={data?.profile?.postalCode === 0 || data?.profile?.postalCode === "0" ? "" : data?.profile?.postalCode}
                                        className="p-2 bg-[#F3F3F3] w-full rounded-lg" />
                                </div>
                            </div>
                            <div className="flex gap-6 w-full mb-5">
                                <div className="w-1/2">
                                    <div className="mb-1">Country</div>
                                    <input 
                                        type="text" 
                                        name="country" 
                                        id="country"
                                        defaultValue={data?.profile?.country || ""}
                                        className="p-2 bg-[#F3F3F3] w-full rounded-lg" />
                                </div>
                                <div className="w-1/2">
                                    <div className="mb-1">Mobile</div>
                                    <input 
                                        type="text" 
                                        name="mobile" 
                                        id="mobile"
                                        defaultValue={data?.profile?.mobile === 0 || data?.profile?.mobile === "0" ? "" : data?.profile?.mobile}
                                        className="p-2 bg-[#F3F3F3] w-full rounded-lg" />
                                </div>
                            </div>
                            <div className="flex gap-6 w-full mb-5">
                                <div className="flex items-center gap-2 w-1/2">
                                    <input 
                                        type="radio" 
                                        name="gender" 
                                        id="male" 
                                        value="1"
                                        defaultChecked={data?.profile?.gender === 1 || ""}
                                    />
                                    <label htmlFor="male">Male</label>
                                </div>
                                <div className="flex items-center gap-2 w-1/2">
                                    <input 
                                        type="radio" 
                                        name="gender" 
                                        id="female" 
                                        value="2"
                                        defaultChecked={data?.profile?.gender === 2 || ""}
                                    />
                                    <label htmlFor="female">Female</label>
                                </div>
                            </div>
                            <div className="">
                                <div className="mb-1">Address</div>
                                <textarea 
                                    type="textarea" 
                                    name="address" 
                                    id="address"
                                    defaultValue={data?.profile?.address || ""}
                                    className="p-2 bg-[#F3F3F3] w-full rounded-lg" />
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <button type="submit" className="text-white font-medium bg-[#29A867] rounded-md py-2 px-12">
                                Save Now
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default DashboardAccount