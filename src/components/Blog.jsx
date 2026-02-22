import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const posts = [
  {
    title: 'El Poder del Bilingüismo en la Primera Infancia',
    excerpt:
      'Investigaciones recientes demuestran que los niños expuestos a dos idiomas desde temprana edad desarrollan habilidades cognitivas superiores y mayor flexibilidad mental.',
    date: '15 Feb, 2026',
    category: 'Educación',
    image:
      'https://images.unsplash.com/photo-1544776193-352d25ca82cd?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Historias de Éxito: De la Comunidad al Mundo',
    excerpt:
      'Conoce a María, Andrés y Sofía — tres jóvenes que gracias a la educación bilingüe han logrado becas internacionales y están construyendo carreras globales.',
    date: '8 Feb, 2026',
    category: 'Testimonios',
    image:
      'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&w=800&q=80',
  },
]

export default function Blog() {
  return (
    <section id="blog" className="section-padding bg-dark">
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
            El Diario
          </p>
          <h2 className="font-serif text-3xl font-semibold text-cream md:text-5xl">
            Noticias &amp; Artículos
          </h2>
        </motion.div>

        {/* Posts Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="group cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${post.image})` }}
                />
                <div className="absolute inset-0 bg-dark/20 transition-opacity duration-500 group-hover:bg-dark/5" />

                {/* Category Badge */}
                <div className="absolute left-6 top-6">
                  <span className="bg-dark/70 px-3 py-1.5 text-[10px] font-medium uppercase tracking-widest-plus text-cream/80 backdrop-blur-sm">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="pt-6">
                <p className="mb-3 text-[11px] font-light uppercase tracking-widest text-cream/40">
                  {post.date}
                </p>

                <h3 className="font-serif text-2xl font-semibold leading-snug text-cream transition-colors duration-300 group-hover:text-accent">
                  {post.title}
                </h3>

                <p className="mt-4 text-sm font-light leading-relaxed text-cream/50">
                  {post.excerpt}
                </p>

                <div className="mt-5 flex items-center gap-2 text-accent">
                  <span className="text-[11px] font-medium uppercase tracking-widest-plus">
                    Leer Más
                  </span>
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
