import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

export default function Donate() {
  return (
    <section className="section-padding bg-dark-100">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-12 md:flex-row md:gap-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="relative h-[50vh] w-full overflow-hidden md:h-[60vh] md:w-1/2"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  'url(https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80)',
              }}
            />
            <div className="absolute inset-0 bg-dark/15" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2"
          >
            <div className="mb-6 flex items-center gap-3">
              <Heart size={16} className="text-accent" />
              <span className="text-[11px] font-medium uppercase tracking-widest-plus text-accent">
                Haz la Diferencia
              </span>
            </div>

            <h2 className="font-serif text-3xl font-semibold leading-snug text-cream md:text-4xl lg:text-5xl">
              El Regalo de la
              <br />
              <span className="italic text-accent">Educación</span>
            </h2>

            <p className="mt-6 text-base font-light leading-relaxed text-cream/55">
              Tu donación ayuda a financiar becas para estudiantes, materiales
              educativos, y la expansión de nuestros programas a nuevas
              comunidades. Cada aporte, sin importar su tamaño, transforma
              vidas.
            </p>

            <div className="mt-4 grid grid-cols-3 gap-4">
              {['2,500+', '15', '98%'].map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="font-serif text-2xl font-semibold text-accent md:text-3xl">
                    {stat}
                  </p>
                  <p className="mt-1 text-[10px] font-medium uppercase tracking-widest text-cream/40">
                    {['Becas otorgadas', 'Comunidades', 'Satisfacción'][i]}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <a href="#contacto" className="btn-accent">
                Donar Ahora
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
