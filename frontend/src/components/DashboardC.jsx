import { Link } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import Calendar from "../components/calender";

const DashboardC = () => {
  const links = [
    { name: "Dashboard", path: "/" },
    { name: "Chart", path: "/chart" },
    { name: "Settings", path: "/settings" },
    { name: "Logout", path: "/logout" },
  ];

  return (
    <div className="flex h-screen bg-violet-400">
      {/* Sidebar */}
      <div className="w-64 bg-indigo-950 mt-32 ml-24 mb-24 text-slate-900">
        <div>
          <RxAvatar />
        </div>
        <ul className="text-white font-lato mt-48">
          {links?.map((link) => (
            <li className="hover:bg-violet-600 active:bg-violet-700 border-t border-b border-gray-500 p-4 w-full text-center p-4 cursor-pointer">
              <Link to={link.path} className="text-white">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Main content */}
      <div className="w-3/5 bg-blue-200 mt-32 mb-24">
        <div className="w-full h-20 bg-blue-100 flex grid grid-cols-2 pt-6 border-4 border-indigo-500/100">
          <div>
            <h1 className="w-1/2 ml-4 font-bold text-left text-2xl fonts-lato border-4 border-indigo-500/100">
              Welcome Back!
            </h1>
          </div>
          {/* search bar*/}
          <div className="w-64 h-10 bg-blue-50 ml-64 rounded-full border-4 border-indigo-500/100">
            <div className="ml-2 text-3xl cursor-pointer">
              <CiSearch />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6 w-5/6 ml-24 mt-8">
          {/* First Row */}
          <div className="h-68 border-4 border-indigo-500/100 flex items-center justify-center">
            <Calendar className="w-full h-full" />
          </div>

          <div className="grid grid-cols-subgrid gap-4">
            <div className="h-34 border-4 border-indigo-500/100">
              <h1 className="bg-yellow-500 text-left h-8 text-white p-1 rounded-sm">
                Total Sales
              </h1>
              <h1 className="bg-slate-50 font-lato font-semibold text-green-500 text-3xl text-center p-2 rounded-sm">
                $ 800.20
              </h1>
              <p className="text-sm  bg-slate-50 font-lato text-center text-gray-200 rounded-sm">
                Lorem ipsum dolor, sit amet consecte
              </p>
            </div>
            <div className="h-34 border-4 border-indigo-500/100">
              <h1 className="bg-yellow-500 text-left h-8 text-white p-1 rounded-sm">
                Total Sales
              </h1>
              <h1 className="bg-slate-50 font-lato font-semibold text-green-500 text-3xl text-center p-2 rounded-sm ">
                $ 800.20
              </h1>
              <p className="text-sm bg-slate-50 font-lato text-center text-gray-200 rounded-sm">
                Lorem ipsum dolor, sit amet consecte
              </p>
            </div>
          </div>

          <div className="h-68 border-4 border-indigo-500/100">hell3</div>
        </div>

        <div className="grid grid-cols-3 gap-6 w-5/6 ml-24 mt-8">
          {/* Second Row */}
          <div className="h-64 col-span-2 border-4 border-indigo-500/100">
            helleere
          </div>
          <div className="h-64 border-4 border-indigo-500/100">hell2</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardC;
