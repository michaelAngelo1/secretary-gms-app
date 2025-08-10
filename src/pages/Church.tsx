import { getLocalChurchesInstance } from "@/config/axiosConfig";
import type { ChurchProps } from "@/config/interfaces";
import { useEffect, useState } from "react";

export default function Church() {

  const [localChurches, setLocalChurches] = useState<ChurchProps[]>([]);
    
  async function fetchLocalChurches() {
    const at = localStorage.getItem("at");
    if(at) {
      try { 
        const localChurches = await getLocalChurchesInstance(at).get('');
        if(localChurches) {
          console.log("local churches: ", localChurches);
          setLocalChurches(localChurches.data.data);
        }
      } catch (e) {
        console.log("error fetch local churches: ", e);
      }
    }
  }

  useEffect(() => {
    fetchLocalChurches();
  }, [])

  return (
    <div className="w-full p-4 flex flex-col gap-4 overflow-auto">
      <div className="text-2xl font-bold text-blue-900">Churches</div>
      <div className="flex flex-col gap-4">
        {
          localChurches &&
          localChurches.map((c) => (
            <div>{c.name}</div>
          ))
        }
      </div>
    </div>
  )
}