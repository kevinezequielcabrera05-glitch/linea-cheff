import Header from "../components/organisms/Header";
import CatalogNavigator from "../components/molecules/CatalogNavigator";
import FurnanceCatalog from "../components/organisms/FurnanceCatalog";

function Hornos() {
  return (
    <>
      <Header />

      <main className="px-6 md:px-16 lg:px-32 py-8">
        
        <CatalogNavigator />
        <FurnanceCatalog />
      </main>
    </>
  );
}

export default Hornos