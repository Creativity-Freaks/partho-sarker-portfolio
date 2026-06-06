import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "@/components/Portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Partho Sarker Dhrubo — Soil & Molecular Biology Researcher" },
      {
        name: "description",
        content:
          "Graduate researcher in soil science, molecular biology, bioinformatics, and coastal agricultural stress mitigation; Founding President of PSTU Research Society.",
      },
      {
        property: "og:title",
        content: "Partho Sarker Dhrubo — Soil & Molecular Biology Researcher",
      },
      {
        property: "og:description",
        content:
          "Graduate researcher in soil science, molecular biology, bioinformatics, and coastal agricultural stress mitigation.",
      },
    ],
  }),
  component: Portfolio,
});
