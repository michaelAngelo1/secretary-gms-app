import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { RegisterProps } from "@/config/interfaces";
import { useState } from "react";
import { Link } from "react-router"; // Assuming you're using react-router-dom for Link

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
    // Check if essential fields are filled
    if (
      registerData.username === "" ||
      registerData.email === "" ||
      registerData.password === ""
    ) {
      alert("Please fill in all fields");
      return;
    }
    console.log("Registering user", registerData);
    // Here you would typically send registerData to your API
  }


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="w-full lg:w-1/4 flex flex-col items-center gap-3 bg-white p-8 rounded-lg shadow-lg">
      <div className="text-2xl text-blue-900 font-medium w-full">
        Secretary App
      </div>
      <div className="w-full">
        <div className="text-sm mb-2">Username</div>
        <Input
          className="bg-slate-100 border-none"
          type="text"
          placeholder="Username"
          name="username" // Add name prop
          value={registerData.username} // Control the input value
          onChange={handleChange}
        ></Input>
      </div>
      <div className="w-full">
        <div className="text-sm mb-2">Email</div>
        <Input
          className="bg-slate-100 border-none"
          type="email"
          placeholder="Email"
          name="email" // Add name prop
          value={registerData.email} // Control the input value
          onChange={handleChange}
        ></Input>
      </div>
      <div className="w-full">
        <div className="text-sm mb-2">Password</div>
        <Input
          className="bg-slate-100 border-none"
          type="password"
          placeholder="Password"
          name="password" // Add name prop
          value={registerData.password} // Control the input value
          onChange={handleChange}
        ></Input>
      </div>

      {/* You can add more fields based on your RegisterProps */}
      {/*
      <div className="w-full">
        <div className="text-sm mb-2">Full Name</div>
        <Input
          className="bg-slate-100 border-none"
          type="text"
          placeholder="Full Name"
          name="fullname"
          value={registerData.fullname}
          onChange={handleChange}
        ></Input>
      </div>
      */}

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