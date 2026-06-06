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
    {
      src: speaking,
      caption: "Speaking · Journey to Career × bdjobs",
      note: "Leading a student career session under PSTU Research Society.",
      span: "md:col-span-2 md:row-span-2",
    },
    {
      src: poster,
      caption: "Poster · PTC&B Conference, DU 2026",
      note: "Molecular docking and dynamics work on Fusarium graminearum.",
      span: "md:col-span-1 md:row-span-2",
    },
    {
      src: certificateAsset,
      caption: "Certificate · 11th PTC&B Conference",
      note: "Recognition for international poster presentation at University of Dhaka.",
      span: "md:col-span-2",
    },
    {
      src: birriFieldAsset,
      caption: "BIRRI field · Coastal tidal ecosystem",
      note: "Submergence-tolerant rice genotype field research in Patuakhali.",
      span: "md:col-span-1",
    },
    {
      src: careerAsset,
      caption: "Career program · PSTURS × bdjobs",
      note: "Group moment from the Journey to Career program.",
      span: "md:col-span-2",
    },
    {
      src: paperPosterAsset,
      caption: "Research poster · Silicon & stress resilience",
      note: "Publication-oriented poster work on plant stress and molecular analysis.",
      span: "md:col-span-1",
    },
    {
      src: krishi,
      caption: "কৃষিবন্ধু · Agri-mechanization idea",
      note: "App concept for agricultural transformation and farmer empowerment.",
      span: "md:col-span-1 md:row-span-2",
    },
    {
      src: teamAwardAsset,
      caption: "Qamarun Agro Farm · Winning team",
      note: "Team Sabuj Pathik - Green Travelers at the youth business conference.",
      span: "md:col-span-2",
    },
    {
      src: businessStageAsset,
      caption: "Youth business conference · Stage moment",
      note: "Pitching and presenting in Bangladesh's youth agribusiness space.",
      span: "md:col-span-1",
    },
    {
      src: awardPortraitAsset,
      caption: "Award recognition · Case study",
      note: "Business case study achievement from Qamarun Agro Farm.",
      span: "md:col-span-1",
    },
    {
      src: posterDiscussionAsset,
      caption: "Poster discussion · Research communication",
      note: "Explaining methods, outcomes, and agricultural impact to visitors.",
      span: "md:col-span-2",
    },
    {
      src: formalPortraitAsset,
      caption: "Conference portrait · Professional profile",
      note: "Formal moment from research presentation activities.",
      span: "md:col-span-1 md:row-span-2",
    },
    {
      src: micSessionAsset,
      caption: "Seminar microphone · Student leadership",
      note: "Moderating and speaking during academic and career sessions.",
      span: "md:col-span-1",
    },
    {
      src: seminarRoomAsset,
      caption: "Seminar room · Research society program",
      note: "Student audience during a PSTU learning and networking session.",
      span: "md:col-span-2",
    },
    {
      src: audienceAsset,
      caption: "Workshop audience · Campus engagement",
      note: "Building research culture through repeat student programs.",
      span: "md:col-span-1",
    },
    {
      src: workshopAsset,
      caption: "Bioinformatics workshop · Training session",
      note: "Hands-on learning environment for beginners and research-oriented students.",
      span: "md:col-span-2",
    },
    {
      src: labInstrumentAsset,
      caption: "Lab instrument · Chemical analysis",
      note: "Hands-on lab work supporting soil, plant, and sample analysis.",
      span: "md:col-span-1",
    },
    {
      src: scannerAsset,
      caption: "Root scanner · Image analysis",
      note: "Root trait measurement and data collection for crop physiology.",
      span: "md:col-span-1",
    },
    {
      src: samplesAsset,
      caption: "Sample preparation · Lab workflow",
      note: "Treatment samples and analytical preparation during research work.",
      span: "md:col-span-1",
    },
    {
      src: greenhouseAsset,
      caption: "Greenhouse trial · Pot experiment",
      note: "Controlled plant work for treatment setup and stress-response observation.",
      span: "md:col-span-2",
    },
    {
      src: fieldDiscussionAsset,
      caption: "Field discussion · Research coordination",
      note: "Planning and review moments with research collaborators and students.",
      span: "md:col-span-1",
    },
  ];
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="font-mono text-xs text-primary mb-4">// 05 — MOMENTS</div>
          <h2 className="text-4xl md:text-6xl font-bold">From the field & stage</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl">
            Field trials, certificates, research posters, lab workflows, workshops, and leadership
            moments from the updated portfolio archive.
          </p>
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
              <figcaption className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/95 via-background/70 to-transparent">
                <div className="text-xs font-mono text-primary">{s.caption}</div>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{s.note}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
