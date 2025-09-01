import { getUnverifiedUsersInstance, verifyUserInstance } from "@/config/axiosConfig";
import type { UnverifiedUsersProps } from "@/config/interfaces";
import { AuthContext } from "@/context/AuthContext";
import { useContext, useEffect, useState } from "react";

export default function Users() {

  const [unverifiedUsers, setUnverifiedUsers] = useState<UnverifiedUsersProps[]>([]);
  const auth = useContext(AuthContext);

  async function getUnverifiedUsers() {
    const at = localStorage.getItem("at");
    if (at) {
      try {
        const unvUsers = await getUnverifiedUsersInstance(at).get('');
        if (unvUsers) {
          setUnverifiedUsers(unvUsers.data.data);
        }
      } catch (e) {
        console.log("Error getting unverified users: ", e);
      }
    }
  }

  async function verifyUser(username: string) {
    const at = localStorage.getItem("at");
    if (at) {
      try {
        const resVerif = await verifyUserInstance(at, username).post("");
        if (resVerif) {
          console.log("success verif user: ", resVerif.data.data);
          getUnverifiedUsers();
        }
      } catch (e) {
        console.log("error verify user: ", e);
      }
    }
  }

  useEffect(() => {
    getUnverifiedUsers();
  }, []);

  if (!auth) return <div>Loading...</div>;

  return (
    <div className="w-full p-4 flex flex-col gap-4 overflow-auto">
      <div className="text-2xl font-bold text-blue-900">Users Registration</div>

      {
        auth.user && auth.user.username === "Admin.GMS@gms.church" ?
          <div className="flex flex-col gap-4 mt-6">
            {
              unverifiedUsers.map((u) => (
                <div className="w-full bg-[#fff] h-fit p-4 rounded-xl text-md">
                  <div className="flex items-center justify-between">
                    <div className="font-semibold text-blue-900">{u.fullname}</div>
                    <div className="flex gap-3 items-center cursor-pointer">
                      <div className="text-md text-blue-900 opacity-80 hover:underline transition">Ignore</div>
                      <div onClick={() => verifyUser(u.username)} className="font-bold text-md text-slate-100 p-2 bg-blue-900 rounded-xl hover:bg-slate-100 hover:text-blue-900 transition">Verify</div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        :
          <div className="text-sm font-medium text-blue-900">Sorry, you are not authorized to view this page.</div>
      }
    </div>
  )
}