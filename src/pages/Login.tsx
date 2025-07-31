import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { loginInstance } from "@/config/axiosConfig";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const backendApiUrl = import.meta.env.VITE_BACKEND_API_URL;
  const navigate = useNavigate();
  
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
    }).then(res => {
      console.log("res login GMS token: ", res.data.data.access_token);
      
      localStorage.setItem('at', res.data.data.access_token);
      if(res.data.data.access_token) {
        console.log("user data: ", res.data.data);
        toast("Login success!")
        navigate('/')
      }
      // console.log("access token GMS: ", res.data.access_token)
    }).catch(e => {
      console.log("error login GMS: ", e.response);
    }).finally(() => {
      setLoading(false);
    })
  }

  useEffect(() => {
    console.log("backend api url: ", backendApiUrl);
  }, [])

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
    </div>
  )
}

export default Login;
