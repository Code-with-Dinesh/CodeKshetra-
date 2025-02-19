import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Navbar from './components/Navbar';
import Home from './components/Home';
import MainDashboard from './MainDashboard';
import Signup from './components/Signup';
import Login from './components/Login';
import RecuratorDashboard from './components/RecutorDashboard';
import UserDashboard from './components/UserDashboard';
import Footer from './components/Footer';
import { AnimatedTooltipPreview } from './components/AnimatedTooltipPreview';

const App = () => {
  const location = useLocation(); // Get current route path

  // Define paths where AnimatedTooltipPreview should NOT be shown
  const hideTooltipOnRoutes = ['/recurator-dashboard', '/user-dashboard','/login',"/signup"];
  const hideFooter = ['/login','/signup']
  return (
    <div className="min-h-screen flex flex-col">
      <Provider store={store}>
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<><Home /><MainDashboard /></>} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/recurator-dashboard" element={<RecuratorDashboard />} />
            <Route path="/user-dashboard" element={<UserDashboard />} />
          </Routes>
        </div>

        {!hideTooltipOnRoutes.includes(location.pathname) && <AnimatedTooltipPreview />}
        
        {!hideFooter.includes(location.pathname) && <Footer />}
      </Provider>
    </div>
  );
};

export default App;
