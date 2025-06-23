import { Route, Routes, useNavigate } from "react-router"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"
import { useEffect } from "react"

function App() {

  const navigate = useNavigate()

  useEffect(() => {
    const at = localStorage.getItem("at");
    if(at) {
      navigate('/');
    } 
  }, [])

  return (
    <div className="bg-slate-100 h-screen flex items-center justify-center p-4">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  )
}

export default App
