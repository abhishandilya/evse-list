import { EvseTable, type EVSE } from "./components/evses";

function App() {
  const evses: EVSE[] = [
    {
      _id: "1",
      vendor: "LITEON",
      model: "IC 32/40 A",
      maxCurrent: 40,
      outputType: "AC",
    },
    {
      _id: "2",
      vendor: "LITEON",
      model: "IC 48A",
      maxCurrent: 48,
      outputType: "AC",
    },
    {
      _id: "3",
      vendor: "LITEON",
      model: "IC 80A",
      maxCurrent: 80,
      outputType: "AC",
    },
    {
      _id: "4",
      vendor: "LITEON",
      model: "IC EU",
      maxCurrent: 32,
      outputType: "AC",
    },
    {
      _id: "5",
      vendor: "LITEON",
      model: "DC 30kW",
      maxOutputPowerWatts: 30_000,
      outputType: "DC",
    },
    {
      _id: "6",
      vendor: "StarCharge",
      model: "Telesto",
      outputType: "AC",
      maxOutputPowerWatts: 22_000,
    },
    {
      _id: "7",
      vendor: "StarCharge",
      model: "Saturn",
      outputType: "AC",
      maxOutputPowerWatts: 22_000,
      href: "https://www.starcharge.com/product/saturn/",
    },
    {
      _id: "8",
      vendor: "StarCharge",
      model: "Arc",
      outputType: "AC",
      href: "https://www.starcharge.com/product/arc/",
    },
    {
      _id: "9",
      vendor: "StarCharge",
      model: "Artemis",
      outputType: "AC",
      href: "https://www.starcharge.com/product/artemis/",
    },
    {
      _id: "10",
      vendor: "StarCharge",
      model: "Jupiter",
      outputType: "DC",
      href: "https://www.starcharge.com/product/jupiter/",
    },
    {
      _id: "11",
      vendor: "StarCharge",
      model: "Titan",
      outputType: "DC",
      href: "https://www.starcharge.com/product/titan/",
    },
    {
      _id: "12",
      vendor: "StarCharge",
      model: "Athena",
      outputType: "DC",
      href: "https://www.starcharge.com/product/athena/",
    },
    {
      _id: "13",
      vendor: "StarCharge",
      model: "Venus",
      outputType: "DC",
      href: "https://www.starcharge.com/product/venus/",
    },
    {
      _id: "14",
      vendor: "StarCharge",
      model: "Triton",
      outputType: "DC",
      href: "https://www.starcharge.com/product/triton-hpc-system/",
    },
    {
      _id: "15",
      vendor: "StarCharge",
      model: "Nova",
      outputType: "DC",
      href: "https://www.starcharge.com/product/nova/",
    },
    {
      _id: "16",
      vendor: "ChargePoint",
      model: "CP6000",
      outputType: "AC",
      href: "https://www.chargepoint.com/businesses/stations/cp6000",
      maxCurrent: 80,
    },
    {
      _id: "17",
      vendor: "ChargePoint",
      model: "CT4000",
      outputType: "AC",
      href: "https://www.chargepoint.com/businesses/stations/ct4000",
      maxCurrent: 30,
    },
    {
      _id: "18",
      vendor: "ChargePoint",
      model: "CPF50",
      outputType: "AC",
      href: "https://www.chargepoint.com/businesses/stations/cpf50",
      maxCurrent: 50,
    },
  ];

  return (
    <>
      <h1 className="text-xl text-white">EVSE List</h1>
      <EvseTable evses={evses} />
    </>
  );
}

export default App;
