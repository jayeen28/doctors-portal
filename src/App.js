import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import Appointment from './Pages/Appointment/Appointment';
import AddDoctor from './Pages/Dashboard/AddDoctor/AddDoctor';
import AdminRoute from './Pages/Dashboard/AdminRoute/AdminRoute';
import Dashboard from './Pages/Dashboard/Dashboard';
import DashboardHome from './Pages/Dashboard/DashboardHome/DashboardHome';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import Payment from './Pages/Dashboard/Payment/Payment';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/appointment' element={<PrivateRoute><Appointment /></PrivateRoute>} />
            <Route path='/dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>}>
              <Route path="/dashboard" element={<DashboardHome />} />
              <Route path={`/dashboard/payment/:id`} element={<Payment />} />
              <Route path={`/dashboard/makeadmin`} element={<AdminRoute><MakeAdmin /></AdminRoute>} />
              <Route path={`/dashboard/adddoctor`} element={<AdminRoute><AddDoctor /></AdminRoute>} />
            </Route>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
