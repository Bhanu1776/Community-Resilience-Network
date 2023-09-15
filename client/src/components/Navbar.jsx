import { AiFillHome, AiFillSafetyCertificate } from 'react-icons/ai'
import { FaLocationDot } from 'react-icons/fa6'
import { FaUserAlt } from 'react-icons/fa'
const icons = [
  {
    id: 1,
    icon: <AiFillHome />,
    name: "Home"
  },
  {
    id: 2,
    icon: <FaLocationDot />,
    name: "Location"
  },
  {
    id: 3,
    icon: <AiFillSafetyCertificate />,
    name: "Saftey Tips"
  },
  {
    id: 4,
    icon: <FaUserAlt />,
    name: "Profile"
  },
]

const Navbar = () => {
  return (
    <>
      <body
        className="
      fixed bottom-0 md:top-0 left-0 z-[100] w-full
    "
      >
        <header>
          <nav
            className="
          flex flex-wrap
          items-center
          justify-between
          w-full
          h-16
          py-4
          md:py-0
          px-4
          text-lg text-gray-700
          bg-white
        "
          >
            <div className='flex md:hidden items-center justify-between w-full'>
              {
                icons.map((icon) => <span key={icon.id}>{icon.icon}</span>)
              }
            </div>

            <div
              className="hidden w-full md:flex md:items-center justify-between "

            >
              <p>CommuniSafe</p>
              <div className='flex w-[60%] justify-end gap-4 items-center'>
                {
                  icons.map((icon) => <span key={icon.id}>{icon.name}</span>)
                }
                <button>Sign In</button>
              </div>
            </div>
          </nav>
        </header>
      </body>
    </>
  );
};

export default Navbar;
