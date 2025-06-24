import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { RegisterProps } from "@/config/interfaces";
import { useState } from "react";
import { Link } from "react-router"; 

function Register() {
  const [registerData, setRegisterData] = useState<RegisterProps>({
    fullname: "",
    email: "",
    firstname: "",
    lastname: "",
    password: "",
    username: "",
    title: "",
    company: "",
    division: "",
    department: "",
  });

  function handleRegister() {
    console.log("handle register");
    if (
      registerData.username === "" ||
      registerData.email === "" ||
      registerData.password === ""
    ) {
      alert("Please fill in all fields");
      return;
    }
    console.log("Registering user", registerData);
  }


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="w-full lg:w-1/3 md:w-2/3 flex flex-col items-center gap-3 bg-white p-8 rounded-lg shadow-lg">
      <div className="text-2xl text-blue-900 font-medium w-full">
        Secretary App
      </div>

      <div className="w-full">
        <div className="text-sm mb-2">Full name</div>
        <Input
          className="bg-slate-100 border-none"
          type="text"
          placeholder="Enter fullname"
          name="fullname" // Add name prop
          value={registerData.fullname} // Control the input value
          onChange={handleChange}
        ></Input>
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
        <div className="text-sm mb-2">Title</div>
        <Input
          className="bg-slate-100 border-none"
          type="text"
          placeholder="Enter title"
          name="title" 
          value={registerData.title} 
          onChange={handleChange}
        ></Input>
      </div>

      <div className="w-full">
        <div className="text-sm mb-2">Company</div>
        <Input
          className="bg-slate-100 border-none"
          type="text"
          placeholder="Enter company"
          name="company" 
          value={registerData.company} 
          onChange={handleChange}
        ></Input>
      </div>

      <div className="w-full">
        <div className="text-sm mb-2">Division</div>
        <Input
          className="bg-slate-100 border-none"
          type="text"
          placeholder="Enter division"
          name="division" 
          value={registerData.division} 
          onChange={handleChange}
        ></Input>
      </div>

      <div className="w-full">
        <div className="text-sm mb-2">Department</div>
        <Input
          className="bg-slate-100 border-none"
          type="text"
          placeholder="Enter department"
          name="department" 
          value={registerData.department} 
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

      <Button className="w-[30%] bg-blue-900" onClick={handleRegister}>
        Register
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