import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./table";

export function EvseTable({
  evses,
}: {
  evses: {
    _id: string;
    vendor: string;
    model: string;
    maxPowerOutputWatts: number;
  }[];
}) {
  return (
    <Table grid={true} striped={true}>
      <TableHead>
        <TableRow>
          <TableHeader>Vendor</TableHeader>
          <TableHeader>Model</TableHeader>
          <TableHeader>Max Power Output (Watts)</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        {evses.map((evse) => (
          <TableRow key={evse._id}>
            <TableCell>{evse.vendor}</TableCell>
            <TableCell>{evse.model}</TableCell>
            <TableCell>{evse.maxPowerOutputWatts}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
