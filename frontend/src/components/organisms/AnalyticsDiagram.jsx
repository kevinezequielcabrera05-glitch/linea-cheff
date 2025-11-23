import AnalyticsStep from "../atoms/AnalyticsStep";
import { Users, Clock, Coins, Wallet } from "lucide-react";

function AnalyticsDiagram() {
  const steps = [
    { color: "bg-orange-400", icon: <Users size={86} />, label: "+15", text: "CLIENTES SATISFECHOS" },
    { color: "bg-orange-500", icon: <Clock size={86} />, label: "+10", text: "AÑOS DE EXPERIENCIA" },
    { color: "bg-orange-400", icon: <Coins size={86} />, label: "+300", text: "VENTAS REALIZADAS" },
    { color: "bg-orange-500", icon: <Wallet size={86} />, label: "10", text: "FORMAS DE PAGO" },
  ];

  return (
    <section className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-white text-center">
      {steps.map((step, index) => (
        <AnalyticsStep key={index} {...step} />
      ))}
    </section>
  );
}

export default AnalyticsDiagram;
