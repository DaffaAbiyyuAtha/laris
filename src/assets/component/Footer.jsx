import React from "react";
import logo from "../img/logo.svg"
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterestP } from "react-icons/fa6";

function Footer() {
    return (
        <div className="bg-[#ECF6FF] px-28 pt-11">
            <div className="mb-3">
                <img src={logo} alt="" />
            </div>
            <div className="flex">
                <div className="w-1/2 pr-28">
                    <div className="mb-8">
                        Lorem ipsum dolor sit amet consectetur. Dictum est ipsum neque blandit mattis vitae faucibus tincidunt. Sit nisi ridiculus dictum velit. Viverra dolor suspendisse sagittis lectus nulla purus. Aliquam vitae volutpat pellentesque magna nulla.
                    </div>
                    <div className="mb-2">Find Us</div>
                    <div className="flex gap-2 mb-14">
                        <a href="https://www.facebook.com/">
                            <FaFacebookF />
                        </a>
                        <a href="https://www.instagram.com/">
                            <FaInstagram />
                        </a>
                        <a href="https://x.com/">
                            <FaTwitter />
                        </a>
                        <a href="https://id.pinterest.com/">
                            <FaPinterestP />
                        </a>
                    </div>
                </div>
                <div className="flex w-1/2">
                    <div className="w-1/3">
                        <div className="flex flex-col gap-2">
                            <div className="font-semibold">
                                About
                            </div>
                            <div className="">About Us</div>
                            <div className="">Terms and Conditions</div>
                            <div className="">Privacy Policy</div>
                        </div>
                    </div>
                    <div className="w-1/3">
                        <div className="flex flex-col gap-2">
                            <div className="font-semibold">
                                Service
                            </div>
                            <div className="">Help Us</div>
                            <div className="">Return Products</div>
                            <div className="">Transfer Confirmation</div>
                        </div>
                    </div>
                    <div className="w-1/3">
                        <div className="flex flex-col gap-2">
                            <div className="font-semibold">
                                Contact Us
                            </div>
                            <div className="">laris@gmail.com</div>
                            <div className="">081398749823</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center border-white border-t-2 h-24">2024 Laris</div>
        </div>
    )
}
export default Footer