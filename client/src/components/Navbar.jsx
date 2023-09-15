import { AiFillHome, AiFillSafetyCertificate } from 'react-icons/ai'
import { FaLocationDot } from 'react-icons/fa6'
import { FaUserAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom';
const icons = [
  {
    id: 1,
    icon: <AiFillHome size={24} />,
    url: "/home",
    name: "Home"
  },
  {
    id: 2,
    icon: <FaLocationDot size={24} />,
    url: "/location",
    name: "Location"
  },
  {
    id: 3,
    icon: <AiFillSafetyCertificate size={24} />,
    url: "/location",
    name: "Safety-Tips"
  },
  {
    id: 4,
    icon: <FaUserAlt size={24} />,
    url: "/location",
    name: "Profile"
  },
]

const Navbar = () => {

  const user = JSON.parse(localStorage.getItem("currentUser"))

  return (
    <>
      <header className="fixed bottom-0 md:top-0 left-0 z-[100] w-full"
      >
        <header>
          <nav className="flex flex-wrap items-center justify-between w-full h-16 text-lg text-gray-700 bg-white"
          >
            <div className='flex border-t-[1px] p-2 border-gray-400 md:hidden items-center justify-between w-full'>
              {
                icons.map((icon) => (
                  <Link to={icon.url} key={icon.id}>
                    <span>{icon.icon}</span>
                  </Link>
                ))
              }
            </div>

            <div
              className="hidden p-2  border-b-[1px] border-gray-300 w-full md:flex md:items-center justify-between "

            >
              <p className=' font-bold tracking-wide'>CommuniSafe</p>
              <div className='flex w-[60%] justify-end gap-4 items-center'>
                {
                  icons.map((icon) => (
                    <Link  key={icon.id} to={icon.url}>
                      <span className=' text-[15px] font-semibold'>{icon.name}</span>
                    </Link>
                  ))
                }
                <img className='h-8 w-8 rounded-full' src={user.profileImg} alt={user.username} />
              </div>
            </div>
          </nav>
        </header>
      </header>
    </>
  );
};

export default Navbar;
