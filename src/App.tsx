import { Route, Routes } from "react-router"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"
import { ToastContainer } from "react-toastify"
import Requests from "./pages/Requests"
import { SidebarProvider } from "./context/SidebarContext"
import Church from "./pages/Church"
import Speakers from "./pages/Speakers"
import Users from "./pages/Users"
import 'react-toastify/dist/ReactToastify.css';
import './custom-toast.css';
import { AuthProvider } from "./context/AuthContext"

function App() {

  return (
    <AuthProvider>
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
          <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </div>
      </SidebarProvider>
    </AuthProvider>
  )
}

export default App
