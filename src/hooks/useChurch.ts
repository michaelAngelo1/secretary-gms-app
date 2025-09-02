import { useState, useCallback } from "react";
import { getLocalChurchesInstance } from "@/config/axiosConfig";
import type { ChurchProps } from "@/config/interfaces";

export function useChurch() {
  const [churches, setChurches] = useState<ChurchProps[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchChurches = useCallback(async () => {
    const at = localStorage.getItem("at");
    if (!at) return;
    setLoading(true);
    try {
      const res = await getLocalChurchesInstance(at).get('');
      setChurches(res.data.data);
    } catch (e) {
      console.error("Error fetching churches:", e);
    } finally {
      setLoading(false);
    }
  }, []);

  const createChurch = useCallback(async (data: Partial<ChurchProps>) => {
    console.log("placeholder create church: ", data);
  }, [fetchChurches]);

  const updateChurch = useCallback(async (id: string, data: Partial<ChurchProps>) => {
    console.log("placeholder update church: ", id, data);
  }, [fetchChurches]);

  const deleteChurch = useCallback(async (id: string) => {
    console.log("placeholder delete church: ", id);
  }, [fetchChurches]);

  return {
    churches,
    loading,
    fetchChurches,
    createChurch,
    updateChurch,
    deleteChurch,
    setChurches, 
  };
}