import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate  } from 'react-router-dom';
import Home from './Pages/Home';
import Register from './Pages/Register';
import Login from './Pages/Login';
import { AuthContext } from './Context/AuthContext';

const App = () => {
  const {currentUser} = useContext(AuthContext)
  const ProtectedRoute = ({children}) =>{
    if(!currentUser){
      return <Navigate to ="/login"/>
    }
    return children
  }
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <ProtectedRoute>
            <Home />
            </ProtectedRoute>} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
