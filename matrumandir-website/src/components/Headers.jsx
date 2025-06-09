import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [loginDrawerOpen, setLoginDrawerOpen] = useState(false)

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Coordinator', path: '/coordinator' },
    { name: 'Programs', path: '/programs' },
    { name: 'Competition', path: '/competition' },
    { name: 'Contact', path: '/contact' }
  ]

  const toggleDrawer = () => {
    setLoginDrawerOpen(!loginDrawerOpen)
  }

  return (
    <>
      <header className="bg-white shadow-md fixed top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-[#ff680B]">
            <img src="src\assets\matrumandir-logo.svg" alt="" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
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
          <button
              onClick={toggleDrawer}
              className="text-white hover:text-[#ff680B] font-medium bg-[#ff680B] hover:bg-white font-semibold border-2 hover:border-[#ff680B] transition ease-in-out"
            >
              Login
            </button>
        </nav>

        {/* Mobile Login Button + Hamburger */}
        <div className="md:hidden space-x-6 flex items-center">
          <button
            onClick={toggleDrawer}
            className="text-[#ff680B] px-3 py-3.5 rounded-md text-sm"
          >
            Login
          </button>

          <button
            className="text-[#ff680B]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
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
    {/* Login Drawer */}
<div
  className={`fixed inset-0 z-50 flex justify-end transition-opacity duration-300 ${
    loginDrawerOpen ? 'bg-black bg-opacity-50 visible' : 'bg-transparent invisible'
  }`}
  onClick={toggleDrawer} // Close on background click
>
  <div
    className={`bg-white w-full max-w-sm h-full shadow-lg p-6 transform transition-transform duration-300 ${
      loginDrawerOpen ? 'translate-x-0' : 'translate-x-full'
    }`}
    onClick={(e) => e.stopPropagation()} // Prevent closing on drawer click
  >
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-semibold text-[#ff680B]">Login</h2>
      <button onClick={toggleDrawer} className="text-gray-600 hover:text-black">
        <X size={24} />
      </button>
    </div>

    <form className="space-y-4">
      <div>
        <label className="block mb-1 font-medium">Email</label>
        <input
          type="email"
          className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff680B]"
          placeholder="Enter your email"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Password</label>
        <input
          type="password"
          className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff680B]"
          placeholder="Enter your password"
        />
      </div>

      <div className="text-right">
        <a href="#" className="text-sm text-[#ff680B] hover:underline">Forgot your password?</a>
      </div>

      <button
        type="submit"
        className="w-full bg-[#ff680B] text-white py-2 rounded-md font-medium hover:bg-[#e65d00]"
      >
        Login
      </button>

      <div className="text-center text-sm mt-4">
        Don't have an account?{' '}
        <a href="#" className="text-[#ff680B] font-medium hover:underline">Sign up</a>
      </div>
    </form>

    <div className="text-center text-xs text-gray-500 mt-6">
      Designed by Vedant Innovision
    </div>
  </div>
</div>
    </>
  )
}