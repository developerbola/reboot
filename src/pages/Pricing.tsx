import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const vpsData = [
  {
    model: "Cloud VPS 10",
    cpu: "4 vCPU Cores",
    ram: "8 GB",
    storage: "75 GB NVMe",
    port: "200 Mbit/s",
    price: "$4.95",
  },
  {
    model: "Cloud VPS 20",
    cpu: "6 vCPU Cores",
    ram: "12 GB",
    storage: "100 GB NVMe",
    port: "300 Mbit/s",
    price: "$7.95",
    popular: true,
  },
  {
    model: "Cloud VPS 30",
    cpu: "8 vCPU Cores",
    ram: "24 GB",
    storage: "200 GB NVMe",
    port: "600 Mbit/s",
    price: "$15.00",
  },
  {
    model: "Cloud VPS 40",
    cpu: "12 vCPU Cores",
    ram: "48 GB",
    storage: "250 GB NVMe",
    port: "800 Mbit/s",
    price: "$26.00",
  },
  {
    model: "Cloud VPS 50",
    cpu: "16 vCPU Cores",
    ram: "64 GB",
    storage: "300 GB NVMe",
    port: "1 Gbit/s",
    price: "$46.00",
  },
  {
    model: "Cloud VPS 60",
    cpu: "18 vCPU Cores",
    ram: "96 GB",
    storage: "350 GB NVMe",
    port: "1 Gbit/s",
    price: "$59.00",
  },
];

const storageVpsData = [
  {
    model: "Storage VPS 10",
    cpu: "2 vCPU Cores",
    ram: "4 GB",
    storage: "300 GB SSD",
    port: "200 Mbit/s",
    price: "$4.95",
  },
  {
    model: "Storage VPS 20",
    cpu: "3 vCPU Cores",
    ram: "8 GB",
    storage: "400 GB SSD",
    port: "300 Mbit/s",
    price: "$7.95",
  },
  {
    model: "Storage VPS 30",
    cpu: "6 vCPU Cores",
    ram: "18 GB",
    storage: "1 TB SSD",
    port: "600 Mbit/s",
    price: "$15.00",
  },
  {
    model: "Storage VPS 40",
    cpu: "8 vCPU Cores",
    ram: "30 GB",
    storage: "1.2 TB SSD",
    port: "800 Mbit/s",
    price: "$26.00",
  },
  {
    model: "Storage VPS 50",
    cpu: "14 vCPU Cores",
    ram: "50 GB",
    storage: "1.4 TB SSD",
    port: "1 Gbit/s",
    price: "$46.00",
  },
];

const vdsData = [
  {
    model: "Cloud VDS S",
    cpu: "3 Physical Cores",
    ram: "24 GB",
    storage: "180 GB NVMe",
    port: "250 Mbit/s",
    price: "$46.40",
  },
  {
    model: "Cloud VDS M",
    cpu: "4 Physical Cores",
    ram: "32 GB",
    storage: "240 GB NVMe",
    port: "500 Mbit/s",
    price: "$55.20",
  },
  {
    model: "Cloud VDS L",
    cpu: "6 Physical Cores",
    ram: "48 GB",
    storage: "360 GB NVMe",
    port: "750 Mbit/s",
    price: "$83.20",
  },
  {
    model: "Cloud VDS XL",
    cpu: "8 Physical Cores",
    ram: "64 GB",
    storage: "480 GB NVMe",
    port: "1 Gbit/s",
    price: "$110.40",
  },
  {
    model: "Cloud VDS XXL",
    cpu: "12 Physical Cores",
    ram: "96 GB",
    storage: "720 GB NVMe",
    port: "1 Gbit/s",
    price: "$156.00",
  },
];

