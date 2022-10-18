import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import{UserProvider} from "./contexts/contextProvider";
import{ProductsProvider} from "./contexts/shopContext";
import { CartProvider } from './contexts/cartContext';

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
  <UserProvider>
  <ProductsProvider>
  <CartProvider>
  <App />
  </CartProvider>
  </ProductsProvider>
  </UserProvider>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
