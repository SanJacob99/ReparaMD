// src/App.tsx
import React from "react";
import Header from "./components/header";
import Hero from "./components/hero";
import Contactform from "./components/contact-form";

export type Service = {
  id: string;
  title: string;
  description: string;
  priceMin: number;
  priceMax?: number;
  extraInfo?: string;
  icon: React.ReactNode;
};

type Testimonial = {
  id: string;
  quote: string;
  author: string;
  location: string;
};

type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

const services: Service[] = [
  {
    id: "diagnostico",
    title: "Diagnóstico básico",
    description:
      "Revisión completa de hardware y software para detectar fallos. Incluye prueba de arranque, prueba de memoria y chequeo de SMART en discos.",
    priceMin: 20,
    priceMax: 30,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-blue-800"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8v4m0 4h.01M4 12a8 8 0 1116 0 8 8 0 01-16 0z"
        />
      </svg>
    ),
  },
  {
    id: "formateo",
    title: "Formateo e instalación de SO",
    description:
      "Instalación de Windows 10/11, Linux o MacOS según corresponda. Incluye controladores oficiales, actualización de BIOS/UEFI y configuración básica de programas esenciales.",
    priceMin: 50,
    priceMax: 80,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-blue-800"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 4v16h16V4H4zm4 2h8v4H8V6zm0 6h8v4H8v-4z"
        />
      </svg>
    ),
    extraInfo: "Clonación de disco existente: +$20",
  },
  {
    id: "virus",
    title: "Eliminación de virus / malware",
    description:
      "Limpieza profunda del sistema mediante herramientas antivirus gratuitas y escaneo completo. Incluye reparación de registros y sugerencia de medidas preventivas.",
    priceMin: 40,
    priceMax: 60,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-blue-800"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.828 21a4 4 0 010-8h.172a4 4 0 010 8H13.828zM4 8a4 4 0 010-8h.172a4 4 0 010 8H4zm14 8a4 4 0 010-8h.172a4 4 0 010 8H18z"
        />
      </svg>
    ),
  },
  {
    id: "limpieza",
    title: "Limpieza física interna",
    description:
      "Desmontaje completo de carcasa, limpieza de ventiladores, disipadores y rejillas. Reemplazo de pasta térmica estándar en CPU/GPU.",
    priceMin: 50,
    priceMax: 70,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-blue-800"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 13l4-4m0 0l4 4m-4-4v12"
        />
      </svg>
    ),
  },
  {
    id: "ssd",
    title: "Reemplazo de disco duro por SSD",
    description:
      "Clonación de sistema operativo (si la unidad origen es legible) y configuración inicial en SSD (alojado por cliente). Configuración de particiones y optimización.",
    priceMin: 60,
    priceMax: 100,
    extraInfo: "SSD no incluido",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-blue-800"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 8h.01M16 8h.01M8 16h.01M16 16h.01"
        />
      </svg>
    ),
  },
  {
    id: "ram",
    title: "Aumento de memoria RAM",
    description:
      "Instalación y verificación de módulos RAM suministrados por el cliente. Pruebas de estabilidad con MemTest86 y configuración de BIOS para reconocimiento.",
    priceMin: 30,
    priceMax: 50,
    extraInfo: "RAM no incluida",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-blue-800"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <rect x="2" y="6" width="20" height="12" rx="2" ry="2" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2 10h20M2 14h20"
        />
      </svg>
    ),
  },
];

const testimonials: Testimonial[] = [
  {
    id: "test-1",
    quote:
      "Excelente servicio, mi laptop quedó como nueva en menos de 24 horas.",
    author: "Carlos M.",
    location: "Gaithersburg, MD",
  },
  {
    id: "test-2",
    quote:
      "Muy profesionales y transparentes con los precios. Recomiendo 100%.",
    author: "Ana G.",
    location: "Rockville, MD",
  },
  {
    id: "test-3",
    quote:
      "El técnico vino a mi casa y reparó todo sin cargos extra. ¡Excelente!",
    author: "Jose R.",
    location: "Bethesda, MD",
  },
];

