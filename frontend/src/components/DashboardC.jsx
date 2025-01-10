
const DashboardC = () => {
  return <div className=" flex h-screen bg-violet-400">
    {/* sidebar */}
    <div className="w-64 bg-indigo-950 mt-32 ml-24 mb-24  text-slate-900 p-5">
      <ul  className="text-white font-lato mt-48 grid gap-y-4 p-4">
        <li className="hover:bg-white active:bg-violet-700 cursor-pointer">Dashboard</li>
        <li>Chart</li>
        <li>Stastics</li>
        <li>Logout</li>
      </ul>
    </div>
    <div className="w-3/5 bg-blue-200 mt-32 mb-24">
      <div className="w-full h-20 m-0 p-0 bg-blue-100"></div>
  </div>
    
  </div>
};

export default DashboardC;
