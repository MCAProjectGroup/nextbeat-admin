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

import Users from './pages/DashBoard/Users/Users';
function App() {
  

  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        <Router>

          <Routes>

            <Route path="/admin/*" element={<DashBoard />} />
            <Route path="/*" element={<div style={{ width: "100%", height: "100%" }}>
              <Users />
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
