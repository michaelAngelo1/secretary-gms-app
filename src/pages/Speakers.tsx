import { getSpeakersInstance } from "@/config/axiosConfig";
import type { SpeakerProps } from "@/config/interfaces";
import { useEffect, useState } from "react"

export default function Speakers() {

  const [speakers, setSpeakers] = useState<SpeakerProps[]>([]);

  async function fetchSpeakers() {
    const at = localStorage.getItem("at");
    if(at) {
      try {
        const speakers = await getSpeakersInstance(at).get("");
        if(speakers) {
          setSpeakers(speakers.data.data);
        }
      } catch (e) {
        console.log("error get speakers: ", e);
      }
    }
  }

  useEffect(() => {
    fetchSpeakers();
  }, [])

  return (
    <div className="w-full p-4 flex flex-col gap-4 overflow-auto">
      <div className="text-2xl font-bold text-blue-900">Speakers</div>
      <div className="flex flex-col gap-4">
        {
          speakers &&
          speakers.map((s) => (
            <div>{s.first_name + " " + s.last_name}</div>
          ))
        }
      </div>
    </div>
  )
  
}