import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Instagram, Facebook, Twitter, Menu, X } from 'lucide-react'
import useScrollDirection from '../hooks/useScrollDirection'

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Programas', href: '#programas' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const { scrollDirection, scrollY } = useScrollDirection()
  const [mobileOpen, setMobileOpen] = useState(false)

  const hidden = scrollDirection === 'down' && scrollY > 100

  const handleClick = (e, href) => {
    e.preventDefault()
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        animate={{ y: hidden ? '-100%' : '0%' }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
          scrollY > 50 ? 'bg-dark/95 backdrop-blur-md' : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-12">
          {/* Logo */}
          <a
            href="#inicio"
            onClick={(e) => handleClick(e, '#inicio')}
            className="font-serif text-xl font-semibold tracking-wide text-cream md:text-2xl"
          >
            Fundación Bilingüe
          </a>

          {/* Center Nav — Desktop */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="text-[11px] font-medium uppercase tracking-widest-plus text-cream/70 transition-colors duration-300 hover:text-cream"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Icons — Desktop */}
          <div className="hidden items-center gap-4 md:flex">
            <a href="#" className="text-cream/50 transition-colors hover:text-cream" aria-label="Instagram">
              <Instagram size={16} />
            </a>
            <a href="#" className="text-cream/50 transition-colors hover:text-cream" aria-label="Facebook">
              <Facebook size={16} />
            </a>
            <a href="#" className="text-cream/50 transition-colors hover:text-cream" aria-label="Twitter">
              <Twitter size={16} />
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-cream md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-dark/98 backdrop-blur-lg md:hidden"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="font-serif text-2xl font-medium text-cream"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
            <div className="mt-12 flex items-center gap-6">
              <a href="#" className="text-cream/50 transition-colors hover:text-cream" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-cream/50 transition-colors hover:text-cream" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-cream/50 transition-colors hover:text-cream" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
