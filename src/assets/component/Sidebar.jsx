import React, { useEffect, useMemo } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../img/logo.svg";
import { logout } from "../redux/reducers/auth";
import { useDispatch, useSelector } from "react-redux";
import { removeData } from "../redux/reducers/profile";

function Sidebar() {
    const tokens = useSelector((state) => state.auth.token);
    const data = useSelector((state) => state.profile.dataProfile);
    const [loading, setLoading] = React.useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();

    useEffect(() => {
        if (!tokens) {
            navigate("/login", { state: { message: "You must login to see dashboard" } });
        }
    }, [tokens, navigate]);    

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, [location.pathname]);

    function clearData() {
        dispatch(logout());
        dispatch(removeData());
        handleNavigation("/login", { state: { message: "You have successfully logged out of your account" } });
    }

    const menuItems = useMemo(() => {
        const baseMenu = [
            { path: "/dashboard", label: "Dashboard" },
            { path: "/dashboard/product", label: "My Products" },
            { path: "/dashboard/transaction/sell-product", label: "Transactions" },
            { path: "/dashboard/my-account", label: "My Account" },
            { path: "/dashboard/my-favorite", label: "My Favorite" },
        ];
    
        if (data?.user?.roleId === 1) {
            baseMenu.push({ path: "/dashboard/account-setting/owner", label: "Account Setting" });
        } else if (data?.user?.roleId === 2) {
            baseMenu.push({ path: "/dashboard/account-setting/admin", label: "Account Setting" });
        }
    
        return baseMenu;
    }, [data?.user?.roleId]);
    const handleNavigation = (path) => {
        if (location.pathname !== path) {
            setLoading(true);
            setTimeout(() => navigate(path), 2000);
        }
    };
    
    return (
        <>
            {loading && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="spinner"></div>
                </div>
            )}
            <div className="flex flex-col justify-between h-screen">
                <div>
                    <div onClick={() => handleNavigation("/")} className="flex justify-center pt-8 px-8 mb-16 cursor-pointer">
                        <img src={logo} alt="Logo" />
                    </div>
                    <div className="flex flex-col gap-6 pl-8 text-[#C5C5C5]">
                        {menuItems.map((item) => (
                            <div
                                key={item.path}
                                onClick={() => handleNavigation(item.path)}
                                className={`py-4 cursor-pointer ${
                                    location.pathname === item.path
                                        ? "bg-gradient-to-r from-white to-[#24B8C5] border-r-4 border-[#198B95] text-[#0C0D36]"
                                        : "hover:text-[#24B8C5]"
                                }`}
                            >
                                {item.label}
                            </div>
                        ))}
                    </div>
                </div>
                <button
                    onClick={clearData}
                    className="flex px-8 pb-24 justify-start text-[#C5C5C5] hover:text-red-500">
                    Logout
                </button>
            </div>
        </>
    );
}

export default Sidebar;
