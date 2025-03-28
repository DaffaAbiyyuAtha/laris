import React from "react";
import { Link, useLocation,useNavigate, useParams } from "react-router-dom";
import logo from "../img/logo.svg";
import { logout } from "../redux/reducers/auth"
import { useDispatch, useSelector } from "react-redux";
import { removeData } from "../redux/reducers/profile";

function Sidebar() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation(); 
    function clearData() {
        dispatch(logout());
        dispatch(removeData());
        navigate("/login");
      }

    const menuItems = [
        { path: "/dashboard", label: "Dashboard" },
        { path: "/dashboard/product", label: "My Products" },
        { path: "/dashboard/transaction/sell-product", label: "Transactions" },
        { path: "/dashboard/my-account", label: "My Account" },
        { path: "/dashboard/my-favorite", label: "My Favorite" }
    ];

    return (
        <div className="flex flex-col justify-between h-screen">
            <div>
                <Link to="/" className="flex justify-center pt-8 px-8 mb-16">
                    <img src={logo} alt="Logo" />
                </Link>
                <div className="flex flex-col gap-6 pl-8 text-[#C5C5C5]">
                    {menuItems.map((item) => (
                        <Link 
                            key={item.path}
                            to={item.path}
                            className={`py-4 ${
                                location.pathname === item.path 
                                    ? "bg-gradient-to-r from-white to-[#24B8C5] border-r-4 border-[#198B95] text-[#0C0D36]"
                                    : "hover:text-[#24B8C5]"
                            }`}
                        >
                            {item.label}
                        </Link>
                    ))}
                    <div className="hover:text-[#24B8C5]">Store Settings</div>
                </div>
            </div>
            <button 
                onClick={clearData}
                className="flex px-8 pb-24 justify-start text-[#C5C5C5] hover:text-red-500">
                    Logout
            </button>
        </div>
    );
}

export default Sidebar;
