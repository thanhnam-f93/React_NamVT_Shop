import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.css';
import Layout from './pages/layout/Layout'
import './charts/ChartjsConfig';
import Signin from './pages/signin/page';
import ResetPass from './pages/reset-password/page';
import SignUp from "./pages/signup/page";
import ProductList from './components/product/ProductList';
import ProductNew from './components/product/ProductNew';
import ProductDetail from './components/product/ProductDetail';
import Error_404 from './pages/erorr-page/Error_404'
import Error_500 from './pages/erorr-page/Error_500'
import Dashboard from './pages/dashboard/dashboard';
import Payment from './components/payment/payment';
import Sale from './components/sale/Sale';
import data from "./../db.json";
import Home from './pages/home/Home';
function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
      <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />}/>
        <Route path="payment" element={<Payment />}/>
        <Route path="product/list" element={<ProductList />}/>
        <Route path="product/new" element={<ProductNew />}/>
        <Route path="product/:id" element={<ProductDetail />}/>
        <Route path="dashboard/statistic" element={<Dashboard />}/>
        <Route path="sale" element={<Sale />}/>
      </Route>
      {/* Authentication Page  */}
        <Route exact path="/signin" element={<Signin />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/reset-password" element={<ResetPass />} />
        {/* Error Page */}
        <Route exact path="/404" element={<Error_404 />} />
        <Route exact path="/500" element={<Error_500 />} />
      </Routes>
    </>
  );
}

export default App;
