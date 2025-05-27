import { Mail, MapPin, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import logoOm from "../assets/matrumandir-logo.svg";

function Footer() {
  return (
    <footer className="bg-[#2c333a] text-white">
      <div className="2xl:container mx-auto px-6 py-12 flex flex-col md:flex-row justify-between gap-12">
        
        {/* Column 1: Logo and Contact Info */}
        <div className="flex-1 space-y-6">
          <img src={logoOm} alt="Om Logo" className="w-10" />
          <div className="flex items-start gap-3">
            <MapPin className="mt-1" />
            <p>
              Sector 25, Pradhikaran, Nigdi, Pimpri-Chinchwad,<br />
              Pune, Maharashtra 411044
            </p>
          </div>
            <div className="flex items-center gap-3">
                <Phone />
                <a href="tel:+912027168000" className="text-white w-fit hover:text-[#ff680B]">
                    +91 20 27168000
                </a>
            </div>
            <div className="flex items-center gap-3">
                <Mail />
                <a href="mailto:info@jpnvnigdi.org" className="text-white w-fit hover:text-[#ff680B]">
                    info@jpnvnigdi.org
                </a>
            </div>
        </div>

        {/* Column 2: Quick Links + Social Links */}
        <div className="flex-1 flex flex-col md:flex-row gap-12">
          
          {/* Quick Links */}
          <div className="space-y-4 w-7/12 flex flex-col">
            <h3 className="text-xl font-semibold border-b w-fit pb-1">Quick Links</h3>
            <div className="flex flex-col gap-2">
                <Link to="/" className="text-white w-fit hover:text-[#ff680B]">Home</Link>
                <Link to="/about" className="text-white w-fit hover:text-[#ff680B]">About Us</Link>
                <Link to="/coordinator" className="text-white w-fit hover:text-[#ff680B]">Coordinator</Link>
                <Link to="/programs" className="text-white w-fit hover:text-[#ff680B]">Programs</Link>
                <Link to="/competition" className="text-white w-fit hover:text-[#ff680B]">Competition</Link>
                <Link to="/contact" className="text-white w-fit hover:text-[#ff680B]">Contact</Link>
            </div>
          </div>

          {/* Follow Us */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold border-b w-fit pb-1">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full border border-white hover:border-[#ff680B] hover:bg-[#ff680B] text-white hover:text-white transition">
                <FaFacebookF />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full border border-white hover:border-[#ff680B] hover:bg-[#ff680B] text-white hover:text-white transition">
                <FaInstagram />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full border border-white hover:border-[#ff680B] hover:bg-[#ff680B] text-white hover:text-white transition">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#212121] py-4 text-center text-sm">
        Powered by{" "}
        <a
          href="https://technossplash.com" className="text-white w-fit hover:text-[#ff680B] underline hover:no-underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Technossplash Solutions Private Limited
        </a>
      </div>
    </footer>
  );
}

export default Footer;