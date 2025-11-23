import { useState } from "react";
import anafesData from "../../data/anafes.json";
import ModalCatalog from "../molecules/ModalCatalog.jsx";

function CooktopCatalog() {
  const [openModal, setOpenModal] = useState(false);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  const handleConsultarPrecio = (producto) => {
    const mensaje = `Hola! Estoy interesado en la cocina "${producto.nombre}". ¿Podrían confirmarme el precio?`;
    const url = `https://wa.me/5493417508349?text=${encodeURIComponent(mensaje)}`; 
    window.open(url, "_blank");
  };

  return (
    <>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {anafesData.map((producto) => (
          <div
            key={producto.id}
            className="bg-gray-100 rounded-2xl p-4 drop-shadow-2xl hover:shadow-lg transition"
          >
            <img
              src={
                Array.isArray(producto.imagen)
                  ? producto.imagen[0].replace("../../public", "")
                  : producto.imagen.replace("../../public", "")
              }
              alt={producto.nombre}
              className="w-full rounded-xl mb-3 object-cover"
            />

            <p className="font-semibold text-lg text-gray-800">
              {producto.nombre}
            </p>
            <p className="text-sm text-gray-500 mt-1">{producto.descripcion}</p>

            {/* Botón de consulta en lugar del precio */}
            <div className="mt-3 flex flex-col sm:flex-row gap-2">
              <button
                onClick={() => handleConsultarPrecio(producto)}
                className="bg-green-500 text-white rounded-lg px-4 py-2 hover:bg-green-600 transition"
              >
                Consultar precio
              </button>

              <button
                onClick={() => {
                  setProductoSeleccionado(producto);
                  setOpenModal(true);
                }}
                className="bg-orange-100 text-orange-600 rounded-lg px-4 py-2 hover:bg-orange-200 transition cursor-pointer"
              >
                Ver más
              </button>
            </div>
          </div>
        ))}
      </section>

      <ModalCatalog
        isOpen={openModal}
        closeModal={() => setOpenModal(false)}
        producto={productoSeleccionado}
      />
    </>
  );
}

export default CooktopCatalog;
