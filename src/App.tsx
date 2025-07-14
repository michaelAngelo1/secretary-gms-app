import { Route, Routes, useNavigate } from "react-router"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"
import { useEffect } from "react"
import { ToastContainer } from "react-toastify"
import Requests from "./pages/Requests"
import { SidebarProvider } from "./context/SidebarContext"
import Church from "./pages/Church"
import Speakers from "./pages/Speakers"
import Users from "./pages/Users"

function App() {

  const navigate = useNavigate()

  useEffect(() => {
    const at = localStorage.getItem("at");
    if(at) {
      navigate('/');
    } 
  }, [])

  return (
    <SidebarProvider>
      <div className="bg-slate-100 h-screen flex p-4">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/requests" element={<Requests />} />
          <Route path="/church" element={<Church />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/users" element={<Users />} />
        </Routes>
        <ToastContainer />
      </div>
    </SidebarProvider>
  )
}

export default App
