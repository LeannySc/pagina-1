import { motion } from 'framer-motion'

export default function Hero() {
  const handleClick = (e) => {
    e.preventDefault()
    const el = document.querySelector('#nosotros')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1920&q=80)',
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-dark/65" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 text-[11px] font-medium uppercase tracking-widest-plus text-cream/60"
        >
          Educación &middot; Cultura &middot; Comunidad
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-serif text-4xl font-semibold leading-tight text-cream md:text-6xl lg:text-7xl"
        >
          Educación Bilingüe
          <br />
          <span className="italic text-accent">Para un Futuro</span>
          <br />
          Sin Fronteras
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mx-auto mt-8 max-w-xl text-base font-light leading-relaxed text-cream/70 md:text-lg"
        >
          Transformamos vidas a través del poder de los idiomas, conectando
          culturas y abriendo puertas a nuevas oportunidades.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-10"
        >
          <a href="#nosotros" onClick={handleClick} className="btn-primary">
            Conoce Más
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="h-10 w-[1px] bg-gradient-to-b from-cream/40 to-transparent"
        />
      </motion.div>
    </section>
  )
}