const faqs: FAQItem[] = [
  {
    id: "faq-1",
    question: "¿Cuánto tiempo dura el diagnóstico?",
    answer:
      "El diagnóstico inicial se realiza en un plazo de 24 horas hábiles desde que recibimos tu equipo. Si requiere pruebas adicionales, te notificamos con un estimado de tiempo extra.",
  },
  {
    id: "faq-2",
    question: "¿Aceptan equipos con hardware personalizado?",
    answer:
      "Sí. Podemos trabajar con laptops y PCs ensambladas por el usuario, siempre y cuando los componentes sean estándar y detectables por las herramientas de diagnóstico. En caso de hardware muy exótico, podría haber un cargo adicional.",
  },
  {
    id: "faq-3",
    question: "¿Qué garantía ofrecen?",
    answer:
      "Ofrecemos 30 días de garantía en mano de obra y 90 días en repuestos suministrados por nosotros. La garantía aplica siempre que el equipo no reciba golpes o manipulaciones externas tras la reparación.",
  },
  {
    id: "faq-4",
    question: "¿Cómo funcionan los pagos?",
    answer:
      "Aceptamos efectivo, tarjeta de débito/crédito (sin costo adicional por manejo), y transferencias electrónicas. El pago final se realiza una vez finalice la reparación y el cliente confirme que el equipo funciona correctamente.",
  },
];

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col text-gray-800">
      {/* Header */}
      <Header />

      {/* Hero */}
      <Hero />

      <main className="flex-grow">
        {/* Servicios Destacados */}
        <section id="servicios" className="py-16 bg-gray-100">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-blue-800 text-center mb-8">
              Servicios Destacados
            </h2>
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((svc) => (
                <div
                  key={svc.id}
                  className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center"
                >
                  {svc.icon}
                  <h3 className="mt-4 text-xl font-semibold text-blue-800">
                    {svc.title}
                  </h3>
                  <p className="mt-2 text-gray-600 text-sm">
                    {svc.description}
                  </p>
                  <p className="mt-4 font-semibold text-black">
                    Desde ${svc.priceMin}
                    {svc.priceMax ? ` – $${svc.priceMax}` : ""}
                  </p>
                  {svc.extraInfo && (
                    <p className="mt-1 text-xs text-gray-500 italic">
                      {svc.extraInfo}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tabla de Precios */}
        <section id="precios" className="bg-[#FAF9F6] py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-blue-800 text-center mb-8">
              Precios Claros y Transparentes
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white shadow-md rounded-2xl overflow-hidden">
                <thead className="bg-blue-800 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Servicio</th>
                    <th className="px-6 py-4 text-left">Descripción breve</th>
                    <th className="px-6 py-4 text-left">Precio mínimo</th>
                    <th className="px-6 py-4 text-left">Precio / Variables</th>
                  </tr>
                </thead>
                <tbody>
                  {services.map((svc, idx) => (
                    <tr
                      key={svc.id}
                      className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}
                    >
                      <td className="px-6 py-4 text-gray-800">{svc.title}</td>
                      <td className="px-6 py-4 text-gray-600 text-sm">
                        {svc.description}
                      </td>
                      <td className="px-6 py-4 font-semibold text-black">
                        ${svc.priceMin}
                      </td>
                      <td className="px-6 py-4 text-gray-600 text-sm">
                        {svc.priceMax
                          ? `$${svc.priceMax} (${
                              svc.extraInfo ?? "Sin variables"
                            } )`
                          : "Precio fijo"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="mt-2 text-xs text-gray-500 italic">
                * Todos los precios sujetos a confirmación tras diagnóstico. El
                costo final puede variar según estado del equipo y repuestos
                necesarios.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonios */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-blue-800 text-center mb-8">
              Lo Que Dicen Nuestros Clientes
            </h2>
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((t) => (
                <blockquote
                  key={t.id}
                  className="bg-white p-6 rounded-2xl shadow-md relative"
                >
                  <div className=" top-4 left-4 text-blue-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7.17 6.58A5.978 5.978 0 006 11.94v2.78c0 .97.784 1.754 1.754 1.754h2.78c.97 0 1.754-.784 1.754-1.754v-2.78a5.978 5.978 0 00-1.17-3.36l-1.17 1.17c-.293.293-.768.293-1.061 0l-1.106-1.106c-.293-.293-.293-.768 0-1.061l1.17-1.17zm9 0A5.978 5.978 0 0015 11.94v2.78c0 .97.784 1.754 1.754 1.754h2.78c.97 0 1.754-.784 1.754-1.754v-2.78a5.978 5.978 0 00-1.17-3.36l-1.17 1.17c-.293.293-.768.293-1.061 0l-1.106-1.106c-.293-.293-.293-.768 0-1.061l1.17-1.17z" />
                    </svg>
                  </div>
                  <p className="text-gray-700 italic mb-4">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <cite className="block font-semibold text-gray-900">
                    {t.author} – {t.location}
                  </cite>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* Cómo Funciona */}
        <section className="bg-[#FAF9F6] py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-blue-800 text-center mb-8">
              ¿Cómo Funciona?
            </h2>
            <div className="prose prose-lg mx-auto text-gray-700">
              <p>
                Primero, agenda tu cita mediante nuestro{" "}
                <a
                  href="#contacto"
                  className="text-blue-800 hover:underline font-semibold"
                >
                  formulario de contacto
                </a>{" "}
                o marcando <strong>(240) 602-2365</strong>. Segundo, entrega tu
                equipo en nuestra dirección en Rockville (123 Main Street, Suite
                5, Rockville, MD 20850) o solicita nuestro servicio a domicilio
                gratis dentro de 10 millas. Tercero, nuestro técnico realiza un
                diagnóstico en menos de 24 horas laborales y te envía un informe
                detallado del problema y presupuesto. Una vez aprobado,
                procedemos con la reparación; finalizado el trabajo, coordinamos
                la entrega o recogida del equipo y realizamos una prueba final
                en tu presencia. Todos los trabajos cuentan con garantía de{" "}
                <strong>30 días</strong> en mano de obra y{" "}
                <strong>90 días</strong> en repuestos.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-blue-800 text-center mb-8">
              Preguntas Frecuentes
            </h2>
            <div className="space-y-4">
              {faqs.map((item) => (
                <details
                  key={item.id}
                  className="group bg-white p-4 rounded-2xl shadow-md cursor-pointer"
                >
                  <summary className="flex justify-between items-center font-semibold text-gray-800 list-none">
                    <span>{item.question}</span>
                    {/* Ícono de flecha que rota cuando el `<details>` está abierto */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-gray-500 transform transition-transform duration-200 group-open:rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <p className="mt-2 text-gray-600 text-sm">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Contacto */}
        <Contactform services={services} />
      </main>

      {/* Footer */}
      <footer className="bg-blue-800 text-white py-6">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between">
          <div className="flex space-x-4 mb-4 sm:mb-0">
            <a href="/politica-privacidad" className="hover:underline text-sm">
              Política de Privacidad
            </a>
            <a href="/politica" className="hover:underline text-sm">
              Términos y Condiciones
            </a>
          </div>
          <p className="text-sm">
            © 2025 ReparaMD. Todos los derechos reservados. Reparación de
            laptops y computadoras en Maryland.
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a
              href="https://facebook.com/tuNegocio"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white hover:text-gray-200"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.99h-2.54v-2.89h2.54V9.797c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.63.772-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.99C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            <a
              href="https://instagram.com/tuNegocio"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white hover:text-gray-200"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7.75 2C4.678 2 2 4.678 2 7.75v8.5C2 19.322 4.678 22 7.75 22h8.5C19.322 22 22 19.322 22 16.25v-8.5C22 4.678 19.322 2 16.25 2h-8.5zm8.5 1.5c1.804 0 3.25 1.446 3.25 3.25v8.5c0 1.804-1.446 3.25-3.25 3.25h-8.5c-1.804 0-3.25-1.446-3.25-3.25v-8.5c0-1.804 1.446-3.25 3.25-3.25h8.5zM12 7a5 5 0 100 10 5 5 0 000-10zm0 1.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm4.75-.75a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
