import Header from "../components/organisms/Header.jsx";
import CatalogNavigator from "../components/molecules/CatalogNavigator.jsx";
import KitchenCatalog from "../components/organisms/KitchenCatalog.jsx"



function Cocinas() {
  return (
    <>
      <Header />

      <main className="px-6 md:px-16 lg:px-32 py-8">
        
        <CatalogNavigator />
        <KitchenCatalog />
      </main>
    </>
  );
}

export default Cocinas;
