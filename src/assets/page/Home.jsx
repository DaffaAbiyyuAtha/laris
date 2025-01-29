import React from "react";
import Navbar from "../component/Navbar"
import Footer from "../component/Footer"
import NavbarLogin from "../component/NavbarLogin"

function Home() {
    return (
        <div className="flex flex-col h-screen justify-between">
            <div className=""><NavbarLogin /></div>
            <div className=""><Footer /></div>
        </div>
    )
}
export default Home