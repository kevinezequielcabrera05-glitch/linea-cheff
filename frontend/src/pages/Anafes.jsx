import Header from "../components/organisms/Header.jsx";
import CatalogNavigator from "../components/molecules/CatalogNavigator.jsx";
import CooktopCatalog from "../components/organisms/CooktopCatalog.jsx"



function Anafes() {
  return (
    <>
      <Header />

      <main className="px-6 md:px-16 lg:px-32 py-8">
        
        <CatalogNavigator />
        <CooktopCatalog />
      </main>
    </>
  );
}

export default Anafes;
