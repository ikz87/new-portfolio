import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { TopBar } from "./components/TopBar";
import { MobileTopBar } from "./components/MobileTopBar";

import { useState, useEffect } from "react";

function App() {
  const [isExiting, setIsExiting] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const exitAnimDuration = 0.2;

  const handleNavigation = (path: string) => {
    if (location.pathname === path) {
      return;
    }
    setIsExiting(true);
    console.log("exiting");
    setTimeout(() => navigate(path), 1000 * exitAnimDuration);
  };

  useEffect(() => {
    setIsExiting(false);
  }, [location.pathname]);

  return (
    <>
      <div className="hidden-scrollbar overflow-x-hidden h-dvh w-dvw bg-cyan-100 md:pl-6 md:pt-6 md:pr-8 md:pb-8 pl-2 pt-2 pr-4 pb-4 space-y-4">
        <div className="sm:block hidden">
          <TopBar/>
        </div>
        <div className="sm:hidden block">
          <MobileTopBar/>
        </div>
        <Outlet context={{ isExiting, handleNavigation }} />
      </div>
    </>
  );
}

export default App;
