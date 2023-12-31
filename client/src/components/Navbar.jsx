import { AiFillHome, AiFillSafetyCertificate } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import { HiOutlineLogout } from "react-icons/hi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import newRequest from "../utils/newRequest";
const icons = [
  {
    id: 1,
    icon: <AiFillHome size={24} />,
    url: "/home",
    name: "Home",
  },
  {
    id: 2,
    icon: <FaLocationDot size={24} />,
    url: "/location",
    name: "Location",
  },
  {
    id: 3,
    icon: <AiFillSafetyCertificate size={24} />,
    url: "/safety",
    name: "Safety-Tips",
  },
  // {
  //   id: 4,
  //   icon: <FaUserAlt size={24} />,
  //   url: "/location",
  //   name: "Profile",
  // },
];

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await newRequest.post("auth/logout");
      localStorage.setItem("currentUser", null);
      navigate("/");
      window.location.reload(true);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <header className="fixed md:bg-white border-t-[1px] font-Poppins md:border-b-[1px] flex justify-center bottom-0 md:top-0 left-0 z-[100] h-16 w-full">
        <nav className="flex flex-wrap items-center px-24 justify-between w-full max-w-[1200px] h-full  text-lg text-gray-700 bg-white">
          <div className="flex px-4 py-2 md:hidden items-center  justify-between w-full">
            {icons.map((icon) => (
              <Link to={icon.url} key={icon.id}>
                <span className="hover:text-pink-800 ease-in-out duration-200">
                  {icon.icon}
                </span>
              </Link>
            ))}
            <img
              className="h-8 w-8 rounded-full"
              src={user?.profileImg}
              alt={user?.username}
            />
          </div>

          <div className="hidden p-2  w-full md:flex md:items-center justify-between">
            <Link to="/">
              <p className=" font-bold tracking-wide">CommuniSafe</p>
            </Link>
            <div className="flex w-[60%] justify-end gap-4 items-center">
              {icons.map((icon) => (
                <Link key={icon.id} to={icon.url}>
                  <span className=" text-[15px] font-semibold">
                    {icon.name}
                  </span>
                </Link>
              ))}
              {user && (
                <img
                  className="h-8 w-8 rounded-full"
                  src={user?.profileImg}
                  alt={user?.username}
                />
              )}
              {user && (
                <HiOutlineLogout
                  onClick={handleLogout}
                  size={20}
                  className="cursor-pointer"
                />
              )}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
