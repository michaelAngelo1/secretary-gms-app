import { useChurch } from "@/hooks/useChurch";
import { useEffect } from "react";

export default function Church() {

  const { churches, fetchChurches, loading } = useChurch();

  useEffect(() => {
    fetchChurches();
  }, [])

  return (
    <div className="w-full p-4 flex flex-col gap-4 overflow-auto">
      <div className="text-2xl font-bold text-blue-900">Churches</div>
      {
        loading ?
          <div>Loading...</div>
        :
          <div className="flex flex-col gap-4">
            {
              churches &&
              churches.map((c) => (
                <div>{c.name}</div>
              ))
            }
          </div>

      }
    </div>
  )
}