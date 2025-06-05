// src/app/terminos/page.tsx

import React from "react";

export default function TerminosYCondiciones() {
  return (
    <main className="bg-white text-gray-800 py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-blue-800 mb-6">
          Términos y Condiciones
        </h1>

        <section className="space-y-4">
          <p>
            Bienvenido a nuestra aplicación (“Sitio”, “nosotros”, “nuestro”). Al
            acceder o utilizar este Sitio, usted acepta cumplir y regirse por
            los siguientes términos y condiciones (“Términos”). Si no está de
            acuerdo con alguno de estos Términos, por favor no use este Sitio.
          </p>

          <h2 className="text-2xl font-semibold text-blue-700 mt-8">
            1. Uso del Sitio
          </h2>
          <p>
            Usted se compromete a usar el Sitio únicamente para los fines
            permitidos por estos Términos y la ley aplicable. No deberá:
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>
              Modificar, reproducir o distribuir contenido sin autorización.
            </li>
            <li>Interferir con el funcionamiento normal del Sitio.</li>
            <li>
              Intentar obtener acceso no autorizado a cuentas, sistemas o redes.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-blue-700 mt-8">
            2. Registro y Seguridad
          </h2>
          <p>
            Para acceder a ciertas funciones, deberá registrarse con información
            veraz y completa. Usted es responsable de mantener la
            confidencialidad de su cuenta y contraseña, así como de todas las
            actividades que ocurran bajo su cuenta.
          </p>

          <h2 className="text-2xl font-semibold text-blue-700 mt-8">
            3. Propiedad Intelectual
          </h2>
          <p>
            Todo el contenido del Sitio, incluidos textos, gráficos, logotipos,
            iconos, imágenes y software, es propiedad de nosotros o de nuestros
            licenciantes y está protegido por leyes de derechos de autor, marcas
            registradas y otras leyes de propiedad intelectual. No podrá
            utilizar, reproducir o distribuir dicho contenido sin nuestra
            autorización expresa por escrito.
          </p>

          <h2 className="text-2xl font-semibold text-blue-700 mt-8">
            4. Privacidad y Datos Personales
          </h2>
          <p>
            El tratamiento de sus datos personales se regirá por nuestra
            <a
              href="/politica-privacidad"
              className="text-blue-800 underline ml-1"
            >
              Política de Privacidad
            </a>
            . Al aceptar estos Términos, también acepta el uso y tratamiento de
            sus datos conforme a dicha política.
          </p>

          <h2 className="text-2xl font-semibold text-blue-700 mt-8">
            5. Limitación de Responsabilidad
          </h2>
          <p>En la medida permitida por la ley, no seremos responsables por:</p>
          <ul className="list-disc list-inside ml-4">
            <li>
              Daños directos, indirectos, incidentales, especiales o
              consecuentes derivados de su uso del Sitio.
            </li>
            <li>
              Errores, interrupciones o fallos técnicos que impidan el acceso al
              Sitio.
            </li>
            <li>
              Pérdidas de datos, beneficios o cualquier otro perjuicio que
              resulte del uso o imposibilidad de uso del Sitio.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-blue-700 mt-8">
            6. Enlaces a Sitios de Terceros
          </h2>
          <p>
            Este Sitio puede contener enlaces a sitios web de terceros. Dichos
            enlaces se proporcionan únicamente como referencia. No garantizamos
            ni avalamos la precisión, pertinencia o calidad de la información
            contenida en esos sitios de terceros y no asumimos ninguna
            responsabilidad por sus contenidos.
          </p>

          <h2 className="text-2xl font-semibold text-blue-700 mt-8">
            7. Modificaciones de los Términos
          </h2>
          <p>
            Nos reservamos el derecho de modificar estos Términos en cualquier
            momento. Cualquier cambio entrará en vigor cuando se publique la
            versión revisada en este Sitio. Su uso continuado del Sitio después
            de la publicación de los cambios constituye su aceptación de los
            mismos.
          </p>

          <h2 className="text-2xl font-semibold text-blue-700 mt-8">
            8. Terminación
          </h2>
          <p>
            Podemos suspender o cancelar su acceso al Sitio en cualquier momento
            si considera que ha violado cualquiera de estos Términos o por
            razones de mantenimiento sin previo aviso.
          </p>

          <h2 className="text-2xl font-semibold text-blue-700 mt-8">
            9. Legislación Aplicable y Jurisdicción
          </h2>
          <p>
            Estos Términos se regirán por las leyes del Estado de Maryland,
            Estados Unidos. Cualquier disputa derivada de los mismos se someterá
            a los tribunales competentes de dicha jurisdicción.
          </p>

          <h2 className="text-2xl font-semibold text-blue-700 mt-8">
            10. Contacto
          </h2>
          <p>
            Si tiene preguntas sobre estos Términos y Condiciones, puede
            contactarnos en:
          </p>
          <p className="mt-2">
            <strong>Email:</strong>{" "}
            <a
              href="mailto:raicon.media@gmail.com"
              className="text-blue-800 underline"
            >
              raicon.media@gmail.com
            </a>
          </p>
          <p className="mt-1">
            <strong>Teléfono:</strong>{" "}
            <a href="tel:+12406022365" className="text-blue-800 underline">
              (240) 602-2365
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}
