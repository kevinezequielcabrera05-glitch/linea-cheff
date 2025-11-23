import { Link } from "react-router-dom";

function CatalogNavigator() {
  return (
    <>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 w-full my-10">
        <ul className="flex flex-wrap justify-center md:justify-start gap-3 text-sm md:text-base">
          <li>
            <Link
              to="/cocinas"
              className="px-5 py-2 bg-gray-500 text-white rounded-xl hover:bg-gray-600 transition"
            >
              Cocinas
            </Link>
          </li>
          <li>
            <Link
              to="/anafes"
              className="px-5 py-2 text-gray-700 hover:bg-gray-100 rounded-xl transition"
            >
              Anafes
            </Link>
          </li>
          <li>
            <Link
              to="/freidoras"
              className="px-5 py-2 text-gray-700 hover:bg-gray-100 rounded-xl transition"
            >
              Freidoras
            </Link>
          </li>
        </ul>

        <div className="flex justify-center md:justify-end">
          <button className="px-5 py-2 border border-gray-400 rounded-xl text-gray-700 hover:bg-gray-100 transition">
            Filtros de búsqueda
          </button>
        </div>
      </div>
    </>
  );
}

export default CatalogNavigator;
