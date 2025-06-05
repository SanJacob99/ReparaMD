// src/components/Header.tsx
"use client"; // ← This marks the entire file as a Client Component
import heroimg from "../media/HeroImage4k.png";

export default function hero() {
  return (
    <section
      className="relative flex items-center justify-center text-center h-screen bg-cover bg-center pt-16 
             sm:bg-[url('/images/hero-640.jpg')] 
             md:bg-[url('/images/hero-1024.jpg')] 
             lg:bg-[url('/images/hero-1920.jpg')] 
             xl:bg-[url('/images/hero-2560.jpg')]"
      style={{
        backgroundImage: `url(${heroimg.src})`,
      }}
    >
      <div className="absolute inset-0 bg-blue-800 opacity-50"></div>
      <div className="relative z-10 max-w-3xl px-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
          Reparación de Laptops y Computadoras en Maryland
        </h1>
        <p className="mt-4 text-lg text-gray-100">
          Diagnóstico desde <span className="font-semibold">$20</span>, formateo
          e instalación de SO desde <span className="font-semibold">$50</span>.
          Servicio a domicilio gratis dentro de 10 millas.
        </p>
        <a
          href="tel:+12406022365"
          className="mt-6 inline-block bg-white text-blue-800 px-6 py-3 rounded-2xl font-semibold transition hover:bg-blue-100"
        >
          ¡Llámanos Ahora! (240) 602-2365
        </a>
      </div>
    </section>
  );
}
