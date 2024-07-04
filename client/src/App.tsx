import { useEffect, useState } from "react";
import { EvseTable } from "./components/evses";

function App() {
  const [evses, setEvses] = useState<
    {
      _id: string;
      vendor: string;
      model: string;
      maxPowerOutputWatts: number;
    }[]
  >([]);

  useEffect(() => {
    const fetchEvses = async () => {
      try {
        const response = await fetch(
          "https://agasswkhuc.execute-api.ap-south-1.amazonaws.com"
        );
        const data = await response.json();
        setEvses(data.data);
      } catch (error) {
        console.error("Error fetching EVSEs:", error);
      }
    };

    fetchEvses();
  }, []);

  return (
    <>
      <h1 className="text-xl text-white">EVSE List</h1>
      <EvseTable evses={evses} />
    </>
  );
}

export default App;
