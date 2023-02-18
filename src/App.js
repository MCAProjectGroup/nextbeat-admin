import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import MainDash from './components/MainDash/MainDash';
import RightSide from './components/RightSide/RightSide';

import {
  Route,
  Routes,
  BrowserRouter as Router
} from 'react-router-dom'
import DashBoard from './pages/DashBoard/DashBoard';

import Users from './pages/Users/Users';
import Categories from './pages/Categories/Categories';
import Login from './pages/Login/Login';
function App() {
  
  const token = ""
  if(!token){
    return (
      <div className="App">
      {/* <div className="AppGlass"> */}
        <Login />
        {/* sadasdsa */}
      {/* </div> */}
      </div>
    )

  }

  return (
    <div className="App">
      <div className="AppGlass">
        <Router>
        <Sidebar />

          <Routes>

            <Route path="/admin" element={<DashBoard />} />
            <Route path="/admin/users" element={<div style={{ width: "100%", height: "100%" }}>
              <Users />
            </div>
            } />
            <Route path="/admin/categories" element={<div style={{ width: "100%", height: "100%" }}>
              <Categories />
            </div>
            } />
          </Routes>
        </Router>
      </div>
    </div>
  )
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        <MainDash />
        <RightSide />
      </div>
    </div>
  );
}

export default App;
