import { Link } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import Calendar from "./calender.jsx";
import SpiderChart from "./SpiderChart.jsx";
import Linechart from "./LineChart.jsx";
import Piechart from "./PieChart.jsx";
import { FaRegUser } from "react-icons/fa";

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
        <div className="pt-12 pl-16 pb-12 text-white ">
          <FaRegUser size={80} />
          <p className="text-white pt-2 text-lato">@username</p>
        </div>

        <div>
          <ul className="text-white font-lato">
            {links?.map((link) => (
              <li className="hover:bg-violet-600 active:bg-violet-700 border-t  p-4 w-full text-center p-4 cursor-pointer">
                <Link to={link.path} className="text-white">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Main content */}
      <div className="w-3/5 bg-blue-200 mt-32 mb-24">
        <div className="w-full h-20 bg-blue-100 flex grid grid-cols-2 pt-6 ">
          <div>
            <h1 className="w-1/2 ml-4 font-bold text-left text-2xl fonts-lato ">
              Welcome Back!
            </h1>
          </div>
          {/* search bar*/}
          <div className="w-64 h-10 bg-blue-50 ml-64 rounded-full  ">
            <div className="ml-2 mt-2 mb-2 text-3xl cursor-pointer">
              <CiSearch />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6 w-5/6 ml-24 mt-8">
          {/* First Row */}
          <div className="h-68 flex items-center justify-center">
            <Calendar className="w-full h-full" />
          </div>

          <div className="grid grid-cols-subgrid gap-4">
            <div className="h-34 ">
              <h1 className="bg-yellow-500 text-left h-8 text-white pl-4 pt-1 rounded-sm">
                Total Sales
              </h1>
              <h1 className="bg-slate-50 font-lato font-semibold text-green-500 text-3xl text-center p-2 rounded-sm">
                $ 800.20
              </h1>
              <p className="text-sm  bg-slate-50 font-lato text-center text-slate-500 rounded-sm">
                Lorem ipsum dolor, sit amet consecte
              </p>
            </div>
            <div className="h-34 ">
              <h1 className="bg-yellow-500 text-left h-8 text-white pl-4 pt-1 rounded-sm">
                Total Sales
              </h1>
              <h1 className="bg-slate-50 font-lato font-semibold text-green-500 text-3xl text-center p-2 rounded-sm ">
                $ 800.20
              </h1>
              <p className="text-sm bg-slate-50 font-lato text-center text-slate-500 rounded-sm">
                Lorem ipsum dolor, sit amet consecte
              </p>
            </div>
          </div>

          <div className="h-68  bg-white ">
            <h1 className="text-white pl-4 pt-1 bg-yellow-500 text-left font-lato rounded-sm">
              Categories
            </h1>
            <div className="grid grid-cols-2">
              <h2 className="text-black mt-16 ml-4 font-lato font-bold text-4xl text-left">
                22.4
              </h2>
              <div className="flex justify-end">
                <SpiderChart />
              </div>
            </div>
            <p className="pd-8 p-2 text-left font-lato text-slate-500">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 w-5/6 ml-24 mt-8">
          {/* Second Row */}
          <div className="h-64 col-span-2 bg-white ">
            <div>
              {" "}
              <Linechart />
            </div>
          </div>

          <div className="h-64  bg-gray-100 rounded-md">
            <Piechart />
            <div className=" grid grid-cols-2 gap-6 ">
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-2 ml-10 rounded-md mr-2">
                More
              </button>
              <button className="bg-red-500 hover:bg-red-700 px-2 py-1 text-white mr-10 rounded-md">
                Export
              </button>
            </div>
            <p className="text-sm ml-2 text-slate-500 text-center mt-1 mb-2">
              Lorem ipsum dolor sit amet masta
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardC;