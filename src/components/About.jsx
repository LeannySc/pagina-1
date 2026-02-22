import { motion } from 'framer-motion'
import { BookOpen, Globe } from 'lucide-react'

const blocks = [
  {
    id: 'historia',
    icon: BookOpen,
    tag: 'Nuestra Historia',
    title: 'Más de una Década Transformando Vidas',
    text: 'Desde 2012, hemos trabajado incansablemente para llevar educación bilingüe de calidad a comunidades que más lo necesitan. Lo que comenzó como un pequeño programa de inglés en un centro comunitario, hoy se ha convertido en una red de programas educativos que impactan a miles de familias.',
    image:
      'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Estudiantes en aula bilingüe',
  },
  {
    id: 'impacto',
    icon: Globe,
    tag: 'Nuestro Impacto',
    title: 'Conectando Culturas, Construyendo Puentes',
    text: 'Más de 5,000 estudiantes han pasado por nuestros programas. Nuestro enfoque holístico no solo enseña idiomas, sino que fomenta el entendimiento cultural, la empatía y las habilidades necesarias para prosperar en un mundo globalizado.',
    image:
      'https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Intercambio cultural entre estudiantes',
  },
]

export default function About() {
  return (
    <section id="nosotros" className="bg-dark">
      {blocks.map((block, index) => {
        const isReversed = index % 2 !== 0
        const Icon = block.icon

        return (
          <div
            key={block.id}
            className={`flex flex-col ${
              isReversed ? 'md:flex-row-reverse' : 'md:flex-row'
            } min-h-[70vh] items-stretch`}
          >
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: isReversed ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative min-h-[50vh] w-full md:w-1/2"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${block.image})` }}
              />
              <div className="absolute inset-0 bg-dark/20" />
            </motion.div>

            {/* Content */}
            <div className="flex w-full items-center px-8 py-16 md:w-1/2 md:px-16 lg:px-24">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="max-w-lg"
              >
                <div className="mb-6 flex items-center gap-3">
                  <Icon size={16} className="text-accent" />
                  <span className="text-[11px] font-medium uppercase tracking-widest-plus text-accent">
                    {block.tag}
                  </span>
                </div>

                <h2 className="font-serif text-3xl font-semibold leading-snug text-cream md:text-4xl">
                  {block.title}
                </h2>

                <p className="mt-6 text-base font-light leading-relaxed text-cream/60">
                  {block.text}
                </p>

                <div className="mt-8">
                  <a href="#programas" className="btn-accent">
                    Descubrir
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        )
      })}
    </section>
  )
}
