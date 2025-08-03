import { logoutInstance } from "@/config/axiosConfig";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { jwtDecode } from "jwt-decode";
import Sidebar from "@/organisms/Sidebar";
import { useSidebar } from "@/hooks/useSidebar";
import Requests from "./Requests";
import Speakers from "./Speakers";
import Church from "./Church";
import Users from "./Users";
import CreateEvent from "./CreateEvent";
import EventInfo from "./EventInfo";

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

  const { sidebarItemSelected } = useSidebar()
  const [masterView, setMasterView] = useState('dashboard');

  useEffect(() => {
    const at = localStorage.getItem('at');
    if(!at) {
      navigate('/login')
    } else {
      try {
        const decoded = jwtDecode(at);
        if(decoded) console.log("decoded: ", decoded);
      } catch (e) {
        console.log("error decode token: ", e);

        // uncomment where already implemented
        // localStorage.removeItem('at');

        // Change to /login if decode token is already correct
        navigate('/');
      }
      
    }  
  }, [])

  return (
    <div className="w-full flex gap-3">
      <Sidebar />

      {
        sidebarItemSelected == "Master" ?

          masterView == "create-new-event" ?
            <CreateEvent setMasterView={setMasterView}/>
          : masterView == "add-event-info" ?
            <EventInfo setMasterView={setMasterView}/>
          : (
            <div className="w-full p-4 flex flex-col gap-4 overflow-auto">
              <div className="text-2xl font-bold text-blue-900">Dashboard</div>
              <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                  <div className="w-1/3 h-[30vh] flex flex-col gap-4">
                    <div className="w-full h-1/3 flex gap-4">
                      <div onClick={() => setMasterView('create-new-event')} className="cursor-pointer hover:bg-blue-900 hover:text-slate-100 transition-all duration-300 ease-in-out w-full h-full bg-blue-100 rounded-xl flex justify-center items-center">
                        <div className="font-semibold">Create new event</div>
                      </div>
                      <div onClick={() => setMasterView('add-event-info')} className="cursor-pointer hover:bg-blue-900 hover:text-slate-100 transition-all duration-300 ease-in-out w-full h-full bg-blue-100 rounded-xl flex justify-center items-center">
                        <div className="font-semibold">Add event info</div>
                      </div>
                    </div>
                    <div className="w-full h-2/3 bg-white rounded-xl p-4">
                      <div className="flex flex-col gap-4">
                        <div className="text-lg">Awaiting approval</div>
                        <div className="text-3xl font-bold text-blue-900">39 Requests</div>
                        <div className="text-sm underline">View all</div>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/3 h-[30vh] bg-white rounded-xl">

                  </div>
                  <div className="w-1/4 h-[30vh] bg-white rounded-xl p-4">
                    <div className="flex justify-between mb-4">
                      <div className="text-xl font-bold text-blue-900">Church</div>
                      <div className="text-sm font-regular underline">Add new</div>
                    </div>
                    {
                      church.map(c => (
                        <div className="text-lg mb-1">{c}</div>
                      ))
                    }
                  </div>
                  <div className="w-1/4 h-[30vh] bg-white rounded-xl p-4">
                    <div className="flex justify-between mb-4">
                      <div className="text-xl font-bold text-blue-900">Speakers</div>
                      <div className="text-sm font-regular underline">Add new</div>
                    </div>
                    {
                      speakers.map(c => (
                        <div className="text-lg mb-1">{c}</div>
                      ))
                    }
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-3/4 h-[70vh] bg-white rounded-xl">

                  </div>
                  <div className="w-1/4 h-[70vh] bg-white rounded-xl">

                  </div>
                </div>
              </div>
              <div onClick={() => handleLogout()} className="btn btn-primary">{loading ? "Loading..." : "Log out"}</div>
            </div>
          )

        : sidebarItemSelected == "Requests" ?
          <Requests/>
        : sidebarItemSelected == "Speakers" ?
          <Speakers/>
        : sidebarItemSelected == "Church" ? 
          <Church/>
        : <Users/>
      }
    </div>
  )
}

export default Home;