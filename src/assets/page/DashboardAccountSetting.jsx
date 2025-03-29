import React, { useRef, useEffect, useState } from "react";
import Sidebar from "../component/Sidebar";
import NavbarDashboard from "../component/NavbarDashboard";
import { FaTrash } from "react-icons/fa";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { FaMagnifyingGlass, FaXmark, FaCheck } from "react-icons/fa6";

function DashboardAccountSetting(){
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);
  const [message, setMessage] = React.useState(false);
  const [user, setUser] = React.useState([]);
  const [popup, setPopup] = React.useState(false);
  const [deleted, setDeleted] = React.useState({id: null, fullname: ""});

  useEffect(() => {
    if (message) {
        const timer = setTimeout(() => setMessage(""), 3000);
        return () => clearTimeout(timer);
    }
  }, [message]);

  async function manageUser() {
    try {
      const dataUser = await fetch("http://localhost:8100/user/owner/manage");
      const listData = await dataUser.json();
      setUser(Array.isArray(listData.result) ? listData.result : []);
    } catch (error) {
      console.error("Error fetching user data:", error);
      setUser([]);
    }
  }

  async function searchUser(data) {
    data.preventDefault();
    const search = data.target.search.value;
    try {
      const dataUser = await fetch(`http://localhost:8100/user/owner/manage/search?fullname=${search}`);
      const listData = await dataUser.json();
      setUser(Array.isArray(listData.result) ? listData.result : []);
    } catch (error) {
      console.error("Error searching user:", error);
      setUser([]);
    }
  }
  

  async function deleteAccount(id) {
    const dataUser = await fetch(`http://localhost:8100/user/owner/manage/delete/${id}`, {
      method: 'DELETE',
    });
    const listData = await dataUser.json();
    console.log(listData)
    if (listData.success) {
      setMessage("You have successfully removed " + listData.result[0].fullname);
      manageUser()
      navigate(0)
    }
  }

  function confirmDelete(id, fullname){
    setDeleted({id, fullname});
    if (popup === false) {
        setPopup(true);
    } else {
        setPopup(false)
    }
}

  function cancelDelete(){
    navigate(0);
  }

  useEffect(() => {
    manageUser();
  }, []);

    return (
      <>
        {loading && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="spinner"></div>
          </div>
        )}
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
              <form
                onSubmit={searchUser} 
                className="flex justify-end">
                  <div className="flex mb-4 max-w-52 w-full gap-4 items-center border-black bg-transparent border-2 h-9 px-6 rounded-2xl overflow-hidden ">
                    <button type="submit" className="">
                        <FaMagnifyingGlass />
                    </button>
                    <input
                        type="text"
                        name="search"
                        id="search"
                        placeholder="Search"
                        className="flex-1 outline-none bg-transparent text-xs"
                    />
                  </div>
              </form>
              {message && (
                  <div
                  className={`fixed top-20 right-1/2 transform translate-x-1/2 px-4 py-2 rounded-lg shadow-lg transition-opacity duration-500 ease-in-out ${
                      message.success === false ? "bg-red-500" : "bg-[#33BEC5]"
                  } text-white`}
                  >
                  {message}
                  </div>
              )}
              <div className="h-[calc(100vh-150px)] flex justify-center items-start">
                <div className="w-full overflow-hidden rounded-lg shadow-lg">
                  <div className="overflow-y-auto max-h-[calc(100vh-250px)]">
                    <table className="w-full bg-white rounded-lg">
                      <thead className="bg-gray-200 sticky top-0 z-10">
                        <tr>
                          <th className="px-4 py-2">ID</th>
                          <th className="px-4 py-2">Full Name</th>
                          <th className="px-4 py-2">Email</th>
                          <th className="px-4 py-2">Role</th>
                          <th className="px-4 py-2">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {user.length === 0 ? (
                          <tr>
                            <td colSpan="5" className="text-center py-4 text-gray-500">
                              User not found
                            </td>
                          </tr>
                        ) : (
                          user.map((items, index) => (
                            <tr
                              key={index}
                              className={`${
                                index % 2 === 0 ? "bg-white" : "bg-[#24B8C5]"
                              } hover:opacity-75 transition`}
                            >
                              <td className="px-4 py-2 text-center">{typeof items.id === "object" ? JSON.stringify(items.id) : items.id}</td>
                              <td className="px-4 py-2 text-center truncate">{items.fullname}</td>
                              <td className="px-4 py-2 text-center truncate">{items.email}</td>
                              <td className="px-4 py-2 text-center">{items.role_name}</td>
                              <td className="px-4 py-3 flex justify-center items-center">
                                <button onClick={() => confirmDelete(items.id, items.fullname)}>
                                  <FaTrash className="hover:text-red-500" />
                                </button>
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
          </div>
        </div>
        {popup === false ? (
            <div className="hidden"></div>
          ) : (
              <div className="flex items-center top-0 left-0 justify-center absolute h-screen w-full bg-black/20">
                  <div className="flex flex-col gap-6 bg-white rounded-lg px-20 py-10">
                      <div className="flex flex-col justify-center">
                          <div className="">
                              Are You Sure To Delete
                          </div>
                          <div className="flex justify-center font-semibold text-lg">
                              {deleted.fullname}
                          </div>
                      </div>
                      <div className="flex gap-7 justify-center">
                      <button onClick={() => deleteAccount(deleted.id)} type="button">
                          <FaCheck className="hover:text-green-500"/>
                        </button>
                        <button 
                            onClick={cancelDelete}
                            type="button">
                                <FaXmark className="hover:text-red-500"/>
                        </button>
                      </div>
                  </div>
              </div>
        )}
        
      </>
    )
}

export default DashboardAccountSetting