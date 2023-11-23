import React, { useEffect, useState } from "react";
import { CartContext, ProductContext } from "./../../data/Context";
// import ErrorBoundary from "react-error-boundary";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../../partials/Sidebar";
import Header from "../../partials/Header";
import WelcomeBanner from "../../partials/dashboard/WelcomeBanner";
import { CONSTANTS } from "../../utils/constant";
import callAPI from "../../service/api";
function Layout() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [totalCart, setTotalCart] = useState(0);
  useEffect(() => {
    getTotalProduct();
  }, []);
  const getTotalProduct = () => {
    callAPI(CONSTANTS.URL.CART, CONSTANTS.METHOD.GET, null)
      .then((response: { ok: any; status: any; json: () => any }) => {
        if (!response.ok || response.status == CONSTANTS.STATUS[404]) {
          navigate(CONSTANTS.PAGE[404]);
        }
        return response.json();
      })
      .then((data) => {
        setTotalCart(data.length);
      })
      .catch((err) => {
        alert("Error Json serve" + err);
      });
  };

  return (
    <CartContext.Provider
      value={{ totalCart: totalCart, setTotalCart: setTotalCart }}
    >
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* Content area */}
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          {/*  Site header */}
          {/* <ErrorBoundary fallback={<div>Something went wrong</div>}> */}
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          {/* </ErrorBoundary> */}
          <main>
            <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
              {/* Welcome banner */}
              <WelcomeBanner />
              {/* Cards */}
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </CartContext.Provider>
  );
}

export default Layout;
