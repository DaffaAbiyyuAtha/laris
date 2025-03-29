import React from "react";
import { useDispatch } from "react-redux";
import profile from "../img/profile.svg";
import { FaBagShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { datasProfile } from "../redux/reducers/profile";
import { Link, Navigate, useNavigate } from "react-router-dom";

function NavbarDashboard() {
  const [loading, setLoading] = React.useState(false);
  const data = useSelector((state) => state.profile.dataProfile);
  console.log(data)
  const tokens = useSelector((state) => state.auth.token);
  const userPicture = data?.profile?.picture || profile;
  const [img, setImg] = React.useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [file, setFile] = React.useState(null);
  const [preview, setPreview] = React.useState(null);
  console.log("Picture in FormData1: ", file);

  function popupProfile() {
    setLoading(true);
    setTimeout(() => {
      setImg(true);
      setLoading(false);
    }, 2000);
  }
  function closeImg() {
    navigate(0)
  }

  async function changeImg(e) {
    console.log("changeImg function called");
    e.preventDefault();
  
    if (!file) {
      alert("Pilih gambar terlebih dahulu!");
      return;
    }

    console.log("Picture in FormData2: ", file);
    
    const fullname = data.profile.fullName;
    const province = data.profile.province
    const city = data.profile.city
    const postalCode = data.profile.postalCode
    const gender = data.profile.gender
    const country = data.profile.country
    const mobile = data.profile.mobile
    const address = data.profile.address
    const body = new FormData();
    body.append("picture", file);
    body.append("fullname", fullname);
    body.append("province", province);
    body.append("city", city);
    body.append("postalCode", postalCode);
    body.append("gender", gender);
    body.append("country", country);
    body.append("mobile", mobile);
    body.append("address", address);

    for (let pair of body.entries()) {
      console.log(pair[0] + ": " + pair[1]);
    }
  
    try {
      console.log("Sending request to update profile...");
      const dataPicture = await fetch("http://localhost:8100/profile/update", {
        method: "PATCH",
        headers: {
          Authorization: "Bearer " + tokens,
        },
        body,
      });
      console.log("Response status:", dataPicture.status);
  
      if (!dataPicture.ok) {
        console.error(`HTTP error! status: ${dataPicture.status}`);
        return;
      }
  
      const listData = await dataPicture.json();
      console.log("Raw Response:", listData);
  
      if (listData.success && listData.result) {
        dispatch(datasProfile(listData.result));
      } else {
        alert("Gagal update foto profil");
      }
    } catch (error) {
      console.error("Error saat proses update:", error);
    }
  }
  

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    console.log(selectedFile);

    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);

    reader.onloadend = () => {
      setPreview(reader.result);
    };
  };

  return (
    <>
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="spinner"></div>
        </div>
      )}
      <div className="flex items-center gap-3 text-[#0C0D36]">
        <button onClick={popupProfile} disabled={loading}>
          <img
            src={userPicture}
            alt="Profile"
            className="rounded-full w-11 h-11 object-cover object-center"
          />
        </button>
        <div>Hi, {data?.profile?.fullName}</div>
        <div>
          <FaBagShopping />
        </div>
      </div>
      {img === false ? (
        <div className="hidden"></div>
      ) : (
        <div
          onClick={closeImg}
          className="fixed inset-0 bg-black/20 flex justify-center items-center z-10"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex flex-col items-center gap-10"
          >
            <img src={userPicture} alt="Profile" className="max-w-xs rounded-lg shadow-lg" />
            {preview && (
              <img src={preview} alt="Preview" className="max-w-xs rounded-lg shadow-lg" />
            )}
            <form onSubmit={changeImg}>
              <input type="file" name="file" id="file" className="hidden" onChange={handleFileChange}></input>
              <div className="flex flex-col gap-4">
                <label
                  htmlFor="file"
                  className="bg-[#33BEC5] text-white px-4 py-2 rounded-md hover:bg-white hover:text-[#33BEC5] transition"
                >
                  Choose Profile
                </label>
                <button
                  type="submit"
                  className="bg-[#33BEC5] text-white px-4 py-2 rounded-md hover:bg-white hover:text-[#33BEC5] transition"
                >
                  Change Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default NavbarDashboard;
