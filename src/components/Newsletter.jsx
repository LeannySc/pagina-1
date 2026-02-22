import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setEmail('')
  }

  return (
    <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1920&q=80)',
        }}
      />
      <div className="absolute inset-0 bg-dark/80" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto max-w-xl px-6 text-center"
      >
        <p className="mb-4 text-[11px] font-medium uppercase tracking-widest-plus text-accent">
          Mantente Informado
        </p>

        <h2 className="font-serif text-3xl font-semibold text-cream md:text-4xl">
          No Te Pierdas Nada
        </h2>

        <p className="mt-4 text-sm font-light leading-relaxed text-cream/50">
          Suscríbete a nuestro boletín para recibir noticias, eventos y
          actualizaciones sobre nuestros programas educativos.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 flex gap-0">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Tu correo electrónico"
            required
            className="flex-1 border border-cream/20 bg-transparent px-5 py-3.5 text-sm text-cream placeholder-cream/30 outline-none transition-colors focus:border-accent"
          />
          <button
            type="submit"
            className="flex items-center gap-2 border border-cream/20 border-l-0 bg-accent/10 px-6 py-3.5 text-[11px] font-medium uppercase tracking-widest-plus text-accent transition-all duration-500 hover:bg-accent hover:text-dark"
          >
            <Send size={14} />
            <span className="hidden sm:inline">Suscribirse</span>
          </button>
        </form>
      </motion.div>
    </section>
  )
}
