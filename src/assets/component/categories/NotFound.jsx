import { FaReply } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const nav = useNavigate();
  function buttonClick() {
    nav("/");
  }
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-5xl  font-black font-serif">Oops!</h1>
      <div>
        <h1 className="text-[#64FCD9] relative text-[500px] font-extrabold ">
          404
        </h1>
        <svg
          width="362"
          height="401"
          viewBox="0 0 362 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="absolute inset-[580px] mx-auto"
        >
          <g clip-path="url(#clip0_6_555)">
            <path
              d="M294.178 239.289C329.99 239.289 359.022 210.237 359.022 174.4C359.022 138.563 329.99 109.511 294.178 109.511C258.366 109.511 229.335 138.563 229.335 174.4C229.335 210.237 258.366 239.289 294.178 239.289Z"
              fill="white"
            />
            <path
              d="M80.8415 239.289C116.654 239.289 145.685 210.237 145.685 174.4C145.685 138.563 116.654 109.511 80.8415 109.511C45.0294 109.511 15.998 138.563 15.998 174.4C15.998 210.237 45.0294 239.289 80.8415 239.289Z"
              fill="white"
            />
            <path
              d="M118.965 122.029C125.602 132.248 129.432 144.34 129.432 157.454C129.432 193.304 100.414 222.343 64.5882 222.343C50.292 222.343 37.102 217.659 26.3799 209.825C37.953 227.537 57.9506 239.289 80.7565 239.289C116.582 239.289 145.6 210.251 145.6 174.4C145.6 152.855 135.133 133.78 118.965 122.029Z"
              fill="#EFEFEF"
            />
            <path
              d="M332.301 122.029C338.939 132.248 342.768 144.34 342.768 157.454C342.768 193.304 313.75 222.343 277.925 222.343C263.628 222.343 250.438 217.659 239.716 209.825C251.289 227.622 271.287 239.289 294.093 239.289C329.918 239.289 358.936 210.251 358.936 174.4C358.936 152.855 348.384 133.78 332.301 122.029Z"
              fill="#EFEFEF"
            />
            <path
              d="M80.8413 242.269C43.484 242.269 13.0195 211.783 13.0195 174.4C13.0195 137.016 43.3989 106.53 80.8413 106.53C118.199 106.53 148.663 137.016 148.663 174.4C148.663 211.783 118.199 242.269 80.8413 242.269ZM80.8413 112.491C46.7177 112.491 18.9763 140.252 18.9763 174.4C18.9763 208.547 46.7177 236.308 80.8413 236.308C114.965 236.308 142.706 208.547 142.706 174.4C142.706 140.252 114.965 112.491 80.8413 112.491Z"
              fill="#231F20"
            />
            <path
              d="M80.8415 215.104C98.1835 215.104 112.242 201.036 112.242 183.682C112.242 166.327 98.1835 152.259 80.8415 152.259C63.4994 152.259 49.4409 166.327 49.4409 183.682C49.4409 201.036 63.4994 215.104 80.8415 215.104Z"
              fill="#231F20"
            />
            <path
              d="M73.0976 190.835C80.1942 190.835 85.9471 185.078 85.9471 177.976C85.9471 170.875 80.1942 165.118 73.0976 165.118C66.001 165.118 60.248 170.875 60.248 177.976C60.248 185.078 66.001 190.835 73.0976 190.835Z"
              fill="white"
            />
            <path
              d="M294.178 242.269C256.821 242.269 226.356 211.783 226.356 174.4C226.356 137.016 256.821 106.53 294.178 106.53C331.536 106.53 362 137.016 362 174.4C362 211.783 331.536 242.269 294.178 242.269ZM294.178 112.491C260.055 112.491 232.313 140.252 232.313 174.4C232.313 208.547 260.055 236.308 294.178 236.308C328.302 236.308 356.043 208.547 356.043 174.4C356.043 140.252 328.302 112.491 294.178 112.491Z"
              fill="#231F20"
            />
            <path
              d="M294.178 215.104C311.52 215.104 325.579 201.036 325.579 183.682C325.579 166.327 311.52 152.259 294.178 152.259C276.836 152.259 262.777 166.327 262.777 183.682C262.777 201.036 276.836 215.104 294.178 215.104Z"
              fill="#231F20"
            />
            <path
              d="M286.435 190.835C293.531 190.835 299.284 185.078 299.284 177.976C299.284 170.875 293.531 165.118 286.435 165.118C279.338 165.118 273.585 170.875 273.585 177.976C273.585 185.078 279.338 190.835 286.435 190.835Z"
              fill="white"
            />
            <path
              d="M3.65911 37.7242C16.9341 50.8382 30.039 28.4422 72.7574 22.8219C108.413 18.1383 130.027 33.0406 136.58 22.5664C143.047 12.0071 115.391 -3.91713 62.9713 0.851613C24.0822 4.42817 -11.7433 22.5664 3.65911 37.7242Z"
              fill="#231F20"
            />
            <path
              d="M352.299 31.8485C335.705 22.4813 328.047 47.5172 286.35 63.8672C251.63 77.4922 226.101 68.4656 222.187 80.3023C218.187 92.139 250.013 100.569 301.582 82.6867C339.96 69.3172 371.531 42.6633 352.299 31.8485Z"
              fill="#231F20"
            />
            <path
              d="M62.7158 386.098C62.7158 386.098 110.285 290.382 194.615 292.511C278.946 294.725 307.538 353.313 307.538 353.313C307.538 353.313 271.457 318.91 202.019 324.189C112.242 331.002 62.7158 386.098 62.7158 386.098Z"
              fill="#231F20"
            />
            <path
              d="M303.369 327.851C307.964 333.216 311.113 339.773 312.644 346.671C314.006 352.887 314.602 361.147 309.836 366.171C307.624 368.556 304.305 370.003 301.071 369.237C298.348 368.556 297.157 372.728 299.88 373.41C303.624 374.346 307.624 373.41 310.772 371.11C314.091 368.641 316.218 364.979 317.154 360.892C319.027 352.887 317.069 344.031 313.836 336.537C311.964 332.194 309.411 328.277 306.432 324.7C305.666 323.764 304.135 323.934 303.369 324.7C302.433 325.637 302.603 326.914 303.369 327.851Z"
              fill="#231F20"
            />
            <path
              d="M68.162 396.572C62.1201 397.424 55.4826 394.528 51.8235 389.589C47.909 384.224 47.4836 376.731 50.6321 370.855C51.9937 368.385 48.2494 366.171 46.8879 368.641C43.8244 374.261 43.3138 381.244 45.6965 387.205C47.9941 393.166 52.8446 397.594 58.8865 399.808C62.2903 401 65.7793 401.256 69.3533 400.745C70.5447 400.574 71.1404 399.127 70.8851 398.02C70.5447 396.827 69.3533 396.402 68.162 396.572Z"
              fill="#231F20"
            />
          </g>
          <defs>
            <clipPath id="clip0_6_555">
              <rect width="362" height="401" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <button
        className="flex items-center gap-2 text-2xl"
        onClick={buttonClick}
      >
        <FaReply />
        <p>Go Home</p>
      </button>
    </div>
  );
}
