import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "@/components/Portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Partho Sarker Dhrubo — Bioinformatics Researcher" },
      {
        name: "description",
        content:
          "Bioinformatics researcher, molecular docking specialist, and President of PSTU Research Society. Bridging computational biology with agricultural innovation.",
      },
      { property: "og:title", content: "Partho Sarker Dhrubo — Bioinformatics Researcher" },
      {
        property: "og:description",
        content:
          "Bioinformatics researcher, molecular docking specialist, and President of PSTU Research Society.",
      },
    ],
  }),
  component: Portfolio,
});
