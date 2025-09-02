import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { loginInstance } from "@/config/axiosConfig";
import { AuthContext } from "@/context/AuthContext";
import GeneralModal from "@/organisms/GeneralModal";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [modalOpen, setModalOpen] = useState(false);
  // const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  
  const auth = useContext(AuthContext);

  async function handleLogin() {
    if(email === "" || password === "") {
      alert("Please fill in all fields");
      return;   
    }
    console.log("handle login");

    setLoading(true);
    await loginInstance.post('', {
      username: email,
      password: password
    }).then(async res => {
      console.log("res login GMS token: ", res.data.data.access_token);
      
      localStorage.setItem('at', res.data.data.access_token);

      if(auth) {
        await auth.refreshUser();
      }
      toast("Welcome to GMS Secretary App!")
      navigate('/')
      
    }).catch(e => {
      console.log("error login GMS: ", e.response.data.message);
      if(e.response.data.message.includes("User still needs to be approved")) {
        setModalOpen(true);
      } else {
        alert("Something went wrong. Please check your username or password.")
      }
    }).finally(() => {
      setLoading(false);
    })
  }

  return (
    <div className="w-full lg:w-1/3 md:w-2/3 flex flex-col items-center gap-3 bg-white p-8 rounded-lg shadow-lg m-auto">
      <div className="text-2xl font-medium w-full text-blue-900">Secretary App</div>
      <div className="w-full">
        <div className="text-sm mb-2">Username</div>
        <Input className="bg-slate-100 border-none" type="username" placeholder="Username" onChange={(e) => setEmail(e.target.value)}></Input>
      </div>

      <div className="w-full">
        <div className="text-sm mb-2">Password</div>
        <Input className="bg-slate-100 border-none" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}></Input>
      </div>

      <div className="w-full flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <input type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
          <div className="text-xs">Keep me signed in</div>
        </div>
        <div className="text-xs underline text-gray-500"><Link to="/forgot-password" className="hover:underline">Forgot password</Link></div>
      </div>
      <Button className="w-[30%] bg-blue-900" onClick={() => handleLogin()}>{loading ? "Loading..." : "Sign in"}</Button>
      <div className="text-sm text-gray-500">Don't have an account? <Link to="/register" className="text-blue-500 hover:underline">Register</Link></div>

      <GeneralModal
        isOpen={modalOpen}
        onClose={closeModal}
        title="Please wait for admin approval of your registration."
        buttonLabel="Okay"
      >
        <p className="text-sm text-slate-800">The approval time is 1x24 hours, please check again later. Thank you for waiting!</p>
      </GeneralModal>
    </div>
  )
}

export default Login;