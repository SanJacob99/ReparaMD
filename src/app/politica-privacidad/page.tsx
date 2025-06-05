// src/app/politica-privacidad/page.tsx

import React from "react";

export default function PoliticaPrivacidad() {
  return (
    <main className="bg-white text-gray-800 py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-blue-800 mb-6">
          Política de Privacidad
        </h1>

        <section className="space-y-4">
          <p>
            Esta Política de Privacidad describe cómo recopilamos, usamos,
            compartimos y protegemos su información personal cuando usted visita
            o utiliza nuestro sitio web (“Sitio”, “nosotros”, “nuestro”). Al
            acceder o usar este Sitio, usted acepta las prácticas descritas en
            esta Política. Si no está de acuerdo con alguna parte, por favor no
            utilice nuestro Sitio.
          </p>

          <h2 className="text-2xl font-semibold text-blue-700 mt-8">
            1. Información que Recopilamos
          </h2>
          <p>Podemos recopilar distintos tipos de información, incluyendo:</p>
          <ul className="list-disc list-inside ml-4">
            <li>
              <strong>Datos que usted proporciona:</strong> Nombre, correo
              electrónico, número de teléfono y cualquier otro dato que nos
              proporcione al completar formularios de contacto, registro o
              encuestas.
            </li>
            <li>
              <strong>Información de uso:</strong> Páginas visitadas, tiempo de
              permanencia, clics y navegación dentro del Sitio, obtenida
              mediante cookies y tecnologías similares.
            </li>
            <li>
              <strong>Datos técnicos:</strong> Dirección IP, tipo de navegador,
              sistema operativo, proveedor de servicios de Internet y otras
              métricas de conexión.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-blue-700 mt-8">
            2. Cómo Usamos Su Información
          </h2>
          <p>Utilizamos la información recopilada para:</p>
          <ul className="list-disc list-inside ml-4">
            <li>Responder a sus solicitudes y consultas.</li>
            <li>Proveer, mantener y mejorar el Sitio y nuestros servicios.</li>
            <li>
              Enviarle comunicaciones promocionales y boletines (con su
              consentimiento, cuando sea requerido).
            </li>
            <li>Analizar tendencias y estadísticas de uso.</li>
            <li>Proteger la seguridad e integridad del Sitio.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-blue-700 mt-8">
            3. Cookies y Tecnologías Similares
          </h2>
          <p>Utilizamos cookies, píxeles y almacenamientos locales para:</p>
          <ul className="list-disc list-inside ml-4">
            <li>Recordar sus preferencias de idioma y configuración.</li>
            <li>
              Analizar el tráfico y comportamiento en el Sitio (por ejemplo,
              Google Analytics).
            </li>
            <li>
              Ofrecer publicidad dirigida basada en sus intereses (con su
              consentimiento, cuando aplique).
            </li>
          </ul>
          <p>
            Usted puede configurar su navegador para rechazar cookies o eliminar
            las que ya ha aceptado. Sin embargo, esto puede afectar la
            funcionalidad del Sitio.
          </p>

          <h2 className="text-2xl font-semibold text-blue-700 mt-8">
            4. Compartir Información con Terceros
          </h2>
          <p>
            No vendemos ni alquilamos su información personal a terceros.
            Podemos compartir datos con:
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>
              <strong>Proveedores de servicios:</strong> Empresas que nos ayudan
              a operar el Sitio (hosting, análisis, correo electrónico), bajo
              acuerdos de confidencialidad.
            </li>
            <li>
              <strong>Obligaciones legales:</strong> Autoridades gubernamentales
              o fiscales cuando sea requerido por ley o para proteger derechos
              legales.
            </li>
            <li>
              <strong>Socios estratégicos:</strong> Con su consentimiento, para
              ofrecerle promociones o servicios conjuntos.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-blue-700 mt-8">
            5. Seguridad de los Datos
          </h2>
          <p>
            Implementamos medidas técnicas y organizativas razonables para
            proteger su información contra acceso no autorizado, alteración,
            divulgación o destrucción. Sin embargo, ningún método de transmisión
            por Internet es completamente seguro. No podemos garantizar la
            seguridad absoluta.
          </p>

          <h2 className="text-2xl font-semibold text-blue-700 mt-8">
            6. Retención de Datos
          </h2>
          <p>
            Conservamos su información personal mientras sea necesario para
            cumplir con los fines descritos en esta Política, a menos que la ley
            exija un periodo de retención más largo. Cuando ya no sea necesaria,
            la eliminaremos o anonimizarla de forma segura.
          </p>

          <h2 className="text-2xl font-semibold text-blue-700 mt-8">
            7. Sus Derechos
          </h2>
          <p>
            Según las leyes aplicables, puede tener los siguientes derechos con
            respecto a su información personal:
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>Acceder y corregir sus datos.</li>
            <li>Solicitar la eliminación de sus datos.</li>
            <li>Restringir u oponerse al procesamiento de sus datos.</li>
            <li>
              Solicitar la portabilidad de sus datos a otro servicio similar.
            </li>
            <li>Retirar su consentimiento en cualquier momento.</li>
          </ul>
          <p>
            Para ejercer estos derechos, contáctenos tal como se indica en la
            sección de “Contacto” al final de este documento.
          </p>

          <h2 className="text-2xl font-semibold text-blue-700 mt-8">
            8. Transferencias Internacionales
          </h2>
          <p>
            Si nos encontramos fuera de su país o envíamos datos a servidores
            ubicados en otra jurisdicción, garantizamos que las transferencias
            cumplen con las leyes de protección de datos aplicables y usamos
            mecanismos estándar (ej. cláusulas contractuales tipo).
          </p>

          <h2 className="text-2xl font-semibold text-blue-700 mt-8">
            9. Enlaces a Otros Sitios
          </h2>
          <p>
            Nuestro Sitio puede contener enlaces a sitios de terceros. No nos
            hacemos responsables de las prácticas de privacidad o contenido de
            esos sitios. Le recomendamos revisar sus políticas antes de
            proporcionar información personal.
          </p>

          <h2 className="text-2xl font-semibold text-blue-700 mt-8">
            10. Cambios en la Política de Privacidad
          </h2>
          <p>
            Podemos modificar esta Política en cualquier momento. Publicaremos
            la versión actualizada en este Sitio con la fecha de última
            actualización. Su uso continuo después de la publicación constituye
            su aceptación de los cambios.
          </p>

          <h2 className="text-2xl font-semibold text-blue-700 mt-8">
            11. Contacto
          </h2>
          <p>
            Si tiene preguntas o solicita ejercer sus derechos, comuníquese con
            nosotros en:
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
