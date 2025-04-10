import React, { useRef, useEffect, useState } from "react";
import Sidebar from "../component/Sidebar";
import NavbarDashboard from "../component/NavbarDashboard";
import product1 from "../img/product1.svg"
import product2 from "../img/product2.svg"
import { FaArrowAltCircleRight } from "react-icons/fa";

function Dashboard() {
    const [transactions, setTransactions] = React.useState([]);
    const [users, setUsers] = React.useState([]);

    async function listTransactions() {
        const data = await fetch("http://localhost:8100/order", {});
        const listAllTransactions = await data.json();
        setTransactions(listAllTransactions.result);
    }

    async function listUsers() {
        const dataForUser = await fetch("http://localhost:8100/user/admin/manage", {});
        const listAllUsers = await dataForUser.json();
        setUsers(listAllUsers.result);
    }

    const totalRevenue = transactions.reduce((sum, item) => sum + item.total_price, 0);

    useEffect(() => {
        listTransactions();
        listUsers();
    }, []);

    return (
        <div className="flex h-screen text-[#0C0D36]">
            <div className="w-1/5">
                <Sidebar />
            </div>
            <div className="bg-[rgb(245,245,251)] w-4/5 p-10 flex flex-col h-screen">
                <div className="flex justify-between">
                    <div className="text-2xl text-[#0C0D36]">
                        Dashboard
                    </div>
                    <div className="">
                        <NavbarDashboard />
                    </div>
                </div>
                <div className="text-[#9191A9] mb-6">
                    Look what you have made today!
                </div>
                <div className="flex mb-6 w-full justify-between gap-10">
                    <div className="w-1/3 bg-white p-6 rounded-lg">
                        <div className="text-[#C5C5C5]">Customer</div>
                        <div className="font-semibold text-3xl text-[#0C0D36]">
                            {users.length}
                        </div>
                    </div>
                    <div className="w-1/3 bg-white p-6 rounded-lg">
                        <div className="text-[#C5C5C5]">Revenue</div>
                        <div className="font-semibold text-3xl text-[#0C0D36]">
                            Rp {totalRevenue.toLocaleString('id-ID')}
                        </div>
                    </div>
                    <div className="w-1/3 bg-white p-6 rounded-lg">
                        <div className="text-[#C5C5C5]">Transaction</div>
                        <div className="font-semibold text-3xl text-[#0C0D36]">
                            {transactions.length}
                        </div>
                    </div>
                </div>
                <div className="mb-6 font-medium text-lg">
                    Recent Transactions
                </div>
                <div className="h-0 flex-grow overflow-y-auto">
                    {transactions.length === 0 ? (
                        <div className="flex w-full h-full items-center justify-center">we have no transactions</div>
                    ) : (
                        transactions.map((items) => {
                            return (
                                <div className="flex text-lg mb-4 items-center bg-white rounded-lg p-3">
                                    <div className="flex gap-3 items-center w-2/6">
                                        <div className="">
                                            <img src={items.order_items[0]?.product_image || product1} alt="" className="h-11 w-11 rounded"/>
                                        </div>
                                        <div className="text-lg">{items.user.fullname}</div>
                                    </div>
                                    <div className="w-2/6">Rp {items.total_price.toLocaleString('id-ID')}</div>
                                    <div className="w-2/6">
                                        {new Date(items.transaction_time).toLocaleDateString('en-US', {
                                            day: 'numeric',
                                            month: 'long',
                                            year: 'numeric'
                                        })}
                                    </div>
                                    <div className="">
                                        <FaArrowAltCircleRight />
                                    </div>
                                </div>
                            )
                        })
                    )}
                </div>
            </div>
        </div>
    )
}
export default Dashboard