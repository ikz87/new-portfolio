import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { TopBar } from "./components/TopBar";
import { SideBar } from "./components/SideBar";

import { useState, useEffect } from "react";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const exitAnimDuration = 0.2;

  const handleNavigation = (path: string) => {
    setIsSidebarOpen(false);
    if (location.pathname === path){
      return;
    }
    setIsExiting(true);
    console.log("exiting");
    setTimeout(() => navigate(path), 1000 * exitAnimDuration);
  };

  useEffect(() => {
    setIsExiting(false);
  }, [location.pathname]);

  useEffect(() => {
    console.log(isSidebarOpen);
  }, [isSidebarOpen]);
  
  return (
    <>
      <div className="hidden-scrollbar overflow-x-hidden h-dvh w-dvw bg-cyan-100 md:pl-6 md:pt-6 md:pr-8 md:pb-8 pl-2 pt-2 pr-4 pb-4 space-y-4">
        <TopBar setIsSidebarOpen={setIsSidebarOpen} />
        <div className="sm:hidden block">
          <SideBar 
            isSidebarOpen={isSidebarOpen} 
            setIsSidebarOpen={setIsSidebarOpen}
            handleNavigation={handleNavigation}
          />
        </div>
        <Outlet context={{ isExiting, handleNavigation }} />
      </div>
    </>
  )
}

export default App
