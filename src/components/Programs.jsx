import { motion } from 'framer-motion'
import { Languages, Users, Repeat } from 'lucide-react'

const programs = [
  {
    icon: Languages,
    title: 'Inglés para Niños',
    description:
      'Programa inmersivo diseñado para niños de 4 a 12 años. A través del juego, la música y la creatividad, los más pequeños desarrollan fluidez natural en inglés.',
    image:
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80',
  },
  {
    icon: Users,
    title: 'Español para Extranjeros',
    description:
      'Clases de español como segunda lengua para residentes internacionales. Niveles desde principiante hasta avanzado, con inmersión cultural incluida.',
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80',
  },
  {
    icon: Repeat,
    title: 'Intercambio Cultural',
    description:
      'Programa de intercambio que conecta estudiantes de diferentes países. Experiencias de vida compartidas que forjan lazos interculturales duraderos.',
    image:
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Programs() {
  return (
    <section id="programas" className="section-padding bg-dark-100">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-[11px] font-medium uppercase tracking-widest-plus text-accent">
            Lo que hacemos
          </p>
          <h2 className="font-serif text-3xl font-semibold text-cream md:text-5xl">
            Programas Destacados
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid gap-8 md:grid-cols-3"
        >
          {programs.map((program) => {
            const Icon = program.icon
            return (
              <motion.div
                key={program.title}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="group cursor-pointer overflow-hidden bg-dark-200"
              >
                {/* Image */}
                <div className="relative h-72 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${program.image})` }}
                  />
                  <div className="absolute inset-0 bg-dark/30 transition-opacity duration-500 group-hover:bg-dark/10" />
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="mb-4 flex items-center gap-3">
                    <Icon size={18} className="text-accent" />
                    <h3 className="font-serif text-xl font-semibold text-cream">
                      {program.title}
                    </h3>
                  </div>

                  <p className="text-sm font-light leading-relaxed text-cream/55">
                    {program.description}
                  </p>

                  <div className="mt-6">
                    <span className="text-[11px] font-medium uppercase tracking-widest-plus text-accent transition-colors duration-300 group-hover:text-accent-light">
                      Ver Más →
                    </span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
