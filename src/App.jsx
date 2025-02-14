import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { Routes  } from "react-router-dom"
import { Route } from "react-router-dom"
import MainDashboard from './MainDashboard'
import Signup from './components/Signup'
import Login from './components/Login'
import RecuratorDashboard from './components/RecutorDashboard'
import UserDashboard from './components/UserDashboard'
import {store} from './redux/store'
import { Provider } from 'react-redux'
const App = () => {
  return (
    <div>
      <Provider store={store}>
    <Navbar />
    <Routes>
    <Route path="/" element={<><Home /><MainDashboard /></>} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/recurator-dashboard" element={<RecuratorDashboard />} />
      <Route path="/user-dashboard" element={<UserDashboard />} />
    </Routes>
    </Provider>
  </div>
  )
}

export default App