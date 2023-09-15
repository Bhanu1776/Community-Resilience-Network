import { useEffect, useState } from "react";

const Header = () => {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const [isLoc, setLoc] = useState(null);
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        // eslint-disable-next-line no-unused-vars
        (position) => {
          setLoc(true);
        },
        (error) => {
          if (error.code === error.PERMISSION_DENIED) {
            setLoc(false);
          } else {
            console.error("Error getting location: ", error);
          }
        }
      );
    } else {
      setLoc(false);
    }
  }, []);
  return (
    <div className="z-[120] fixed md:hidden flex justify-center w-full top-4 left-0 h-14">
      <div className="flex p-2 px-4 w-[90%] items-center justify-between h-full border-[1px] bg-white border-gray-300 rounded-full">
        <p className="  font-semibold">
          Location Services:
          <span className=" text-blue-600 font-bold text-lg">
            {" "}
            {isLoc ? "ON" : "OFF"}
          </span>
        </p>
        <img
          className="w-9 h-9 rounded-full"
          src={user?.profileImg}
          alt={user?.username}
        />
      </div>
    </div>
  );
};

export default Header;
