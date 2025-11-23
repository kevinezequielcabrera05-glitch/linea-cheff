import { Link, useLocation } from "react-router-dom";

function CatalogNavigator() {
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path
      ? "bg-orange-500 text-white"
      : "text-gray-700 hover:bg-gray-100";

  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 w-full my-10">
      <ul className="flex flex-wrap justify-center md:justify-start gap-3 text-sm md:text-base">
        <li>
          <Link
            to="/cocinas"
            className={`px-5 py-2 rounded-xl transition ${isActive("/cocinas")}`}
          >
            Cocinas
          </Link>
        </li>

        <li>
          <Link
            to="/anafes"
            className={`px-5 py-2 rounded-xl transition ${isActive("/anafes")}`}
          >
            Anafes
          </Link>
        </li>

        <li>
          <Link
            to="/hornos"
            className={`px-5 py-2 rounded-xl transition ${isActive("/hornos")}`}
          >
            Hornos
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default CatalogNavigator;
