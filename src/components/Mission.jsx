import { motion } from 'framer-motion'

export default function Mission() {
  return (
    <section className="section-padding bg-dark-100">
      <div className="mx-auto max-w-4xl text-center">
        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-12 h-[1px] w-16 origin-center bg-accent"
        />

        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-2xl font-normal italic leading-relaxed text-cream/90 md:text-3xl lg:text-4xl"
        >
          "Creemos que cada persona merece la oportunidad de comunicarse sin
          barreras. El bilingüismo no es un privilegio, es un derecho que
          transforma comunidades enteras."
        </motion.blockquote>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8"
        >
          <p className="text-xs font-medium uppercase tracking-widest-plus text-accent">
            Nuestra Misión
          </p>
        </motion.div>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mx-auto mt-12 h-[1px] w-16 origin-center bg-accent"
        />
      </div>
    </section>
  )
}
