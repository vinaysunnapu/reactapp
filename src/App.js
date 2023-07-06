import {Route, Routes,Navigate} from 'react-router-dom'

import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import Todo from './components/Todoapp'
import Register from './components/register/index.js'
import Login from './components/login'
import Profile from './components/profile'
import ProtectedRoute from './components/protectedRoute/index'

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Register />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/todo" element={<ProtectedRoute><Todo /></ProtectedRoute>} />
      <Route exact path="/profile" element={<ProtectedRoute><Profile/></ProtectedRoute>} />
    </Routes>
  )
}

export default App
