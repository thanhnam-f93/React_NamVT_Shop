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
import CountryInfo from './components/country/CountryInfo';
import ListCountry from './components/country/ListCountry';
import TodoApp from './pages/todo/TodoApp';
import Profile from './pages/user/Profile'
function App() {
  const location = useLocation()
  const username = localStorage.getItem("username");
  const role = localStorage.getItem("role");
  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change
useEffect(() => {
  return () => {
    console.log("Cleanup");
    localStorage.clear();
  }
}, [])

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
              {/* Authentication Page  */}
          <Route path="country" element={<ListCountry />}/>
          <Route path="country/info" element={<CountryInfo />}/>
              {/* Payment and Sale Page  */}
          <Route path="sale" element={<Sale />}/>
          <Route path="payment" element={<Payment />}/>
              {/* Product Page  */}
          <Route path="product/list" element={<ProductList />}/>
          <Route path="product/new" element={<ProductNew />}/>
          <Route path="product/:id" element={<ProductDetail />}/>
              {/* Todo Page  */}
          <Route path="todo" element={<TodoApp />}/>
              {/* Statistic and Introduct Page  */}
          <Route path="dashboard/statistic" element={<Dashboard />}/>
      </Route>
              {/* Authentication Page  */}
        <Route exact path="/signin" element={<Signin />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/reset-password" element={<ResetPass />} />
                    {/* Setting Page */}
        <Route exact path="/profile" element={<Profile />} />
              {/* Error Page */}
        <Route exact path="/404" element={<Error_404 />} />
        <Route exact path="/500" element={<Error_500 />} />
      </Routes>
    </>
  );
}

export default App;
