import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

function ModalCatalog({ isOpen, closeModal, producto }) {
  if (!isOpen || !producto) return null;

  // Manejamos índice actual de imagen
  const [currentIndex, setCurrentIndex] = useState(0);

  // Si tu producto tiene varias imágenes, podrías agregarlas así:
  const imagenes = Array.isArray(producto.imagen)
    ? producto.imagen
    : [producto.imagen]; // Si solo hay una, igual funciona

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % imagenes.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? imagenes.length - 1 : prev - 1
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      {/* Contenedor principal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-[90%] p-6 flex flex-col md:flex-row gap-6">
        {/* Botón cerrar */}
        <button
          onClick={closeModal}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 transition"
        >
          <X size={28} />
        </button>

        {/* Carrusel de imágenes */}
        <div className="relative flex flex-col items-center md:w-1/2">
          <img
            src={imagenes[currentIndex].replace("../../public", "")}
            alt={producto.nombre}
            className="rounded-xl w-full h-72 object-contain transition-all duration-300"
          />

          {/* Flechas */}
          {imagenes.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-700 rounded-full p-2 shadow"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-700 rounded-full p-2 shadow"
              >
                <ChevronRight size={22} />
              </button>
            </>
          )}

          {/* Indicadores (puntos) */}
          <div className="flex justify-center gap-2 mt-4">
            {imagenes.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition ${
                  index === currentIndex
                    ? "bg-gray-800"
                    : "bg-gray-400/60 hover:bg-gray-500"
                }`}
              ></button>
            ))}
          </div>
        </div>

        {/* Descripción */}
        <div className="md:w-1/2 text-gray-800">
          <h2 className="text-xl font-bold mb-2">{producto.nombre}</h2>
          <p className="text-sm mb-3 text-gray-600 leading-relaxed">
            {producto["big-description"] || producto.descripcion}
          </p>

          <div className="flex flex-col gap-2 mb-4">
            {producto.precioAnterior && (
              <p className="text-gray-500 line-through text-sm">
                ${producto.precioAnterior.toLocaleString()}
              </p>
            )}
            <p className="text-orange-500 font-bold text-2xl">
              ${producto.precio.toLocaleString()}{" "}
              {producto.descuento && (
                <span className="text-sm text-green-600 ml-1">
                  ({producto.descuento} OFF)
                </span>
              )}
            </p>
          </div>

          <p className="text-sm text-gray-600 mb-4">
            <strong>Stock:</strong> {producto.stock}
          </p>

          <button className="bg-green-100 text-green-700 px-6 py-3 rounded-xl hover:bg-green-200 transition font-semibold">
            Consultar ahora
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalCatalog;
