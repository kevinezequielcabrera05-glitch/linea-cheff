import { useState } from "react";

/* Crear objeto formData */

const ContactSection = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  /* modificamos el objeto en cada evento */
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const [status, setStatus] = useState(null);

  /* enviamos datos al backend */
  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://127.0.0.1:8000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.user_name,
          email: formData.user_email,
          message: formData.message,
        }),
      });

      if (res.ok) {
        setStatus({
          type: "success",
          message: "Enviado!",
        });
        setFormData({
          user_name: "",
          user_email: "",
          message: "",
        });
      } else {
        setStatus({
          type: "error",
          message: "Error (else)",
        });
        setFormData({
          user_name: "",
          user_email: "",
          message: "",
        });
      }
    } catch (err) {
      console.error(err);
      setStatus({
        type: "error",
        message: "Error(catch)",
      });
      setFormData({
        user_name: "",
        user_email: "",
        message: "",
      });
    }
  };

  return (
    <section
      id="contacto"
      className="w-full flex flex-col lg:flex-row justify-between items-start px-6 lg:px-32 py-16"
    >
      <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
        <h2 className="text-4xl font-bold mb-2">Contactanos</h2>
        <p className="text-orange-500/90 mb-6">
          Siéntete libre de contactarnos y consultar cualquier duda que tengas.
          Valoramos tu interés en nuestro trabajo.
        </p>

        <form onSubmit={sendEmail} className="flex flex-col gap-4">
          <input
            type="text"
            name="user_name"
            placeholder="tu nombre"
            className="border-b border-gray-300 focus:outline-none py-2"
            value={formData.user_name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="user_email"
            placeholder="tu email"
            className="border-b border-gray-300 focus:outline-none py-2"
            value={formData.user_email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="cuéntanos tus intereses"
            className="border-b border-gray-300 focus:outline-none py-2 resize-none"
            rows="3"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-6 mt-2 w-fit cursor-pointer"
          >
            ENVIAR
          </button>

          {status && (
            <p
              className={`mt-2 font-medium ${
                status.type === "success" ? "text-green-600" : "text-red-600"
              }`}
            >
              {status.message}
            </p>
          )}
        </form>
      </div>

      <div className="w-full lg:w-1/2 flex flex-col lg:pl-16 text-gray-700">
        <h3 className="font-bold mb-2">Horario de atención</h3>
        <p>lunes a sábado</p>
        <p>8hs - 18hs</p>
        <p className="mb-4">domingo cerrado</p>

        <h3 className="font-bold mb-2">Dirección</h3>
        <p>Rosario, Santa Fe</p>
        <p>Cafferata 3229</p>
        <p className="mb-4">Entre Dean Funes y Garay</p>

        <h3 className="font-bold mb-2">Soporte</h3>
        <p>LineaCheff34@gmail.com</p>
        <p>+54 341 7508421</p>

        <div className="flex gap-6 mt-6 font-medium">
          <a href="#">instagram</a>
          <a href="#">facebook</a>
          <a href="#">tiktok</a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
