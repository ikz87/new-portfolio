import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { TopBar } from "./components/TopBar";
import { HardShadowRect } from "./components/ui/HardShadowRect";
import { SideBar } from "./components/SideBar";

import { useState, useEffect } from "react";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const exitAnimDuration = 0.2;

  const handleNavigation = (path: string) => {
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
      <div className="hidden-scrollbar overflow-x-hidden h-dvh w-dvw bg-cyan-100 flex items-center justify-center"> 
        <div className="">
          <HardShadowRect className="font-extrabold text-5xl border-10 bg-amber-50 w-full p-20 rounded-xl">
            ikz87's portfolio
          </HardShadowRect>
        </div>
      </div>
    </>
  )
}

export default App
