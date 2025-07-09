import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import StepperForm from './StepperForm'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [loginDrawerOpen, setLoginDrawerOpen] = useState(false)
  const [showForgotPassword, setShowForgotPassword] = useState(false)
  const navigate = useNavigate()
  const [showSignupModal, setShowSignupModal] = useState(false);


  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Coordinator', path: '/coordinator' },
    { name: 'Activities', path: '/activities' },
    { name: 'Competition', path: '/competition' },
    {
      name: 'Results',
      subItems: [
        { name: 'Essay Results', path: '/results/essay-results' },
        { name: 'Singing Results', path: '/results/singing-results' }
      ]
    },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' }
  ];

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
            {navItems.map(item =>
              item.subItems ? (
                <div className="relative group" key={item.name}>
                  <span className={`cursor-pointer font-medium ${location.pathname.includes('/results') ? 'text-[#ff680B] font-semibold' : 'text-black hover:text-[#ff680B]'}`}>
                    {item.name}
                  </span>
                  <div className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
                    {item.subItems.map(sub => (
                      <Link
                        key={sub.name}
                        to={sub.path}
                        className="block px-4 py-2 text-sm text-black hover:bg-[#ff680B] hover:text-white"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`font-medium transition ${location.pathname === item.path ? 'text-[#ff680B] font-semibold' : 'text-black hover:text-[#ff680B]'}`}
                >
                  {item.name}
                </Link>
              )
            )}
            <button onClick={toggleDrawer} className="text-white hover:text-[#ff680B] font-medium bg-[#ff680B] hover:bg-white font-semibold border-2 hover:border-[#ff680B] transition ease-in-out px-4 py-2 rounded-md">
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
              {navItems.map(item =>
                item.subItems ? (
                  <div key={item.name} className="space-y-1">
                    <span className="font-medium text-black">{item.name}</span>
                    <div className="ml-4 space-y-1">
                      {item.subItems.map(sub => (
                        <Link
                          key={sub.name}
                          to={sub.path}
                          onClick={() => setMenuOpen(false)}
                          className={`block text-sm ${location.pathname === sub.path ? 'text-[#ff680B] font-semibold' : 'text-black hover:text-[#ff680B]'}`}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    className={`font-medium transition ${location.pathname === item.path ? 'text-[#ff680B] font-semibold' : 'text-black hover:text-[#ff680B]'}`}
                  >
                    {item.name}
                  </Link>
                )
              )}
            </nav>
          </div>
        )}
      </header>
      {/* Login Drawer */}
      {loginDrawerOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Background Overlay */}
          <div
            className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300"
            onClick={() => {
              setLoginDrawerOpen(false)
              setShowForgotPassword(false)
            }}
          ></div>

          {/* Drawer Panel */}
          <div
            className="relative bg-white w-full max-w-sm h-full shadow-lg p-6 transform transition-transform duration-300 translate-x-0"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-[#ff680B]">
                {showForgotPassword ? 'Forgot Password' : 'Login'}
              </h2>
              <button
                onClick={() => {
                  setLoginDrawerOpen(false)
                  setShowForgotPassword(false)
                }}
                className="text-gray-600 hover:text-black"
              >
                <X size={24} />
              </button>
            </div>

            {showForgotPassword ? (
              // Forgot Password Form
              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault()
                  navigate('/dashboard') // on submit, go to dashboard
                }}
              >
                <div>
                  <label className="block mb-1 font-medium">Email</label>
                  <input
                    type="email"
                    className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff680B]"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="flex justify-between space-x-4">
                  <button
                    type="button"
                    className="w-1/2 border border-gray-300 py-2 rounded-md hover:bg-gray-100"
                    onClick={() => {
                      setLoginDrawerOpen(false)
                      setShowForgotPassword(false)
                      navigate('/') // Cancel redirects to home
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="w-1/2 bg-[#ff680B] text-white py-2 rounded-md font-medium hover:bg-[#e65d00]"
                  >
                    Submit
                  </button>
                </div>
              </form>
            ) : (
              // Login Form
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
                  <button
                    type="button"
                    onClick={() => setShowForgotPassword(true)}
                    className="text-sm text-[#ff680B] no-underline hover:underline bg-transparent hover:border-transparent"
                  >
                    Forgot your password?
                  </button>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#ff680B] text-white py-2 rounded-md font-medium hover:bg-[#e65d00]"
                >
                  Login
                </button>

                <div className="text-center text-sm mt-4">
                  Don’t have an account?{' '}
                  <a href="#" onClick={(e) => {
                    e.preventDefault();
                    setShowSignupModal(true);
                  }} className="text-[#ff680B] font-medium hover:underline">Sign up</a>
                </div>
              </form>
            )}

            <div className="text-center text-xs text-gray-500 mt-6">
              Designed by Vedant Innovision
            </div>
          </div>
        </div>
      )}
      {/* Signup Modal */}
      {showSignupModal && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center"
          onClick={() => setShowSignupModal(false)} // close on background click
        >
          <div
            className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-lg shadow-lg relative"
            onClick={(e) => e.stopPropagation()} // prevent modal close when clicked inside
          >
            {/* Close Button */}
            <button
              onClick={() => setShowSignupModal(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-black"
            >
              <X size={24} />
            </button>

            {/* Stepper Form */}
            <StepperForm />
          </div>
        </div>
      )}
    </>
  )
}