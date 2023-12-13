import React, { useEffect, useState } from "react";
import { CartContext } from "../../context/Context";
import { Outlet, useNavigate, Navigate } from "react-router-dom";
import Sidebar from "../../partials/Sidebar";
import Header from "../../partials/Header";
import WelcomeBanner from "../../partials/dashboard/WelcomeBanner";
import { CONSTANTS } from "../../utils/constant";
import { callAPIFetch } from "../../service/api";
import Swal from "sweetalert2";
function Layout({ roles }) {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [totalCart, setTotalCart] = useState(0);
  const username = localStorage.getItem("username");
  const role = localStorage.getItem("role");
  useEffect(() => {
    getTotalProduct();
  }, []);
  const getTotalProduct = () => {
    callAPIFetch(CONSTANTS.URL.CART, CONSTANTS.METHOD.GET, null)
      .then((response: { ok: any; status: any; json: () => any }) => {
        if (!response.ok || response.status == CONSTANTS.STATUS.NOT_FOUND) {
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

  if (!username?.length) {
    return <Navigate to="/movie-play" />;
  }

  return roles.includes(role) ? (
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
            <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-11xl mx-auto">
              {/* Welcome banner */}
              <WelcomeBanner />
              {/* Cards */}
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </CartContext.Provider>
  ) : (
    (Swal.fire({
      icon: "error",
      title: "Oops...",
      text: `You haven't permission ( Admin only)..`,
    }), //
    (<Navigate to="/movie-play" replace />))
  );
}

export default Layout;
