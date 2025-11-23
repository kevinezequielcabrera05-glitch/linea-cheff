import { useState } from "react";

function ProductCard({ image, title, buttonText, subtitle, href }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className={`relative flex justify-start items-end w-auto h-auto bg-cover bg-center bg-no-repeat min-h-screen`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`absolute bottom-0 left-0 right-0 h-1/3 w-full bg-gradient-to-t to-transparent 
                    ${
                      isHovered ? "from-black/90" : "from-black/70"
                    } transition-colors duration-300`}
      ></div>

      <div className="relative px-8 py-20">
        {title && (
          <p className="font-semibold text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl my-10 leading-tight">
            {title} <br />
            {subtitle && (
              <span className="font-light text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                {subtitle}
              </span>
            )}
          </p>
        )}
        {buttonText && (
          <button className="boton">
            <a
              href={href}
              className="cursor-pointer text-2xl sm:text-3xl md:text-4xl px-6 text-orange-400 font-bold w-auto h-15 bg-white/20 border-2 border-orange-400 rounded-full"
            >
              {buttonText}
            </a>
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
