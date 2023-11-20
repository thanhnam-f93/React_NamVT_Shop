import React, { useEffect, useState } from "react";
import { CartContext, ProductContext } from "./../../data/Context";
import { Outlet } from "react-router-dom";
import Sidebar from "../../partials/Sidebar";
import Header from "../../partials/Header";
import WelcomeBanner from "../../partials/dashboard/WelcomeBanner";
function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [data, setData] = useState([]);

  return (
    <CartContext.Provider value={{ cart: data, setCart: setData }}>
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* Content area */}
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          {/*  Site header */}
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

          <main>
            <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
              {/* Welcome banner */}
              <WelcomeBanner />
              {/* Cards */}
              <div>
                <Outlet />
              </div>
            </div>
          </main>
        </div>
      </div>
    </CartContext.Provider>
  );
}

export default Layout;
