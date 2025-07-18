import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { registerInstance } from "@/config/axiosConfig";
import type { RegisterProps } from "@/config/interfaces";
import { useState } from "react";
import { Link, useNavigate } from "react-router"; 
import { toast } from "react-toastify";

function Register() {

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [registerData, setRegisterData] = useState<RegisterProps>({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
    username: "",
  });

  async function handleRegister() {
    setLoading(true);
    console.log("handle register");
    if (
      registerData.username === "" ||
      registerData.email === "" ||
      registerData.password === ""
    ) {
      alert("Please fill in all fields");
      return;
    } else if(registerData.password !== registerData.confirmPassword) {
      alert("Confirm Password must be the same with Password. Please refill.");
    }
    console.log("Registering user", registerData);

    await registerInstance.post('', {
      email: registerData.email,
      firstname: registerData.firstname,
      lastname: registerData.lastname,
      password: registerData.password,
      confirmPassword: registerData.confirmPassword,
      username: registerData.username,
    }).then(res => {
      console.log("res success register: ", res.data.data.response);
      navigate('/login')
      toast("Register success. Please login now.")
      setLoading(false)
    }).catch(e => {
      console.log("error register: ", e.response);
      alert("Something went wrong.")
    })
  }


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="w-full lg:w-1/3 md:w-2/3 flex flex-col items-center gap-3 bg-white p-8 rounded-lg shadow-lg m-auto">
      <div className="text-2xl text-blue-900 font-medium w-full">
        Secretary App
      </div>

      <div className="w-full flex gap-2">
        <div className="w-full">
          <div className="text-sm mb-2">First name</div>
          <Input
            className="bg-slate-100 border-none"
            type="text"
            placeholder="Enter first name"
            name="firstname" // Add name prop
            value={registerData.firstname} // Control the input value
            onChange={handleChange}
          ></Input>
        </div>

        <div className="w-full">
          <div className="text-sm mb-2">Last name</div>
          <Input
            className="bg-slate-100 border-none"
            type="text"
            placeholder="Enter last name"
            name="lastname" // Add name prop
            value={registerData.lastname} // Control the input value
            onChange={handleChange}
          ></Input>
        </div>
      </div>
      
      <div className="w-full">
        <div className="text-sm mb-2">Username</div>
        <Input
          className="bg-slate-100 border-none"
          type="text"
          placeholder="Enter username"
          name="username" 
          value={registerData.username} 
          onChange={handleChange}
        ></Input>
      </div>

      <div className="w-full">
        <div className="text-sm mb-2">Email</div>
        <Input
          className="bg-slate-100 border-none"
          type="email"
          placeholder="Enter email"
          name="email" 
          value={registerData.email} 
          onChange={handleChange}
        ></Input>
      </div>

      <div className="w-full">
        <div className="text-sm mb-2">Password</div>
        <Input
          className="bg-slate-100 border-none"
          type="password"
          placeholder="Enter password"
          name="password" 
          value={registerData.password} 
          onChange={handleChange}
        ></Input>
      </div>

      <div className="w-full">
        <div className="text-sm mb-2">Confirm Password</div>
        <Input
          className="bg-slate-100 border-none"
          type="password"
          placeholder="Confirm password"
          name="confirmPassword" 
          value={registerData.confirmPassword} 
          onChange={handleChange}
        ></Input>
      </div>

      <Button className="w-[30%] bg-blue-900" onClick={handleRegister}>
        {loading ? "Loading..." : "Register"}
      </Button>
      <div className="text-sm text-gray-500">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-500 hover:underline">
          Log in
        </Link>
      </div>
    </div>
  );
}

export default Register;