import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./table";

export type EVSE = {
  _id: string;
  vendor: string;
  model: string;
  outputType: "AC" | "DC";
  maxCurrent?: number;
  maxOutputPowerWatts?: number;
  href?: string;
};

export function EvseTable({ evses }: { evses: EVSE[] }) {
  return (
    <Table grid={true} striped={true} id="evseTable">
      <TableHead>
        <TableRow>
          <TableHeader>Vendor</TableHeader>
          <TableHeader>Model</TableHeader>
          <TableHeader>Output Type</TableHeader>
          <TableHeader>Max Current (A)</TableHeader>
          <TableHeader>Max Output Power (kW)</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        {evses.map((evse) => (
          <TableRow key={evse._id} href={evse.href}>
            <TableCell>{evse.vendor}</TableCell>
            <TableCell>{evse.model}</TableCell>
            <TableCell>{evse.outputType}</TableCell>
            <TableCell>{evse.maxCurrent}</TableCell>
            <TableCell>
              {evse.maxOutputPowerWatts ? evse.maxOutputPowerWatts / 1000 : ""}
            </TableCell>
            <TableCell></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
