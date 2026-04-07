"use client";
import { Smile } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "../config/site";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-md z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* LOGO + NOMBRE */}
        <div className="flex items-center gap-3">
          <a href="#inicio">
  <div className="w-10 h-10 bg-violet-600 rounded-full flex items-center justify-center shadow-md cursor-pointer transition-all duration-300 hover:scale-110">
    <Smile size={20} className="text-white" strokeWidth={2} />
  </div>
</a>
          <a href="#inicio">
  <h1 className="text-xl font-bold text-gray-900 cursor-pointer transition-all duration-300 hover:text-violet-600 hover:-translate-y-0.5 hover:scale-105">
    {siteConfig.branding.name}
  </h1>
</a>
        </div>

        {/* MENÚ DESKTOP */}
        <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <a href="#" className="hover:text-violet-600 transition">
            {siteConfig.navBarItems.inicio}
          </a>
          <a href="#servicios" className="hover:text-violet-600 transition">
            {siteConfig.navBarItems.services}
          </a>
          <a href="#sobre" className="hover:text-violet-600 transition">
            {siteConfig.navBarItems.about}
          </a>
          <a href="#contacto" className="hover:text-violet-600 transition">
            {siteConfig.navBarItems.contact}
          </a>
        </nav>

        {/* BOTÓN WHATSAPP */}
        <div className="hidden md:block">
          <a href="https://wa.me/598123456789?text=Hola%20quiero%20agendar%20una%20consulta"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-green-500 text-white px-5 py-2 rounded-lg shadow-md hover:bg-green-600 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
  WhatsApp
</a>
        </div>

        {/* BOTÓN MOBILE */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {/* MENÚ MOBILE */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 flex flex-col gap-4 text-gray-700 font-medium">
          <a href="#" onClick={() => setMenuOpen(false)}>
            {siteConfig.navBarItems.inicio}
          </a>
          <a href="#servicios" onClick={() => setMenuOpen(false)}>
            {siteConfig.navBarItems.services}
          </a>
          <a href="#sobre" onClick={() => setMenuOpen(false)}>
            {siteConfig.navBarItems.about}
          </a>
          <a href="#contacto" onClick={() => setMenuOpen(false)}>
            {siteConfig.navBarItems.contact}
          </a>
          <a href="https://wa.me/598123456789?text=Hola%20quiero%20agendar%20una%20consulta"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-green-500 text-white px-5 py-2 rounded-lg shadow-md hover:bg-green-600 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
  WhatsApp
</a>
        </div>
      )}
    </header>
  );
}