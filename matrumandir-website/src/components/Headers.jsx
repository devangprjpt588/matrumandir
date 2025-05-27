import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Coordinator', path: '/coordinator' },
    { name: 'Programs', path: '/programs' },
    { name: 'Competition', path: '/competition' },
    { name: 'Contact', path: '/contact' }
  ]

  return (
    <header className="bg-white shadow-md fixed top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-[#ff680B]">
            <img src="src\assets\matrumandir-logo.svg" alt="" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map(item => (
            <Link
              key={item.name}
              to={item.path}
              className={`font-medium transition ${
  location.pathname === item.path
    ? 'text-[#ff680B] font-semibold'
    : 'text-black hover:text-[#ff680B]'
}`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#ff680B]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 bg-white">
          <nav className="flex flex-col space-y-2">
            {navItems.map(item => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-medium transition ${
  location.pathname === item.path
    ? 'text-[#ff680B] font-semibold'
    : 'text-black hover:text-[#ff680B]'
}`}
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}