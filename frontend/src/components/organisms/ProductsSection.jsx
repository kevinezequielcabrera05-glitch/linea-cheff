import ProductCard from "../molecules/ProductCard";

function ProductsSection() {
  return (
    <section
      id="products"
      className="w-full h-auto snap-start grid grid-cols-1 lg:grid-cols-3"
    >
      <ProductCard
        image="/images/catalog-anafes.jpg"
        title="Anafes"
        subtitle="premium"
        buttonText="Ver más"
        href="anafes"
      />

      <ProductCard
        image="/images/horno-foto-ia.webp"
        title="Hornos"
        subtitle="eléctricos"
        buttonText="Ver más"
        href="hornos"
      />

      <ProductCard
        image="/images/cocina-negra-frente.webp"
        title="Cocinas"
        subtitle="industriales"
        buttonText="Ver más"
        href="cocinas"
      />
    </section>
  );
}

export default ProductsSection;
