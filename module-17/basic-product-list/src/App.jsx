


import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import CartListPage from './pages/CartListPage';
import LoginPage from './pages/LoginPage';
import ProductListPage from './pages/ProductListPage';
import VerifyPage from './pages/VerifyPage';
import ValidationHelper from './utility/ValidationHelper';
import PageNotFound from './pages/PageNotFound';

const App = () => {

  if(ValidationHelper.isLogin()){
    return (
      
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ProductListPage />} />
            <Route path="/cart-list" element={<CartListPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
    
    );
  }
  else{

    return (
      
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ProductListPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/verify" element={<VerifyPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>

    );
  }




};

export default App;