const dedicatedData = [
  {
    model: "AMD Ryzen 12 Cores",
    cpu: "12 x 3.70 GHz",
    ram: "128 GB",
    storage: "2 TB NVMe",
    port: "1 Gbit/s",
    price: "$129.00",
  },
  {
    model: "AMD Genoa 24 Cores",
    cpu: "24 x 2.50 GHz",
    ram: "128 GB REG ECC",
    storage: "2x 1 TB SSD",
    port: "1 Gbit/s",
    price: "$189.00",
  },
  {
    model: "AMD Turin 32 Cores",
    cpu: "32 x 3.55 GHz",
    ram: "128 GB",
    storage: "2 x 1 TB NVMe",
    port: "1 Gbit/s",
    price: "$289.00",
  },
  {
    model: "AMD Turin 64 Cores",
    cpu: "64 x 3.20 GHz",
    ram: "192 GB",
    storage: "2 x 1 TB NVMe",
    port: "1 Gbit/s",
    price: "$769.00",
  },
];

const PricingTable = ({ title, subtitle, data }: any) => (
  <div className="mb-20">
    <div className="mb-6">
      <h2 className="text-3xl font-bold text-white mb-2">{title}</h2>
      <p className="text-[#ffffff50]">{subtitle}</p>
    </div>
    <div className="rounded-xl border border-[#ffffff10] bg-[#111]/30 backdrop-blur-sm overflow-hidden">
      <Table>
        <TableHeader className="bg-white/5">
          <TableRow className="border-[#ffffff10] hover:bg-transparent">
            <TableHead className="text-white font-semibold">Model</TableHead>
            <TableHead className="text-white font-semibold">CPU</TableHead>
            <TableHead className="text-white font-semibold">RAM</TableHead>
            <TableHead className="text-white font-semibold">Storage</TableHead>
            <TableHead className="text-white font-semibold">Port</TableHead>
            <TableHead className="text-white font-semibold text-right">
              Price
            </TableHead>
            <TableHead className="text-white font-semibold"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item: any) => (
            <TableRow
              key={item.model}
              className="border-[#ffffff05] hover:bg-white/5 transition-colors"
            >
              <TableCell className="font-medium text-white">
                <div className="flex items-center gap-3">
                  {item.model}
                  {item.popular && (
                    <Badge
                      variant="outline"
                      className="text-[10px] uppercase bg-white text-black border-none h-5"
                    >
                      Popular
                    </Badge>
                  )}
                </div>
              </TableCell>
              <TableCell className="text-[#ffffff80]">{item.cpu}</TableCell>
              <TableCell className="text-[#ffffff80]">{item.ram}</TableCell>
              <TableCell className="text-[#ffffff80]">{item.storage}</TableCell>
              <TableCell className="text-[#ffffff80]">{item.port}</TableCell>
              <TableCell className="text-right font-semibold text-white">
                {item.price}
                <span className="text-[10px] text-[#ffffff40] ml-1">/mo</span>
              </TableCell>
              <TableCell className="text-right">
                <Link to="/login">
                  <Button
                    size="sm"
                    className="rounded-full h-8 px-4 bg-white text-black hover:bg-neutral-200"
                  >
                    Order
                  </Button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  </div>
);

const Pricing = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-32 pb-20 px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 tracking-tight">
            Full Cloud Price List
          </h1>
          <p className="text-[#ffffff60] text-lg max-w-2xl mx-auto mb-8">
            Transparent pricing for all our high-performance infrastructure.
            Compare resources and scale effortlessly.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/plans">
              <Button
                variant="outline"
                className="rounded-full border-[#ffffff20]"
              >
                Back to simple plans
              </Button>
            </Link>
          </div>
        </div>

        <PricingTable
          title="Virtual Private Servers"
          subtitle="Independent computing instances optimized for performance with NVMe drives."
          data={vpsData}
        />

        <PricingTable
          title="Storage VPS"
          subtitle="Storage-optimized VPS for all of your data storage needs."
          data={storageVpsData}
        />

        <PricingTable
          title="Virtual Dedicated Servers"
          subtitle="High performance virtual machines with dedicated resources."
          data={vdsData}
        />

        <PricingTable
          title="Dedicated Servers"
          subtitle="Single-tenant bare metal servers with full hardware control."
          data={dedicatedData}
        />
      </div>
    </div>
  );
};

export default Pricing;
