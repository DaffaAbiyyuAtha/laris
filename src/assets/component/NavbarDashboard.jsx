import React from "react";
import { useDispatch } from "react-redux";
import profile from "../img/profile.svg";
import { FaBagShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { datasProfile } from "../redux/reducers/profile";
import { Link, Navigate, useNavigate } from "react-router-dom";

function NavbarDashboard() {
  const data = useSelector((state) => state.profile.dataProfile);
  console.log(data)
  const tokens = useSelector((state) => state.auth.token);
  console.log(tokens)
  const userPicture = data?.profile?.picture || profile;
  const [img, setImg] = React.useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [file, setFile] = React.useState(null);
  const [preview, setPreview] = React.useState(null);

  function popupProfile(){
    if (img === false) {
      setImg(true);
    } else {
      setImg(false)
    }
  }
  function closeImg(){
    navigate(0)
  }

  async function changeImg(e) {
    e.preventDefault()
    console.log("changeImg function called");
    if (!file) {
      alert("Pilih gambar terlebih dahulu!");
      return;
    }

    const fullname = data.profile.fullName;
    const body = new FormData()
    body.append( 'picture', file)
    body.append('fullname', fullname)

    try {
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
        navigate(0);
      } else {
        alert("Gagal update foto profil");
      }
    } catch (error) {
      console.error("Error:", error);
    }
    
  }

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);

    reader.onloadend = () => {
      setPreview(reader.result);
    };
  };

  return (
    <>
      <div className="flex items-center gap-3 text-[#0C0D36]">
        <button onClick={popupProfile}>
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
          className="fixed inset-0 bg-black/20 flex justify-center items-center z-10">
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
