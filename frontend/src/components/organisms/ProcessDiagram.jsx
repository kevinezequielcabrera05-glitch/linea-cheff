import ProcessStep from "../atoms/ProcessStep.jsx";
import { Wrench, Settings, Hammer, CheckCircle, Package } from "lucide-react";

function ProcessDiagram() {
  const steps = [
    { icon: <Wrench size={40} />, label: "DISEÑO Y PUBLICACIÓN", num: 1 },
    { icon: <Settings size={40} />, label: "SELECCIÓN DE MATERIALES", num: 2 },
    { icon: <Hammer size={40} />, label: "FABRICACIÓN Y MONTAJE", num: 3 },
    { icon: <CheckCircle size={40} />, label: "PRUEBA DE CALIDAD", num: 4 },
    { icon: <Package size={40} />, label: "EMPAQUE Y DESPACHO", num: 5 },
  ];

  return (
    <section className="rounded-2xl p-6 text-center border-4 border-black mx-4 sm:mx-10 md:mx-20 lg:mx-40 xl:mx-80 mb-20">
      <h3 className="font-bold text-2xl md:text-3xl mb-6">Proceso Productivo</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 justify-items-center">
        {steps.map((step, index) => (
          <ProcessStep key={index} {...step} />
        ))}
      </div>
    </section>
  );
}

export default ProcessDiagram;
