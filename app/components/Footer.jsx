import { MapPin, Phone, Mail} from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { siteConfig } from "../config/site";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

        {/* MARCA */}
        <div>
          <h3 className="text-xl font-bold text-violet-600 tracking-tight">
            {siteConfig.branding.name}
          </h3>

          <p className="mt-4 text-sm text-gray-400 leading-relaxed">
            {siteConfig.footer.description}
          </p>
        </div>

        {/* CONTACTO */}
        <div>
          <h4 className="text-violet-600 font-semibold mb-4 tracking-tight">
            {siteConfig.footer.contact.contactText}
          </h4>

          <ul className="space-y-3 text-sm">

            <li className="flex items-center gap-3 hover:text-violet-400 transition">
              <a
  href={siteConfig.footer.contact.gMapURL}
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-3 hover:text-violet-400 transition"
>
  <MapPin size={18} className="text-violet-500" />
  {siteConfig.footer.contact.address}
</a>
            </li>

            <li className="flex items-center gap-3 hover:text-violet-400 transition">
              <a
  href={siteConfig.footer.contact.callPhone}
  className="flex items-center gap-3 hover:text-violet-400 transition"
>
  <Phone size={18} className="text-violet-500" />
  {siteConfig.footer.contact.phone}
</a>
            </li>

            <li className="flex items-center gap-3 hover:text-violet-400 transition">
              <a
  href={siteConfig.footer.contact.sendEmail}
  className="flex items-center gap-3 hover:text-violet-400 transition"
>
  <Mail size={18} className="text-violet-500" />
  {siteConfig.footer.contact.email}
</a>
            </li>

          </ul>
        </div>

        {/* REDES */}
        <div>
          <h4 className="text-violet-600 font-semibold mb-4 tracking-tight">
            {siteConfig.footer.social.socialTitle}
          </h4>

          <div className="flex gap-4">

            <a
              href={siteConfig.footer.social.facebook}
              className="p-3 bg-gray-900 rounded-lg hover:bg-violet-600 transition"
            >
              <FaFacebookF />
            </a>

            <a
              href={siteConfig.footer.social.instagram}
              className="p-3 bg-gray-900 rounded-lg hover:bg-violet-600 transition"
            >
              <FaInstagram />
            </a>

          </div>

        </div>

      </div>

      {/* DIVISOR */}
      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-violet-400">
        {siteConfig.footer.copyright}
      </div>
    </footer>
  );
}