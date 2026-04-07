"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

const handleChange = (e) => {
  setForm({
    ...form,
    [e.target.name]: e.target.value,
  });

  // LIMPIAR MENSAJES AL ESCRIBIR
  setError("");
  setSuccess("");
};

  const handleSubmit = (e) => {
    e.preventDefault();

    // VALIDACIÓN
    if (!form.nombre || !form.email || !form.mensaje) {
      setError("Por favor completa todos los campos");
      setSuccess("");
      return;
    }

    if (!form.email.includes("@")) {
      setError("Email inválido");
      setSuccess("");
      return;
    }

    // SIMULACIÓN ENVÍO
    setError("");
    setSuccess("Mensaje enviado correctamente. Te contactaremos pronto.");

    // LIMPIAR FORM
    setForm({
      nombre: "",
      email: "",
      mensaje: "",
    });
  };

  return (
    <section id="contacto" className="py-24 md:py-32 bg-white">
      <div className="w-16 h-1 bg-violet-600 mx-auto mb-6 rounded-full"></div>
      <div className="max-w-3xl mx-auto px-6">

        {/* TÍTULO */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            Contáctanos
          </h2>
          <p className="mt-4 text-gray-600">
            Agenda tu consulta o envíanos tu duda
          </p>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-50 p-8 rounded-2xl shadow-md flex flex-col gap-5"
        >

         {/* NOMBRE */}
<div className="flex flex-col">
  <label className="text-sm font-medium text-gray-700 mb-1">
    Nombre
  </label>
  <input
    type="text"
    name="nombre"
    placeholder="Tu nombre"
    value={form.nombre}
    onChange={handleChange}
    className="p-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500"
  />
</div>

{/* EMAIL */}
<div className="flex flex-col">
  <label className="text-sm font-medium text-gray-700 mb-1">
    Email
  </label>
  <input
    type="email"
    name="email"
    placeholder="tu@email.com"
    value={form.email}
    onChange={handleChange}
    className="p-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500"
  />
</div>

{/* MENSAJE */}
<div className="flex flex-col">
  <label className="text-sm font-medium text-gray-700 mb-1">
    Mensaje
  </label>
  <textarea
    name="mensaje"
    placeholder="Escribe tu mensaje..."
    value={form.mensaje}
    onChange={handleChange}
    className="p-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-400 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-violet-500"
  ></textarea>
</div>

          {/* MENSAJES */}
          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}

          {success && (
            <p className="text-green-500 text-sm">{success}</p>
          )}

          {/* BOTÓN */}
          <button
            type="submit"
            className="bg-violet-600 text-white py-3 rounded-lg hover:bg-violet-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            Enviar
          </button>
        </form>

      </div>
    </section>
  );
}