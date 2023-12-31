import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Login from './pages/Login';
import Translation from './pages/Translation';
import Profile from './pages/Profile';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AppContext from './context/AppContext';
import Navbar from './components/Common/Navbar';

  export default function App() {
    return (
      <AppContext>
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Routes>
            <Route path = "/" element={ <Login/>  } />
            <Route path = "/translation" element={ <Translation/>  } />
            <Route path = "/profile" element={ <Profile/>  } />
            <Route path = "*" element={ <Login/>  } />
          </Routes>
        </div>
      </BrowserRouter>
      </AppContext>
    )
  } 
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

