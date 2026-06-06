import { motion } from "motion/react";

export function Gallery({ speaking, poster, krishi }: { speaking: string; poster: string; krishi: string }) {
  const shots = [
    { src: speaking, caption: "Speaking · Journey to Career × bdjobs", span: "md:col-span-2 md:row-span-2" },
    { src: poster, caption: "Poster · PTC&B Conference, DU 2026", span: "md:col-span-1 md:row-span-2" },
    { src: krishi, caption: "কৃষিবন্ধু concept poster", span: "md:col-span-3" },
  ];
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <div className="font-mono text-xs text-primary mb-4">// 05 — MOMENTS</div>
          <h2 className="text-4xl md:text-6xl font-bold">From the field & stage</h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-4 auto-rows-[200px] md:auto-rows-[260px]">
          {shots.map((s, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative overflow-hidden rounded-2xl glass group ${s.span}`}
            >
              <img
                src={s.src}
                alt={s.caption}
                onError={(e) => (e.currentTarget.src = "/placeholder.svg")}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <figcaption className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/90 to-transparent text-xs font-mono">
                {s.caption}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}