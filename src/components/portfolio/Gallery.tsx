import { motion } from "motion/react";
import certificateAsset from "@/assets/certificate.jpeg";
import birriFieldAsset from "@/assets/birri-field.jpeg";
import careerAsset from "@/assets/carrier.jpeg";
import paperPosterAsset from "@/assets/paper-poster.jpeg";
import labInstrumentAsset from "@/assets/WhatsApp Image 2026-05-19 at 10.20.18 PM.jpeg";
import scannerAsset from "@/assets/WhatsApp Image 2026-05-19 at 10.20.19 PM(1).jpeg";
import samplesAsset from "@/assets/WhatsApp Image 2026-05-19 at 10.20.19 PM.jpeg";
import greenhouseAsset from "@/assets/WhatsApp Image 2026-05-19 at 10.28.26 PM.jpeg";
import fieldDiscussionAsset from "@/assets/WhatsApp Image 2026-05-19 at 10.29.09 PM(1).jpeg";
import businessStageAsset from "@/assets/WhatsApp Image 2026-05-19 at 7.50.30 PM(1).jpeg";
import awardPortraitAsset from "@/assets/WhatsApp Image 2026-05-19 at 7.50.30 PM.jpeg";
import teamAwardAsset from "@/assets/WhatsApp Image 2026-05-19 at 7.50.31 PM.jpeg";
import posterDiscussionAsset from "@/assets/WhatsApp Image 2026-05-19 at 8.03.11 PM(1).jpeg";
import formalPortraitAsset from "@/assets/WhatsApp Image 2026-05-19 at 8.03.12 PM.jpeg";
import seminarRoomAsset from "@/assets/WhatsApp Image 2026-05-19 at 8.05.01 PM(1).jpeg";
import micSessionAsset from "@/assets/WhatsApp Image 2026-05-19 at 8.05.01 PM.jpeg";
import audienceAsset from "@/assets/WhatsApp Image 2026-05-19 at 8.40.00 PM.jpeg";
import workshopAsset from "@/assets/WhatsApp Image 2026-05-19 at 8.40.01 PM.jpeg";

export function Gallery({
  speaking,
  poster,
  krishi,
}: {
  speaking: string;
  poster: string;
  krishi: string;
}) {
  const shots = [
    { src: speaking, caption: "Speaking · Journey to Career × bdjobs" },
    { src: poster, caption: "Poster · PTC&B Conference, DU 2026" },
    { src: certificateAsset, caption: "Certificate · 11th PTC&B Conference" },
    { src: birriFieldAsset, caption: "BIRRI field · Coastal tidal ecosystem" },
    { src: careerAsset, caption: "Career program · PSTURS × bdjobs" },
    { src: paperPosterAsset, caption: "Research poster · Silicon & stress" },
    { src: krishi, caption: "কৃষিবন্ধু · Agri-mechanization idea" },
    { src: teamAwardAsset, caption: "Qamarun Agro Farm · Winning team" },
    { src: businessStageAsset, caption: "Youth business conference" },
    { src: awardPortraitAsset, caption: "Award recognition · Case study" },
    { src: posterDiscussionAsset, caption: "Poster discussion" },
    { src: formalPortraitAsset, caption: "Conference portrait" },
    { src: micSessionAsset, caption: "Seminar · Student leadership" },
    { src: seminarRoomAsset, caption: "Seminar room · Research society" },
    { src: audienceAsset, caption: "Workshop audience" },
    { src: workshopAsset, caption: "Bioinformatics workshop" },
    { src: labInstrumentAsset, caption: "AAS operation · Lab instrument" },
    { src: scannerAsset, caption: "UV-Vis scanner · Lab work" },
    { src: samplesAsset, caption: "Plant samples · Tissue analysis" },
    { src: greenhouseAsset, caption: "Greenhouse · Experiment setup" },
    { src: fieldDiscussionAsset, caption: "Field discussion · Team planning" },
  ];

  const row1 = shots.slice(0, 11);
  const row2 = shots.slice(11);

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="font-mono text-xs text-primary mb-4">// 05 — MOMENTS</div>
          <h2 className="text-4xl md:text-6xl font-bold">From the field & stage</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl">
            Field trials, certificates, research posters, lab workflows, workshops, and leadership
            moments — continuously scrolling archive.
          </p>
        </motion.div>
      </div>

      {/* Row 1 — scroll left */}
      <GalleryRow items={row1} direction="left" />

      {/* Row 2 — scroll right */}
      <div className="mt-4">
        <GalleryRow items={row2} direction="right" />
      </div>
    </section>
  );
}

function GalleryRow({
  items,
  direction,
}: {
  items: { src: string; caption: string }[];
  direction: "left" | "right";
}) {
  const doubled = [...items, ...items];
  const animClass =
    direction === "left" ? "animate-gallery-scroll" : "animate-gallery-scroll-reverse";

  return (
    <div
      className="overflow-hidden"
      style={{
        maskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
      }}
    >
      <div className={`flex gap-3 w-max ${animClass}`}>
        {doubled.map((shot, i) => (
          <figure
            key={i}
            className="relative w-44 h-56 flex-shrink-0 overflow-hidden rounded-xl group"
          >
            <img
              src={shot.src}
              alt={shot.caption}
              loading="lazy"
              onError={(e) => (e.currentTarget.src = "/placeholder.svg")}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <figcaption className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-[10px] font-mono text-primary leading-tight line-clamp-2">
                {shot.caption}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
