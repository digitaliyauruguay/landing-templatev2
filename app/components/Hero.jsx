"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="pt-28 pb-16 bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* TEXTO */}
        <motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
            Recupera tu sonrisa con 
            <span className="text-violet-600"> confianza</span>
          </h1>

          <p className="mt-4 text-sm uppercase tracking-widest text-violet-500 font-medium">
  Clínica odontológica de confianza
</p>

          <p className="mt-6 text-lg text-gray-600">
            En Clínica Sonrisa combinamos tecnología avanzada con atención personalizada para darte resultados reales, cómodos y duraderos.
          </p>

          {/* BOTONES */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="#contacto"
              className="bg-violet-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-violet-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              Reservar consulta ahora
            </a>

            <a
              href="#servicios"
              className="border border-violet-600 text-violet-600 px-6 py-3 rounded-lg hover:bg-white-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              Ver servicios
            </a>
          </div>

          {/* MINI BENEFICIOS */}
          <div className="mt-8 flex flex-col sm:flex-row gap-6 text-sm text-gray-500">
            <span>✔ Atención personalizada</span>
            <span>✔ Tecnología moderna</span>
            <span>✔ Resultados garantizados</span>
          </div>
        </motion.div>

        {/* IMAGEN */}
        <motion.div
  initial={{ opacity: 0, x: 60 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
  className="relative"
>
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-violet-200 rounded-full blur-2xl opacity-50"></div>

          <img
  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5"
  alt="Dentista atendiendo paciente"
  className="rounded-2xl shadow-lg object-cover w-full h-[400px]"
/>
        </motion.div>

      </div>
    </section>
  );
}