function AboutUs() {
  return (
    <section
      id="about-us"
      className="w-full min-h-screen snap-start flex flex-col lg:flex-row items-center justify-center px-10 lg:px-20 py-20 gap-10"
    >
      <div className="w-full lg:w-1/2 rounded-3xl overflow-hidden">
        <img
          src="/images/aboutus.jpeg"
          alt="cocinas en uso"
          className="w-full h-full object-cover rounded-3xl"
        />
      </div>

      {/* Texto */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h2 className="font-bold text-5xl lg:text-6xl">NOSOTROS</h2>
        <p className="text-base lg:text-lg leading-relaxed">
          en <span className="text-orange-400 font-semibold">Linea</span>Cheff nos dedicamos a la fabricación de cocinas, anafes, freidoras y soluciones personalizadas dentro del rubro. Si eres emprendedor, nuestro negocio está dirigido para ti!
        </p>
        <p className="text-base lg:text-lg leading-relaxed">
          Contamos con 15 años de experiencia dentro del rubro y aplicamos distintas metodologías para obtener el producto de mejor calidad y precio del mercado.
        </p>
      </div>
    </section>
  );
}

export default AboutUs;
