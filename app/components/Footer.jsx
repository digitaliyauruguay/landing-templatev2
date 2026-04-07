import { MapPin, Phone, Mail} from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

        {/* MARCA */}
        <div>
          <h3 className="text-xl font-bold text-white tracking-tight">
            Clínica Sonrisa
          </h3>

          <p className="mt-4 text-sm text-gray-400 leading-relaxed">
            Atención odontológica moderna con tecnología avanzada y un enfoque personalizado para cada paciente.
          </p>
        </div>

        {/* CONTACTO */}
        <div>
          <h4 className="text-white font-semibold mb-4 tracking-tight">
            Contacto
          </h4>

          <ul className="space-y-3 text-sm">

            <li className="flex items-center gap-3 hover:text-violet-400 transition">
              <a
  href="https://www.google.com/maps/search/?api=1&query=Montevideo+Uruguay"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-3 hover:text-violet-400 transition"
>
  <MapPin size={18} className="text-violet-500" />
  Montevideo, Uruguay
</a>
            </li>

            <li className="flex items-center gap-3 hover:text-violet-400 transition">
              <a
  href="tel:+598123456789"
  className="flex items-center gap-3 hover:text-violet-400 transition"
>
  <Phone size={18} className="text-violet-500" />
  +598 123 456 789
</a>
            </li>

            <li className="flex items-center gap-3 hover:text-violet-400 transition">
              <a
  href="mailto:contacto@clinica.com"
  className="flex items-center gap-3 hover:text-violet-400 transition"
>
  <Mail size={18} className="text-violet-500" />
  contacto@clinica.com
</a>
            </li>

          </ul>
        </div>

        {/* REDES */}
        <div>
          <h4 className="text-white font-semibold mb-4 tracking-tight">
            Síguenos
          </h4>

          <div className="flex gap-4">

            <a
              href="#"
              className="p-3 bg-gray-900 rounded-lg hover:bg-violet-600 transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="p-3 bg-gray-900 rounded-lg hover:bg-violet-600 transition"
            >
              <FaInstagram />
            </a>

          </div>

        </div>

      </div>

      {/* DIVISOR */}
      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-500">
        © 2026 Clínica Sonrisa. Todos los derechos reservados.
      </div>
    </footer>
  );
}