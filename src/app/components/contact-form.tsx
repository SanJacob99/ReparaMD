"use client";

import { useRef, useState, FormEvent } from "react";
import { Service } from "../types/services";

interface ContactFormProps {
  services: Service[];
}

export default function Contactform({ services }: ContactFormProps) {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");

    const formEl = formRef.current;
    if (!formEl) {
      console.error("El formulario no está en el DOM");
      setStatus("error");
      return;
    }

    // formData es de tipo FormData
    const formData = new FormData(formEl);

    // 1) Convertimos formData.entries() a un array de [clave, valorString]
    const entries = Array.from(formData.entries()).map(
      ([key, value]) => [key, String(value)] as [string, string]
    );

    // 2) Ahora podemos crear el body sin usar `any`
    const body = new URLSearchParams(entries).toString();

    try {
      const res = await fetch("/api/sendMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body,
      });

      if (!res.ok) throw new Error("Error en el servidor");
      const json = await res.json();

      if (json.success) {
        setStatus("success");
        formEl.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <section id="contacto" className="bg-[#FAF9F6] py-16">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="max-w-lg mx-auto relative">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">Contáctanos</h2>

          {status === "sending" ? (
            <div className="flex items-center justify-center h-64">
              <div className="w-16 h-16 border-4 border-blue-800 border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="servicio"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Elige un servicio
                </label>
                <select
                  id="servicio"
                  name="servicio"
                  required
                  className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
                >
                  <option value="" disabled>
                    Selecciona un servicio
                  </option>
                  {services.map((svc) => (
                    <option key={svc.id} value={svc.title}>
                      {svc.title} (desde ${svc.priceMin}
                      {svc.priceMax ? `–${svc.priceMax}` : ""})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="nombre"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  maxLength={50}
                  required
                  className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>

              <div>
                <label
                  htmlFor="telefono"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  placeholder="(240) 602-6013"
                  required
                  className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>

              <div>
                <label
                  htmlFor="mensaje"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Mensaje Adicional
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  maxLength={500}
                  rows={4}
                  className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  placeholder="Describe brevemente el problema o pregunta"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-800 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-blue-700 transition"
              >
                Enviar
              </button>
            </form>
          )}
        </div>

        <div className="bg-gray-100 p-8 rounded-2xl shadow-md">
          <h3 className="text-2xl font-bold text-blue-800 mb-4">
            Nuestra Ubicación
          </h3>
          <p className="text-gray-700 mb-2">
            <strong>Dirección:</strong> Torrance Dr, Kensigton, MD 20902
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Horario:</strong> Lunes a Viernes: 10 am – 6 pm <br />
            Sábado: 10 am – 2 pm <br />
            Domingo: Cerrado
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Teléfono:</strong>{" "}
            <button
              onClick={() => window.open("tel:+12406022365")}
              className="text-blue-800 font-semibold hover:underline"
            >
              (240) 602-2365
            </button>
          </p>
          <a
            href="https://www.google.com/maps/place/Torrance+Ct,+Wheaton-Glenmont,+MD+20895"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-blue-800 font-semibold hover:underline"
          >
            Ver en Google Maps
          </a>
        </div>
      </div>

      {/* Modal de Éxito */}
      {status === "success" && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-xl p-6 max-w-sm mx-auto text-center">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">
              ¡Enviado con éxito!
            </h3>
            <p className="mb-6">Tu mensaje ha sido enviado exitosamente.</p>
            <button
              onClick={() => setStatus("idle")}
              className="bg-blue-800 text-white px-4 py-2 rounded-lg"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

      {/* Modal de Error */}
      {status === "error" && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-xl p-6 max-w-sm mx-auto text-center">
            <h3 className="text-2xl font-semibold text-red-600 mb-4">
              Error al enviar
            </h3>
            <p className="mb-6">
              Hubo un problema al enviar tu mensaje. Intenta de nuevo.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="bg-red-600 text-white px-4 py-2 rounded-lg"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
