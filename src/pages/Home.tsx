import { logoutInstance } from "@/config/axiosConfig";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function Home() {

  let church = ["GMS Central Park", "GMS Karawaci", "GMS Gandaria City", "GMS Tangerang", "GMS Kelapa Gading"];
  let speakers = ["Ps. Fuji Harsono", "Ps. Jemmy Liman", "Ps. Benny Wijaya", "Pdm. Frendy Juwono", "Pdp. Nikodemus"];

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  async function handleLogout() {
    setLoading(true);
    const at = localStorage.getItem('at');
    if(at) {
      await logoutInstance(at).post('')
        .then(res => console.log("user logged out!", res.data.data))
        .catch(e => console.log("error logging out", e))
        .finally(() => {
          setLoading(false);
          localStorage.removeItem('at');
          navigate('/login')
        })
    }
  }

  useEffect(() => {
    const at = localStorage.getItem('at');
    if(!at) {
      navigate('/login')
    }  
  }, [])

  return (
    <div className="w-full p-4 flex flex-col gap-4">
      <div className="bg-white rounded-lg shadow-lg p-4">
        <div className="text-xl font-bold">Churches</div>
        {
          church.map(c => (
            <div>{c}</div>
          ))
        }
      </div>
      <div className="bg-white rounded-lg shadow-lg p-4">
        <div className="text-xl font-bold">Speakers</div>
        {
          speakers.map(s => (
            <div>{s}</div>
          ))
        }
      </div>
      <div onClick={() => handleLogout()} className="btn btn-primary">{loading ? "Loading..." : "Log out"}</div>
    </div>
  )
}

export default Home;