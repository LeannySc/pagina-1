import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react'

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Programas', href: '#programas' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Footer() {
  const handleClick = (e, href) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer id="contacto" className="border-t border-cream/5 bg-dark px-6 py-16 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-semibold text-cream">
              Fundación Bilingüe
            </h3>
            <p className="mt-4 max-w-xs text-sm font-light leading-relaxed text-cream/40">
              Transformando vidas a través de la educación bilingüe desde 2012.
              Conectamos culturas, construimos puentes y abrimos puertas.
            </p>

            {/* Social */}
            <div className="mt-6 flex items-center gap-4">
              <a href="#" className="text-cream/30 transition-colors hover:text-accent" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-cream/30 transition-colors hover:text-accent" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-cream/30 transition-colors hover:text-accent" aria-label="Twitter">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-6 text-[11px] font-medium uppercase tracking-widest-plus text-cream/60">
              Navegación
            </h4>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className="text-sm font-light text-cream/40 transition-colors hover:text-cream"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-6 text-[11px] font-medium uppercase tracking-widest-plus text-cream/60">
              Contacto
            </h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-accent" />
                <p className="text-sm font-light text-cream/40">
                  Calle Principal 123
                  <br />
                  Ciudad, País
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="shrink-0 text-accent" />
                <a
                  href="mailto:info@fundacionbilingue.org"
                  className="text-sm font-light text-cream/40 transition-colors hover:text-cream"
                >
                  info@fundacionbilingue.org
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="shrink-0 text-accent" />
                <a
                  href="tel:+1234567890"
                  className="text-sm font-light text-cream/40 transition-colors hover:text-cream"
                >
                  +1 (234) 567-890
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 border-t border-cream/5 pt-8 text-center">
          <p className="text-[11px] font-light tracking-wider text-cream/25">
            &copy; 2026 Fundación Bilingüe. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
