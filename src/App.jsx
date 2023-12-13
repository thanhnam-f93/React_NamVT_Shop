import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import './css/style.css';
import Layout from './pages/layout/Layout'
import Signin from './pages/signin/page';
import ResetPass from './pages/reset-password/page';
import SignUp from "./pages/signup/page";
import ProductList from './components/product/ProductList';
import ProductNew from './components/product/ProductNew';
import ProductDetail from './components/product/ProductDetail';
import Error_404 from './pages/erorr-page/Error_404'
import Error_500 from './pages/erorr-page/Error_500'
import Dashboard from './pages/dashboard/dashboard';
import Payment from './components/product/sale/Payment';
import Sale from './components/product/sale/Sale';
import CountryInfo from './components/country/CountryInfo';
import ListCountry from './components/country/ListCountry';
import TodoApp from './pages/todo/TodoApp';
import Profile from './pages/user/Profile'
import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './components/movie/Home'; 
import NewMovie from './components/movie/admin/NewMovie';
import MovieManagement from './components/movie/admin/MovieManagement';
import Movie from './components/movie/Movie';
import Silde from './components/movie/slide/Silde';
import DetailMovie from './components/movie/DetailMovie';
import Start from './components/quiz/Start'
import PayMoneyForm from './components/movie/payment/PayMoneyForm';
import EmailSender from './pages/user/EmailSender';
function App() {
  const location = useLocation();
  const role = localStorage.getItem("role");
  const userName = localStorage.getItem("username");
// triggered on route change
  useEffect(() => {
    document.getElementById("top")?.scrollIntoView()
  }, [location.pathname]); 
  // Clear data while crash App
useEffect(() => {
  document.getElementById("top")?.scrollIntoView()
  return () => {
    localStorage.clear();
  }
}, [])

  return (
    < Provider store={store}>

      <Routes>
        {/* <Route path="/" element={(role && userName) ? <Layout roles={["admin"]} />: (<Navigate to="/movie-play" />)}> */}
        <Route path="/" element={<Layout roles={["admin"]} />}>
                  {/* Movie Page  */}
          <Route path="movie" element={<MovieManagement />}/>
          <Route path="movie/new" element={<NewMovie />}/>
          <Route path="movie/:id" element={<Movie />}/>
              {/* Country Page  */}
          <Route path="country" element={<ListCountry />}/>
          <Route path="country/info" element={<CountryInfo />}/>
              {/* Payment and Sale Page  */}
          <Route path="sale" element={<Sale />}/>
          <Route path="payment" element={<Payment />}/>
              {/* Product Page  */}
          <Route path="product" element={<ProductList />}/>
          <Route path="product/new" element={<ProductNew />}/>
          <Route path="product/:id" element={<ProductDetail />}/>
              {/* Todo Page  */}
          <Route path="todo" element={<TodoApp />}/>
   
              {/* Statistic and Introduct Page  */}
          <Route path="dashboard/statistic" element={<Dashboard />}/>
      </Route>
      <Route path="movie-play" element={<Home />}>
          <Route path="" element={<Silde />}/>
          <Route path="detail" element={<DetailMovie />}/>
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
       
        {/* Quiz */}
        <Route exact path="/quiz" element={<Start  />} />
        <Route exact path="/pay" element={<PayMoneyForm  />} />
        <Route exact path="/sendMail" element={<EmailSender  />} />
      </Routes>
    </Provider>
  );
}

export default App;
